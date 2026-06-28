// ScrollToTopButton — Botón flotante para volver al inicio de la página
// Design: "Ascenso Imparable" — naranja fuego, aparece al hacer scroll
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Volver arriba"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        width: '3rem',
        height: '3rem',
        borderRadius: '0',
        backgroundColor: 'oklch(0.68 0.19 42)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 24px oklch(0.68 0.19 42 / 0.5)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        transition: 'opacity 0.25s cubic-bezier(0.23,1,0.32,1), transform 0.25s cubic-bezier(0.23,1,0.32,1)',
        clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'oklch(0.75 0.2 42)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.05)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'oklch(0.68 0.19 42)';
        (e.currentTarget as HTMLButtonElement).style.transform = visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)';
      }}
    >
      <ChevronUp size={22} strokeWidth={2.5} />
    </button>
  );
}
