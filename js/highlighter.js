// Text highlighter for the study guide.
//
// - Select text inside a .study-body → a "Highlight" popup appears near the selection.
//   Clicking it wraps the selection with <mark class="hl">.
// - Tap/click an existing highlight to remove it.
// - A "Clear highlights" button on the page wipes everything for this page.
//
// Persistence: highlights are stored as plain-text character offsets into each
// section — {sectionId: [{start, end, text}]} — NOT as rendered HTML. Storing
// HTML meant any later edit to the study guide was silently reverted for anyone
// with saved highlights (the stale markup was written straight back over the
// live content), and it made localStorage an HTML-injection sink, which matters
// because every project on a github.io account shares one origin. Offsets are
// inert data: the `text` copy is only ever compared, never inserted.

(function () {
  "use strict";

  const STORAGE_KEY = "cdl-highlights";
  const VERSION = "2";

  const bodies = Array.from(document.querySelectorAll(".study-section"));
  if (bodies.length === 0) return;

  // Restore saved highlights before wiring up listeners.
  restore();

  const popup = buildPopup();
  document.body.appendChild(popup);

  // Selection → show popup.
  document.addEventListener("selectionchange", maybeShowPopup);
  // Tap outside → hide popup.
  document.addEventListener("mousedown", (e) => {
    if (!popup.contains(e.target)) hidePopup();
  });
  window.addEventListener("scroll", hidePopup, true);
  window.addEventListener("resize", hidePopup);

  // Click on existing highlight → remove it.
  bodies.forEach((section) => {
    const body = section.querySelector(".study-body");
    if (!body) return;
    body.addEventListener("click", (e) => {
      const hl = e.target.closest(".hl");
      if (hl && body.contains(hl)) {
        unwrap(hl);
        save();
        hidePopup();
      }
    });
  });

  // Clear button.
  const clearBtn = document.getElementById("clear-highlights");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (!confirm("Remove all highlights on this page?")) return;
      bodies.forEach((section) => {
        section.querySelectorAll(".study-body .hl").forEach(unwrap);
      });
      save();
    });
  }

  // ---- helpers ----

  function buildPopup() {
    const el = document.createElement("div");
    el.className = "hl-popup";
    el.setAttribute("role", "toolbar");
    el.innerHTML = '<button type="button" data-act="hl">Highlight</button>';
    el.addEventListener("mousedown", (e) => e.preventDefault()); // keep selection
    el.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      if (btn.dataset.act === "hl") highlightSelection();
    });
    return el;
  }

  function maybeShowPopup() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
      hidePopup();
      return;
    }
    const range = sel.getRangeAt(0);
    const section = findSectionBody(range.commonAncestorContainer);
    if (!section) {
      hidePopup();
      return;
    }
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      hidePopup();
      return;
    }
    positionPopup(rect);
  }

  function positionPopup(rect) {
    const pageX = rect.left + window.scrollX + rect.width / 2;
    const pageY = rect.top + window.scrollY;
    popup.classList.add("is-visible");
    // Measure after displaying.
    const pw = popup.offsetWidth;
    const top = pageY - popup.offsetHeight - 8;
    popup.style.left = Math.max(8, pageX - pw / 2) + "px";
    popup.style.top = Math.max(8, top) + "px";
  }

  function hidePopup() {
    popup.classList.remove("is-visible");
  }

  function findSectionBody(node) {
    let n = node;
    if (n && n.nodeType === Node.TEXT_NODE) n = n.parentNode;
    while (n && n !== document) {
      if (n.classList && n.classList.contains("study-body")) return n;
      n = n.parentNode;
    }
    return null;
  }

  function highlightSelection() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    const body = findSectionBody(range.commonAncestorContainer);
    if (!body) return;

    // Walk the text nodes inside the range and wrap each slice. Handles
    // selections that cross element boundaries (e.g. across <li> items).
    wrapTextNodesInRange(range, body);
    sel.removeAllRanges();
    save();
    hidePopup();
  }

  function wrapTextNodesInRange(range, scope) {
    const textNodes = [];
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => range.intersectsNode(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
    });
    let n;
    while ((n = walker.nextNode())) textNodes.push(n);

    textNodes.forEach((node) => {
      // Skip text that's already inside a highlight.
      if (node.parentNode && node.parentNode.classList && node.parentNode.classList.contains("hl")) return;

      let start = 0;
      let end = node.nodeValue.length;
      if (node === range.startContainer) start = range.startOffset;
      if (node === range.endContainer) end = range.endOffset;
      if (end <= start) return;

      const before = node.nodeValue.slice(0, start);
      const middle = node.nodeValue.slice(start, end);
      const after = node.nodeValue.slice(end);

      const frag = document.createDocumentFragment();
      if (before) frag.appendChild(document.createTextNode(before));
      const mark = document.createElement("mark");
      mark.className = "hl";
      mark.appendChild(document.createTextNode(middle));
      frag.appendChild(mark);
      if (after) frag.appendChild(document.createTextNode(after));

      node.parentNode.replaceChild(frag, node);
    });
  }

  function unwrap(hlNode) {
    const parent = hlNode.parentNode;
    while (hlNode.firstChild) parent.insertBefore(hlNode.firstChild, hlNode);
    parent.removeChild(hlNode);
    parent.normalize();
  }

  // ---- persistence (offset-based) ----

  function textNodesOf(root) {
    const doc = root.ownerDocument || document;
    const out = [];
    const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    let n;
    while ((n = walker.nextNode())) out.push(n);
    return out;
  }

  // Character offsets of every highlighted span within `root`'s plain text.
  // Marks that are textually adjacent collapse into one range.
  function rangesOf(root) {
    const full = root.textContent;
    const spans = [];
    let pos = 0;
    textNodesOf(root).forEach((node) => {
      const len = node.nodeValue.length;
      const parent = node.parentNode;
      const inHl = parent && parent.closest && parent.closest(".hl");
      if (inHl && root.contains(inHl)) {
        const last = spans[spans.length - 1];
        if (last && last.end === pos) last.end = pos + len;
        else spans.push({ start: pos, end: pos + len });
      }
      pos += len;
    });
    return spans.map((s) => ({ start: s.start, end: s.end, text: full.slice(s.start, s.end) }));
  }

  // Build a live DOM Range covering [start, end) of `body`'s plain text.
  function rangeFromOffsets(body, start, end) {
    const range = document.createRange();
    let pos = 0;
    let startSet = false;
    const nodes = textNodesOf(body);
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const len = node.nodeValue.length;
      if (!startSet && start < pos + len) {
        range.setStart(node, start - pos);
        startSet = true;
      }
      if (startSet && end <= pos + len) {
        range.setEnd(node, end - pos);
        return range;
      }
      pos += len;
    }
    return null;
  }

  function save() {
    const out = { version: VERSION, sections: {} };
    bodies.forEach((section) => {
      if (!section.id) return;
      const body = section.querySelector(".study-body");
      if (!body) return;
      const ranges = rangesOf(body);
      if (ranges.length) out.sections[section.id] = ranges;
    });
    try {
      if (Object.keys(out.sections).length === 0) {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(out));
      }
    } catch (_) {}
  }

  function restore() {
    let raw;
    try { raw = localStorage.getItem(STORAGE_KEY); } catch (_) { return; }
    if (!raw) return;

    let parsed;
    try { parsed = JSON.parse(raw); } catch (_) { return; }
    if (!parsed || !parsed.sections) return;

    let sections = parsed.sections;
    let migrated = false;
    if (parsed.version === "1") {
      sections = migrateFromHtml(sections);
      migrated = true;
    } else if (parsed.version !== VERSION) {
      return;
    }

    bodies.forEach((section) => {
      const ranges = sections[section.id];
      if (!Array.isArray(ranges) || ranges.length === 0) return;
      const body = section.querySelector(".study-body");
      if (body) applyRanges(body, ranges);
    });

    if (migrated) save(); // rewrite storage in the new format
  }

  function applyRanges(body, ranges) {
    // Order doesn't matter: wrapping text in <mark> splits text nodes but adds
    // no characters, so every range's offsets stay valid as we go.
    ranges
      .filter((r) => r && typeof r.start === "number" && typeof r.end === "number" && r.end > r.start)
      .forEach((r) => {
        let { start, end } = r;
        const full = body.textContent;
        // If the guide's wording shifted since this was saved, relocate by text.
        if (typeof r.text === "string" && r.text.length && full.slice(start, end) !== r.text) {
          const found = full.indexOf(r.text);
          if (found === -1) return; // content changed too much — drop it
          start = found;
          end = found + r.text.length;
        }
        const range = rangeFromOffsets(body, start, end);
        if (range) wrapTextNodesInRange(range, body);
      });
  }

  // v1 stored each section's rendered innerHTML. Parse it inertly with
  // DOMParser (no script execution, no resource loads) purely to recover the
  // offsets, then throw the markup away — it never reaches the live page.
  function migrateFromHtml(sectionsHtml) {
    const out = {};
    Object.keys(sectionsHtml).forEach((id) => {
      const html = sectionsHtml[id];
      if (typeof html !== "string") return;
      try {
        const doc = new DOMParser().parseFromString(html, "text/html");
        out[id] = rangesOf(doc.body);
      } catch (_) {}
    });
    return out;
  }
})();
