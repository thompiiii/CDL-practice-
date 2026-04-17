// Theme toggle. Persists the user's pick in localStorage under "cdl-theme".
// Values: "light" | "dark" | null (null = follow OS).
// The <head> already applied the saved theme before paint; this file only
// wires up the toggle button and keeps its label in sync.

(function () {
  "use strict";

  const KEY = "cdl-theme";
  const root = document.documentElement;
  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    // What the page is actually showing right now.
    const override = root.getAttribute("data-theme");
    if (override === "light" || override === "dark") return override;
    return mql.matches ? "dark" : "light";
  }

  function setTheme(next) {
    if (next === "light" || next === "dark") {
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (_) {}
    } else {
      root.removeAttribute("data-theme");
      try { localStorage.removeItem(KEY); } catch (_) {}
    }
    updateButtons();
  }

  function updateButtons() {
    const showing = currentTheme();
    const opposite = showing === "dark" ? "light" : "dark";
    const labelShort = opposite === "dark" ? "Dark" : "Light";
    const aria = "Switch to " + opposite + " mode";
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.textContent = labelShort;
      btn.setAttribute("aria-label", aria);
      btn.setAttribute("title", aria);
    });
  }

  function onClick() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    setTheme(next);
  }

  function init() {
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", onClick);
    });
    updateButtons();
  }

  // If the OS changes and the user hasn't overridden, refresh the label.
  mql.addEventListener("change", () => {
    if (!root.getAttribute("data-theme")) updateButtons();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
