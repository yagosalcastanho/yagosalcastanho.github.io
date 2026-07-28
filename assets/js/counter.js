export function initCounters(selector = '[data-count]', options = {}) {
  const duration = options.duration ?? 2000;
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix ?? '';
      const prefix = el.dataset.prefix ?? '';
      const decimals = (el.dataset.decimals ?? '0') | 0;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = (target * eased).toFixed(decimals);
        el.textContent = `${prefix}${value}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  elements.forEach((el) => observer.observe(el));
}
