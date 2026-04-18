// Text highlighter for the study guide.
//
// - Select text inside a .study-body → a "Highlight" popup appears near the selection.
//   Clicking it wraps the selection with <mark class="hl">.
// - Tap/click an existing highlight to remove it.
// - After any change, the innerHTML of each section's .study-body is saved under
//   localStorage["cdl-highlights"]. A VERSION tag lets us invalidate stored HTML
//   if the page content changes in a breaking way.
// - A "Clear highlights" button on the page wipes everything for this page.

(function () {
  "use strict";

  const STORAGE_KEY = "cdl-highlights";
  const VERSION = "1";

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

  function save() {
    const out = { version: VERSION, sections: {} };
    bodies.forEach((section) => {
      if (!section.id) return;
      const body = section.querySelector(".study-body");
      if (!body) return;
      if (body.querySelector(".hl")) {
        out.sections[section.id] = body.innerHTML;
      }
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
    if (!parsed || parsed.version !== VERSION || !parsed.sections) return;
    bodies.forEach((section) => {
      const html = parsed.sections[section.id];
      if (!html) return;
      const body = section.querySelector(".study-body");
      if (body) body.innerHTML = html;
    });
  }
})();
