document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const content = document.getElementById(targetId);
      if (!content) return;

      const isHidden = content.style.display === "none";
      content.style.display = isHidden ? "" : "none";
      btn.textContent = isHidden ? "Hide" : "Show";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const darkBtn = document.getElementById("toggleThemeBtn");
  const dimBtn = document.getElementById("themeBtn");
  const lightBtn = document.getElementById("lightBtn");

  function setTheme(theme) {
    body.classList.remove("theme-light", "theme-dim", "theme-dark");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }

  // Load saved theme on refresh (default = light)
  const savedTheme = localStorage.getItem("theme") || "theme-light";
  setTheme(savedTheme);

  // Button click events
  if (darkBtn) darkBtn.addEventListener("click", () => setTheme("theme-dark"));
  if (dimBtn) dimBtn.addEventListener("click", () => setTheme("theme-dim"));
  if (lightBtn) lightBtn.addEventListener("click", () => setTheme("theme-light"));
});


