document.addEventListener("click", (e) => {
  const el = e.target.closest(".fullscreen-image");
  if (!el) return;

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    el.requestFullscreen();
  }
});
