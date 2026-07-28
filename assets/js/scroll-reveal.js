export function initScrollReveal(selector = '.reveal', options = {}) {
  const threshold = options.threshold ?? 0.1;
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  elements.forEach((el) => observer.observe(el));
}
