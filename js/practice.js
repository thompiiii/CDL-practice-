// Oregon CDL practice test logic.
// Depends on window.CDL_QUESTIONS from questions.js.

(function () {
  "use strict";

  const TEST_SIZE = 50;
  const PASS_PERCENT = 80;

  const el = {
    intro:       document.getElementById("intro-screen"),
    test:        document.getElementById("test-screen"),
    summary:     document.getElementById("summary-screen"),
    startBtn:    document.getElementById("start-btn"),
    retakeBtn:   document.getElementById("retake-btn"),
    nextBtn:     document.getElementById("next-btn"),
    progressText:document.getElementById("progress-text"),
    progressFill:document.getElementById("progress-fill"),
    scoreText:   document.getElementById("score-text"),
    qSection:    document.getElementById("question-section"),
    qText:       document.getElementById("question-text"),
    choiceList:  document.getElementById("choice-list"),
    feedback:    document.getElementById("feedback"),
    summaryScore:   document.getElementById("summary-score"),
    summaryPercent: document.getElementById("summary-percent"),
    summaryVerdict: document.getElementById("summary-verdict"),
    missedWrap:  document.getElementById("missed-wrap"),
    missedList:  document.getElementById("missed-list"),
  };

  let state = null;

  function shuffle(arr) {
    // Fisher–Yates on a copy
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildTest() {
    const pool = window.CDL_QUESTIONS || [];
    const picked = shuffle(pool).slice(0, Math.min(TEST_SIZE, pool.length));
    // For each picked question, shuffle its choices and remap the answer index.
    return picked.map((q) => {
      const indices = shuffle([0, 1, 2, 3]);
      const choices = indices.map((i) => q.choices[i]);
      const answer = indices.indexOf(q.answer);
      return {
        id: q.id,
        section: q.section,
        question: q.question,
        choices,
        answer,
        explanation: q.explanation,
      };
    });
  }

  function startTest() {
    state = {
      questions: buildTest(),
      idx: 0,
      correct: 0,
      answered: false,
      missed: [],
    };
    show("test");
    renderQuestion();
  }

  function show(which) {
    el.intro.classList.toggle("hidden", which !== "intro");
    el.test.classList.toggle("hidden", which !== "test");
    el.summary.classList.toggle("hidden", which !== "summary");
  }

  function renderQuestion() {
    const q = state.questions[state.idx];
    const total = state.questions.length;

    el.progressText.textContent = "Question " + (state.idx + 1) + " of " + total;
    el.scoreText.textContent = state.correct + " / " + state.idx + " correct";
    el.progressFill.style.width = ((state.idx) / total * 100) + "%";

    el.qSection.textContent = q.section;
    el.qText.textContent = q.question;

    el.choiceList.innerHTML = "";
    q.choices.forEach((text, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice";
      btn.dataset.idx = String(i);
      btn.innerHTML =
        '<span class="key">' + (i + 1) + '</span>' +
        '<span class="choice-text"></span>';
      btn.querySelector(".choice-text").textContent = text;
      btn.addEventListener("click", () => pickAnswer(i));
      li.appendChild(btn);
      el.choiceList.appendChild(li);
    });

    el.feedback.className = "feedback hidden";
    el.feedback.textContent = "";
    el.nextBtn.disabled = true;
    el.nextBtn.textContent = state.idx === total - 1 ? "Finish" : "Next";

    state.answered = false;
  }

  function pickAnswer(chosen) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.idx];
    const buttons = el.choiceList.querySelectorAll("button.choice");
    buttons.forEach((b) => {
      const i = Number(b.dataset.idx);
      b.disabled = true;
      if (i === q.answer) b.classList.add("is-correct");
      if (i === chosen && chosen !== q.answer) b.classList.add("is-wrong");
    });

    const isCorrect = chosen === q.answer;
    if (isCorrect) {
      state.correct += 1;
    } else {
      state.missed.push({
        question: q.question,
        yourAnswer: q.choices[chosen],
        correctAnswer: q.choices[q.answer],
        explanation: q.explanation,
      });
    }

    el.scoreText.textContent = state.correct + " / " + (state.idx + 1) + " correct";

    el.feedback.className = "feedback " + (isCorrect ? "correct" : "wrong");
    el.feedback.innerHTML =
      '<span class="label"></span><span class="body"></span>';
    el.feedback.querySelector(".label").textContent =
      isCorrect ? "Correct." : "Not quite.";
    el.feedback.querySelector(".body").textContent = " " + q.explanation;

    el.nextBtn.disabled = false;
    el.nextBtn.focus();
  }

  function next() {
    if (!state.answered) return;
    if (state.idx >= state.questions.length - 1) {
      finishTest();
    } else {
      state.idx += 1;
      renderQuestion();
    }
  }

  function finishTest() {
    const total = state.questions.length;
    const pct = Math.round((state.correct / total) * 100);
    const passed = pct >= PASS_PERCENT;

    el.summaryScore.textContent = state.correct + " / " + total;
    el.summaryPercent.textContent = pct + "% correct";
    el.summaryVerdict.textContent = passed ? "PASS" : "Keep studying";
    el.summaryVerdict.className = "verdict " + (passed ? "pass" : "fail");

    if (state.missed.length === 0) {
      el.missedWrap.classList.add("hidden");
    } else {
      el.missedWrap.classList.remove("hidden");
      el.missedList.innerHTML = "";
      state.missed.forEach((m) => {
        const div = document.createElement("div");
        div.className = "missed-item";
        const q = document.createElement("p");
        q.className = "missed-q";
        q.textContent = m.question;
        const you = document.createElement("p");
        you.className = "missed-a";
        you.innerHTML = "Your answer: ";
        const youSpan = document.createElement("span");
        youSpan.textContent = m.yourAnswer;
        you.appendChild(youSpan);
        const ok = document.createElement("p");
        ok.className = "missed-a";
        ok.innerHTML = "Correct: <strong></strong>";
        ok.querySelector("strong").textContent = m.correctAnswer;
        const why = document.createElement("p");
        why.className = "missed-a";
        why.textContent = m.explanation;
        div.appendChild(q);
        div.appendChild(you);
        div.appendChild(ok);
        div.appendChild(why);
        el.missedList.appendChild(div);
      });
    }

    show("summary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Keyboard shortcuts while the test is active.
  document.addEventListener("keydown", (e) => {
    if (el.test.classList.contains("hidden")) return;
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;

    if (!state.answered && e.key >= "1" && e.key <= "4") {
      pickAnswer(Number(e.key) - 1);
      e.preventDefault();
    } else if (state.answered && (e.key === "Enter" || e.key === "n" || e.key === "N")) {
      next();
      e.preventDefault();
    }
  });

  el.startBtn.addEventListener("click", startTest);
  el.retakeBtn.addEventListener("click", startTest);
  el.nextBtn.addEventListener("click", next);

  // Show intro on load.
  show("intro");
})();
