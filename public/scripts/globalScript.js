document.addEventListener("click", (e) => {
  const el = e.target.closest(".fullscreen-image");
  if (!el) return;

  const fsEl = document.fullscreenElement || document.webkitFullscreenElement;

  if (fsEl) {
    (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  } else {
    (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
  }
});
