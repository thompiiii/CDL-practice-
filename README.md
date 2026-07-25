# Oregon CDL Class A — Study & Practice

A small, dependency-free study site for the Oregon Commercial Driver License
general knowledge test (Class A permit).

- **Study guide** — condensed notes for the six tested chapters, with
  "key numbers to memorize" callouts and a text highlighter.
- **Flashcards** — 44 recall cards, filterable by section and shuffleable.
- **Practice test** — 50 questions drawn from a 52-question bank, scored
  against the real 80% pass mark, with per-question explanations and a
  per-section breakdown of what to restudy.

Content is paraphrased from the
[Oregon DMV Commercial Driver Manual](https://www.oregon.gov/odot/dmv/pages/form/manuals.aspx)
([direct PDF](https://www.oregon.gov/odot/forms/dmv/36.pdf)).

> This is an unofficial study aid, not affiliated with Oregon DMV. Passing
> these practice tests does not guarantee passing the real exam.

## Running it

No build step and no dependencies — it's plain HTML, CSS, and JavaScript.

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

A local server isn't required, but it more closely matches how the site
behaves when deployed.

## Deploying to GitHub Pages

1. Repo **Settings** → **Pages**
2. **Source**: "Deploy from a branch"
3. **Branch**: this branch, folder `/ (root)` → **Save**

The site publishes at `https://<user>.github.io/<repo>/` within a minute or
so. `.nojekyll` is committed so Pages serves the files as-is instead of
running them through Jekyll.

## Layout

```
index.html          Landing page
study.html          Study guide (six collapsible sections)
flashcards.html     Flashcard drill
practice.html       Practice test
css/styles.css      All styling; light/dark themes via CSS custom properties
js/theme.js         Theme toggle (localStorage: cdl-theme)
js/highlighter.js   Study-guide highlighting (localStorage: cdl-highlights)
js/questions.js     Practice question bank
js/practice.js      Test flow, scoring, results
js/flashcard-data.js  Flashcard deck
js/flashcards.js    Flashcard navigation and flipping
```

Every page loads its scripts with plain `<script>` tags and communicates
through globals (`window.CDL_QUESTIONS`, `window.CDL_FLASHCARDS`) — there is
no module system or bundler to set up.

## Adding content

**A practice question** — append to the array in `js/questions.js`. `answer`
is the index into `choices`, and every question needs an `explanation`
(it's shown as feedback and in the missed-question review):

```js
{
  id: 53,
  section: "Air Brakes",
  question: "…",
  choices: ["…", "…", "…", "…"],
  answer: 2,
  explanation: "…"
}
```

`section` should match one of the existing section names so it rolls up
correctly in the results breakdown. The test draws 50 questions at random
from the bank, so growing the bank makes repeat sessions less repetitive.

**A flashcard** — append `{ section, front, back }` to `js/flashcard-data.js`.
New section names automatically appear in the filter dropdown.

**A study guide section** — add a `<details class="study-section">` block with
a **stable, unique `id`**. Highlights are persisted per section id, so
renaming an id orphans any highlights saved under the old one.

## Notes on persistence

Everything is stored client-side in `localStorage`; there is no backend and
no data leaves the browser.

- `cdl-theme` — `"light"` or `"dark"`, absent means follow the OS setting.
- `cdl-highlights` — highlights as plain-text character offsets
  (`{sectionId: [{start, end, text}]}`), never as HTML. Storing markup would
  mean later edits to the study guide got silently reverted for existing
  users, and would make localStorage an injection sink — which matters
  because all projects on a `github.io` account share one origin. Offsets
  also let a highlight survive small wording changes: on load it relocates
  by searching for the saved text, and is dropped only if that text is gone.

Practice test progress is intentionally in-memory only; a reload starts a
fresh, reshuffled test.
