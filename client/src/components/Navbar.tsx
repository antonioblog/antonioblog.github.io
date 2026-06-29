// Navbar — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — dark nav with orange accent, Oswald font
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const LOGO_URL = '/images/logoAEC.png';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/historia', label: 'Historia' },
  { href: '/estadisticas', label: 'Estadísticas' },
  { href: '/logros', label: 'Logros' },
  { href: '/galeria', label: 'Fotos' },
  { href: '/videos', label: 'Vídeos' },
  { href: '/sobre', label: 'Sobre Antonio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[oklch(0.08_0.01_260/0.97)] backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="AEC Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-sm md:text-base text-white leading-tight tracking-wider uppercase">
                Antonio Encinas
              </div>
              <div className="font-display text-xs text-[oklch(0.68_0.19_42)] tracking-widest uppercase">
                Camacho
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display font-500 text-sm tracking-wider uppercase px-4 py-2 transition-all duration-200 relative group ${
                  location === link.href
                    ? 'text-[oklch(0.68_0.19_42)]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[oklch(0.68_0.19_42)] transition-transform duration-200 origin-left ${
                    location === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white hover:text-[oklch(0.68_0.19_42)] transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[oklch(0.08_0.01_260/0.97)] backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <nav className="relative flex flex-col items-center justify-center h-full gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display font-bold text-3xl tracking-wider uppercase py-3 transition-all duration-200 ${
                location === link.href
                  ? 'text-[oklch(0.68_0.19_42)]'
                  : 'text-white hover:text-[oklch(0.68_0.19_42)]'
              }`}
              style={{
                transitionDelay: open ? `${i * 60}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
