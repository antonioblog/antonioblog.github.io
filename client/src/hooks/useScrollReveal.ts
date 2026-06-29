import { useEffect, useRef } from 'react';

export function useScrollReveal(dep?: unknown) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Pequeño delay para que el DOM se actualice antes de observar
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach((el) => {
        // Si el elemento ya estaba visible (is-visible), no resetear
        // Si es nuevo (sin is-visible), observarlo
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);

  return ref;
}

export function useCountUp(target: number, duration: number = 1500) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                start = target;
                clearInterval(timer);
              }
              if (el) el.textContent = Math.floor(start).toString();
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}
