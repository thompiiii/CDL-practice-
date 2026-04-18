// Flashcard UI logic. Depends on window.CDL_FLASHCARDS (flashcard-data.js).

(function () {
  "use strict";

  const el = {
    card:        document.getElementById("flashcard"),
    front:       document.getElementById("card-front"),
    back:        document.getElementById("card-back"),
    sectionTag:  document.getElementById("card-section"),
    sectionTagB: document.getElementById("card-section-back"),
    counter:     document.getElementById("card-counter"),
    prev:        document.getElementById("prev-btn"),
    next:        document.getElementById("next-btn"),
    shuffle:     document.getElementById("shuffle-btn"),
    filter:      document.getElementById("section-filter"),
  };

  const all = (window.CDL_FLASHCARDS || []).slice();
  let deck = all.slice();
  let idx = 0;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function populateSections() {
    const seen = new Set();
    all.forEach((c) => seen.add(c.section));
    Array.from(seen).sort().forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      el.filter.appendChild(opt);
    });
  }

  function applyFilter() {
    const sel = el.filter.value;
    deck = sel ? all.filter((c) => c.section === sel) : all.slice();
    idx = 0;
    render();
  }

  function render() {
    if (deck.length === 0) {
      el.front.textContent = "No cards.";
      el.back.textContent = "";
      el.sectionTag.textContent = "";
      el.sectionTagB.textContent = "";
      el.counter.textContent = "0 / 0";
      el.prev.disabled = true;
      el.next.disabled = true;
      return;
    }
    const c = deck[idx];
    el.front.textContent = c.front;
    el.back.textContent = c.back;
    el.sectionTag.textContent = c.section;
    el.sectionTagB.textContent = c.section;
    el.counter.textContent = (idx + 1) + " / " + deck.length;
    el.card.setAttribute("aria-pressed", "false"); // reset to front when changing cards
    el.prev.disabled = idx === 0;
    el.next.disabled = idx === deck.length - 1;
  }

  function flip() {
    const flipped = el.card.getAttribute("aria-pressed") === "true";
    el.card.setAttribute("aria-pressed", flipped ? "false" : "true");
  }

  function go(delta) {
    const next = idx + delta;
    if (next < 0 || next >= deck.length) return;
    idx = next;
    render();
  }

  function shuffleDeck() {
    deck = shuffle(deck);
    idx = 0;
    render();
  }

  // Wire up.
  populateSections();
  el.card.addEventListener("click", flip);
  el.prev.addEventListener("click", () => go(-1));
  el.next.addEventListener("click", () => go(+1));
  el.shuffle.addEventListener("click", shuffleDeck);
  el.filter.addEventListener("change", applyFilter);

  document.addEventListener("keydown", (e) => {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight") { go(+1); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { go(-1); e.preventDefault(); }
    else if (e.key === " " || e.key === "Enter") {
      // Space/Enter also flip when the card itself is focused; this handles
      // global presses so you can flip without clicking.
      if (document.activeElement !== el.card) {
        flip();
        e.preventDefault();
      }
    }
  });

  render();
})();
