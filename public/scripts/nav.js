const header = document.querySelector(".site-header");
const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector("[data-nav]");

if (header && btn && nav) {
  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", () => {
    const open = !header.classList.contains("is-open");
    setOpen(open);
  });

  // Fermer au clic sur un lien
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  // Fermer avec ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Fermer si on clique en dehors
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) setOpen(false);
  });
}
