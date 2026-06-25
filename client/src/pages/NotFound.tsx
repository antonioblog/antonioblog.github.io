// NotFound — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — 404 on-brand
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_260)] flex items-center justify-center overflow-hidden relative">
      {/* Giant 404 background */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-white/[0.04]"
          style={{ fontSize: 'clamp(10rem, 40vw, 36rem)', letterSpacing: '-0.05em' }}
        >
          404
        </span>
      </div>

      <div className="container relative z-10 text-center py-32">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            className="h-0.5 w-12"
            style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
          />
          <span className="font-display text-xs tracking-[0.25em] uppercase text-[oklch(0.68_0.19_42)]">
            Error 404
          </span>
          <div
            className="h-0.5 w-12"
            style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
          />
        </div>
        <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem,8vw,5rem)' }}>
          FUERA DE JUEGO
        </h1>
        <p className="font-body text-lg text-white/60 max-w-md mx-auto mb-10">
          Esta página no existe. Pero la trayectoria de Antonio sí. Vuelve al campo.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display font-bold text-sm tracking-wider uppercase px-7 py-3.5 transition-all duration-200 active:scale-[0.97]"
          style={{
            background: 'oklch(0.68 0.19 42)',
            color: 'oklch(0.08 0.01 260)',
            clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
          }}
        >
          Volver al inicio
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
