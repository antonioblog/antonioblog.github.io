// Logros — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — milestone cards with dramatic visual impact
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, TrendingUp, Star, Zap, ArrowUpRight } from 'lucide-react';

const HERO_BG = '/images/antonio-hero-bg.webp';

const logros = [
  {
    temporada: '20/21',
    titulo: 'Debut en Segunda Andaluza',
    subtitulo: 'Cadete 1.º año · Ogíjares 89',
    descripcion: 'Con solo cadete de primer año, Antonio debuta en Segunda Andaluza, demostrando que su nivel supera su categoría. Además marca 5 goles en Tercera Andaluza con el dorsal 27.',
    stats: [{ label: 'Goles', value: '5' }, { label: 'Dorsal', value: '27' }],
    icono: Star,
    color: 'orange',
  },
  {
    temporada: '21/22',
    titulo: 'El dorsal 21 se hace suyo',
    subtitulo: 'Cadete 2.º año · Ogíjares 89',
    descripcion: 'Adopta el dorsal 21, que ya no abandonará. Suma 3 goles más y consolida su posición en el equipo. La constancia empieza a dar resultados medibles.',
    stats: [{ label: 'Goles', value: '3' }, { label: 'Dorsal', value: '21' }],
    icono: Trophy,
    color: 'orange',
  },
  {
    temporada: '22/23',
    titulo: 'Triple competición simultánea',
    subtitulo: 'Juvenil 1.º año · Ogíjares 89',
    descripcion: 'El año más exigente hasta la fecha. Antonio entrena 5 días a la semana y juega en Tercera, Cuarta y Segunda Andaluza en el mismo fin de semana. Una situación límite que afrontó con la cabeza alta.',
    stats: [{ label: 'Entrenamientos/semana', value: '5' }, { label: 'Competiciones', value: '3' }],
    icono: Zap,
    color: 'orange',
  },
  {
    temporada: '23/24',
    titulo: 'Debut con el senior',
    subtitulo: 'Juvenil 2.º año · C.F. Sierra Nevada-Cenes',
    descripcion: 'Tras superar la adversidad con el Alhendín, ficha por el C.F. Sierra Nevada-Cenes y debuta con el equipo senior. Marca 3 goles en una temporada de dos clubs y múltiples categorías.',
    stats: [{ label: 'Goles', value: '3' }, { label: 'Clubs', value: '2' }],
    icono: TrendingUp,
    color: 'green',
  },
  {
    temporada: '24/25',
    titulo: 'Ascenso a Segunda Andaluza',
    subtitulo: 'Juvenil 3.º año · C.F. Sierra Nevada-Cenes',
    descripcion: 'El equipo asciende a Segunda Andaluza y Antonio es parte fundamental de ese logro. Compagina el equipo juvenil con el senior, consolidando su presencia en el fútbol adulto.',
    stats: [{ label: 'Categoría alcanzada', value: '2ª And.' }, { label: 'Dorsal', value: '21' }],
    icono: TrendingUp,
    color: 'green',
  },
  {
    temporada: '25/26',
    titulo: 'Primera Andaluza Senior',
    subtitulo: 'Senior · C.F. Sierra Nevada-Cenes',
    descripcion: 'El mayor logro hasta la fecha. Tras comenzar la temporada en el C.D. Numancia (Tercera Andaluza), el C.F. Sierra Nevada-Cenes lo ficha a mitad de temporada para disputar la Primera Andaluza Senior. El reconocimiento definitivo.',
    stats: [{ label: 'Categoría', value: '1ª And.' }, { label: 'Clubs', value: '2' }],
    icono: Trophy,
    color: 'green',
    principal: true,
  },
];

const colorMap = {
  orange: {
    badge: 'oklch(0.68 0.19 42)',
    text: 'oklch(0.68 0.19 42)',
    border: 'oklch(0.68 0.19 42)',
    bg: 'oklch(0.68 0.19 42 / 0.08)',
    iconBg: 'oklch(0.68 0.19 42 / 0.15)',
  },
  green: {
    badge: 'oklch(0.72 0.18 145)',
    text: 'oklch(0.72 0.18 145)',
    border: 'oklch(0.72 0.18 145)',
    bg: 'oklch(0.72 0.18 145 / 0.08)',
    iconBg: 'oklch(0.72 0.18 145 / 0.15)',
  },
};

export default function Logros() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_260)]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.01_260/0.25)] to-[oklch(0.08_0.01_260)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[oklch(0.68_0.19_42)]" />
            <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
              Hitos y momentos clave
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight">
            LOGROS Y<br />
            <span className="text-[oklch(0.68_0.19_42)]">MOMENTOS</span><br />
            CLAVE
          </h1>
          <p className="font-body text-lg text-white/60 max-w-xl mt-4">
            Los hitos que definen el carácter, la evolución y la mentalidad competitiva de Antonio.
          </p>
        </div>
      </section>

      {/* ── LOGROS GRID ── */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logros.map((logro, i) => {
              const colors = colorMap[logro.color as keyof typeof colorMap];
              const Icon = logro.icono;
              return (
                <div
                  key={logro.temporada}
                  className={`reveal relative bg-[oklch(0.13_0.015_260)] border p-6 transition-all duration-300 group ${
                    logro.principal ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{
                    borderColor: logro.principal ? colors.border : 'rgba(255,255,255,0.1)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = colors.border + '80';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${colors.border}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = logro.principal ? colors.border : 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  {/* Principal badge */}
                  {logro.principal && (
                    <div
                      className="absolute -top-3 left-6 font-display text-xs tracking-widest uppercase px-3 py-1"
                      style={{ backgroundColor: colors.badge, color: 'oklch(0.08 0.01 260)' }}
                    >
                      Logro principal
                    </div>
                  )}

                  {/* Icon + season */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 flex items-center justify-center"
                      style={{ backgroundColor: colors.iconBg }}
                    >
                      <Icon size={22} style={{ color: colors.text }} />
                    </div>
                    <span
                      className="season-badge"
                      style={{ backgroundColor: colors.badge, color: 'oklch(0.08 0.01 260)' }}
                    >
                      {logro.temporada}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-1 tracking-wide leading-tight">
                    {logro.titulo.toUpperCase()}
                  </h3>
                  <div className="font-body text-xs text-white/40 uppercase tracking-wider mb-4">
                    {logro.subtitulo}
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-white/65 leading-relaxed mb-6">
                    {logro.descripcion}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                    {logro.stats.map((stat) => (
                      <div key={stat.label}>
                        <div
                          className="font-display font-bold text-xl"
                          style={{ color: colors.text }}
                        >
                          {stat.value}
                        </div>
                        <div className="font-body text-xs text-white/40 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESUMEN NUMÉRICO ── */}
      <section className="py-16 bg-[oklch(0.11_0.012_260)]">
        <div className="container">
          <div className="reveal text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              EN NÚMEROS
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10', label: 'Temporadas consecutivas', color: 'orange' },
              { value: '11', label: 'Goles documentados', color: 'green' },
              { value: '4', label: 'Clubes distintos', color: 'orange' },
              { value: '1ª', label: 'Andaluza Senior', color: 'green' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="reveal text-center p-6 bg-[oklch(0.15_0.015_260)] border border-white/10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="font-display font-bold text-4xl md:text-5xl mb-2"
                  style={{ color: item.color === 'green' ? 'oklch(0.72 0.18 145)' : 'oklch(0.68 0.19 42)' }}
                >
                  {item.value}
                </div>
                <div className="font-body text-xs text-white/50 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
