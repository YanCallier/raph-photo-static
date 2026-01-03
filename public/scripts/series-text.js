document.querySelectorAll("[data-collapsible]").forEach((wrap) => {
  const btn = wrap.querySelector(".series-text__toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const open = wrap.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Réduire" : "Lire la suite";

    if (!open) {
      wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
