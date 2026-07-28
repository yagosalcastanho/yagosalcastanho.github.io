export function initTypewriter(elementId, titles, options = {}) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const typeSpeed = options.typeSpeed ?? 80;
  const deleteSpeed = options.deleteSpeed ?? 45;
  const pauseMs = options.pauseMs ?? 1800;

  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function render(text) {
    el.innerHTML = text + '<span class="cursor"></span>';
  }

  function tick() {
    const current = titles[titleIndex];

    if (!deleting) {
      charIndex++;
      render(current.slice(0, charIndex));
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, pauseMs);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      render(current.slice(0, charIndex));
      if (charIndex === 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  tick();
}
