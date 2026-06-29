// Footer — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — minimal dark footer with orange accent
import { Link } from 'wouter';

const LOGO_URL = '/images/logoAEC.png';

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.06_0.01_260)] border-t border-white/10 mt-24">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="AEC" className="w-12 h-12 object-contain" />
            <div>
              <div className="font-display font-bold text-white tracking-wider uppercase">
                Antonio Encinas Camacho
              </div>
              <div className="font-body text-sm text-white/50 mt-0.5">
                Diez temporadas. Un camino. Sin atajos.
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: '/', label: 'Inicio' },
              { href: '/historia', label: 'Historia' },
              { href: '/estadisticas', label: 'Estadísticas' },
              { href: '/logros', label: 'Logros' },
              { href: '/galeria', label: 'Fotos' },
              { href: '/videos', label: 'Vídeos' },
              { href: '/sobre', label: 'Sobre Antonio' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-sm tracking-wider uppercase text-white/50 hover:text-[oklch(0.68_0.19_42)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/30">
            © 2026 Antonio Encinas Camacho. Proyecto web personal.
          </p>
          <p className="font-body text-sm text-white/30">
            Constancia · Disciplina · Trabajo en equipo
          </p>
        </div>
      </div>
    </footer>
  );
}
