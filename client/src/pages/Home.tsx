// Home — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — editorial sports, diagonal accents, giant "21", asymmetric layout
import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Flame, Target, Users, Shield } from 'lucide-react';
import { careerStats, valores, seasons } from '@/lib/seasonData';
import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/antonio-hero-bg-VjfVos9W23TCVHrXmCTk8k.webp';
const ACTION_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/antonio-ball-action-ZBiMY2K5B3Aya2im3tefxR.webp';
const SIERRA_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/antonio-sierra-nevada-GpgbwazqSoYYKzuDgSNX64.webp';
const FIELD_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/antonio-field-texture-gFfCTZ25nvsTJcok7PyKFB.webp';

const valorIcons = [Flame, Target, Users, Shield];

function StatCard({ value, label, delay, green = false }: { value: number; label: string; delay: number; green?: boolean }) {
  const countRef = useCountUp(value);
  return (
    <div className="reveal flex flex-col items-start" style={{ transitionDelay: `${delay}ms` }}>
      <div
        className="font-display font-bold text-5xl md:text-6xl leading-none"
        style={{ color: green ? 'oklch(0.72 0.18 145)' : 'oklch(0.68 0.19 42)' }}
      >
        <span ref={countRef}>0</span>
      </div>
      <div className="font-body text-xs text-white/50 mt-2 tracking-widest uppercase">{label}</div>
      <div
        className="mt-2 h-0.5 w-8"
        style={{ background: green ? 'oklch(0.72 0.18 145)' : 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
      />
    </div>
  );
}

export default function Home() {
  useScrollReveal();
  const recentSeasons = seasons.slice(-3).reverse();

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_260)]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Diagonal gradient: heavy left, fading right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.01_260)] via-[oklch(0.08_0.01_260/0.88)] to-[oklch(0.08_0.01_260/0.35)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_260)] via-transparent to-transparent" />

        {/* Giant 21 — right side, cropped */}
        <div
          className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-display font-bold leading-none text-white/[0.06] select-none pointer-events-none"
          style={{ fontSize: 'clamp(12rem, 40vw, 52rem)', letterSpacing: '-0.05em' }}
          aria-hidden="true"
        >
          21
        </div>

        {/* Diagonal orange slash — top left */}
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-8deg) translateX(80px)', opacity: 0.7 }}
        />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow with diagonal line */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="h-0.5 w-16"
                style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
              />
              <span className="font-display text-xs tracking-[0.25em] uppercase text-[oklch(0.68_0.19_42)]">
                Proyecto deportivo personal
              </span>
            </div>

            {/* Title — asymmetric layout */}
            <div className="mb-8">
              <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight">
                <span className="block text-[clamp(3rem,10vw,7rem)]">ANTONIO</span>
                <span
                  className="block text-[clamp(3rem,10vw,7rem)]"
                  style={{ color: 'oklch(0.68 0.19 42)', WebkitTextStroke: '0px' }}
                >
                  ENCINAS
                </span>
                <span className="block text-[clamp(2.2rem,7vw,5rem)] text-white/60 font-medium tracking-[0.1em]">
                  CAMACHO
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="font-body text-lg sm:text-xl text-white/65 max-w-lg mb-10 leading-relaxed border-l-2 border-[oklch(0.68_0.19_42)] pl-4">
              Diez temporadas de constancia, trabajo y ascenso continuo en el fútbol andaluz.
              Del Ogíjares 89 a la Primera Andaluza Senior.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/historia"
                className="inline-flex items-center gap-2 font-display font-bold text-sm tracking-wider uppercase px-7 py-3.5 transition-all duration-200 active:scale-[0.97]"
                style={{ background: 'oklch(0.68 0.19 42)', color: 'oklch(0.08 0.01 260)', clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)' }}
              >
                Ver su historia
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/estadisticas"
                className="inline-flex items-center gap-2 font-display font-500 text-sm tracking-wider uppercase px-7 py-3.5 border border-white/25 text-white transition-all duration-200 hover:border-[oklch(0.68_0.19_42)] hover:text-[oklch(0.68_0.19_42)] active:scale-[0.97]"
                style={{ clipPath: 'polygon(4% 0, 100% 0, 100% 100%, 0 100%)' }}
              >
                Trayectoria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR — angled ── */}
      <section
        className="relative py-14"
        style={{
          background: 'oklch(0.12 0.015 260)',
          clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)',
          marginTop: '-3rem',
          paddingTop: '5rem',
          paddingBottom: '5rem',
        }}
      >
        {/* Giant 21 background */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 font-display font-bold text-white/[0.04] select-none pointer-events-none"
          style={{ fontSize: 'clamp(6rem, 18vw, 16rem)', letterSpacing: '-0.05em' }}
          aria-hidden="true"
        >
          21
        </div>
        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            <StatCard value={careerStats.temporadas} label="Temporadas" delay={0} />
            <StatCard value={careerStats.clubes} label="Clubes" delay={100} />
            <StatCard value={careerStats.golesDocumentados} label="Goles" delay={200} green />
            <StatCard value={careerStats.dorsalIconico} label="Dorsal icónico" delay={300} green />
          </div>
        </div>
      </section>

      {/* ── INTRO / IDENTITY — asymmetric ── */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            {/* Text — left, wider */}
            <div>
              <div className="flex items-center gap-3 mb-6 reveal">
                <div
                  className="h-0.5 w-10"
                  style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
                />
                <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
                  Quién es Antonio
                </span>
              </div>
              <h2 className="font-display font-bold text-white leading-[0.92] mb-8 reveal">
                <span className="block text-[clamp(2.5rem,6vw,4.5rem)]">EL FÚTBOL NO</span>
                <span
                  className="block text-[clamp(2.5rem,6vw,4.5rem)]"
                  style={{ color: 'oklch(0.68 0.19 42)' }}
                >
                  TE REGALA
                </span>
                <span className="block text-[clamp(2.5rem,6vw,4.5rem)]">NADA</span>
              </h2>
              <div className="space-y-4 reveal max-w-xl">
                <p className="font-body text-white/70 leading-relaxed">
                  Antonio Encinas Camacho empezó en el Ogíjares 89 en la temporada 2016/17 como alevín de primer año.
                  Desde entonces, no ha parado. Diez temporadas seguidas, sin saltarse una, escalando categoría a categoría
                  con el mismo rigor y la misma entrega.
                </p>
                <p className="font-body text-white/70 leading-relaxed">
                  Es un chico <strong className="text-white">constante, trabajador y disciplinado</strong> para entrenar y jugar,
                  además de buen compañero. Cuando el camino se complica, Antonio responde con trabajo.
                </p>
                <p className="font-body text-white/70 leading-relaxed">
                  En la temporada 25/26 da el salto definitivo al fútbol senior, terminando la temporada en
                  <strong style={{ color: 'oklch(0.68 0.19 42)' }}> Primera Andaluza Senior</strong> con el C.F. Sierra Nevada-Cenes.
                </p>
              </div>
              <div className="mt-8 reveal">
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase"
                  style={{ color: 'oklch(0.68 0.19 42)', borderBottom: '1px solid oklch(0.68 0.19 42 / 0.4)', paddingBottom: '4px' }}
                >
                  Más sobre Antonio
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Image — right, clipped */}
            <div className="relative reveal-right">
              <div
                className="relative overflow-hidden"
                style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)' }}
              >
                <img
                  src={ACTION_IMG}
                  alt="Silueta de futbolista en acción"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_260/0.5)] to-transparent" />
              </div>
              {/* Floating dorsal badge */}
              <div
                className="absolute -bottom-4 -left-4 p-5 z-10"
                style={{ background: 'oklch(0.68 0.19 42)', clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' }}
              >
                <div className="font-display font-bold text-4xl leading-none" style={{ color: 'oklch(0.08 0.01 260)' }}>
                  21
                </div>
                <div className="font-body text-xs uppercase tracking-wider mt-0.5" style={{ color: 'oklch(0.08 0.01 260 / 0.7)' }}>
                  Dorsal
                </div>
              </div>
              {/* Diagonal accent line */}
              <div
                className="absolute -right-2 top-8 bottom-8 w-1"
                style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewY(-3deg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES — angled section ── */}
      <section
        className="relative py-24"
        style={{
          background: 'oklch(0.11 0.012 260)',
          clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
          marginTop: '-2rem',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        {/* Giant "AEC" background text */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-white/[0.025] select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', letterSpacing: '0.3em' }}
          aria-hidden="true"
        >
          AEC
        </div>

        <div className="container relative">
          <div className="flex items-end justify-between gap-4 mb-14 reveal">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="h-0.5 w-8"
                  style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
                />
                <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
                  Los pilares
                </span>
              </div>
              <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
                LO QUE LO DEFINE
              </h2>
            </div>
            {/* Decorative slash */}
            <div
              className="hidden md:block h-16 w-1 shrink-0"
              style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-10deg)', opacity: 0.5 }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valores.map((valor, i) => {
              const Icon = valorIcons[i];
              return (
                <div
                  key={valor.titulo}
                  className="reveal card-slash bg-[oklch(0.15_0.015_260)] border border-white/10 p-6 pl-8 group hover:border-[oklch(0.68_0.19_42)/0.4] transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-4 transition-colors duration-300"
                    style={{ background: 'oklch(0.68 0.19 42 / 0.12)' }}
                  >
                    <Icon size={20} style={{ color: 'oklch(0.68 0.19 42)' }} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide">
                    {valor.titulo.toUpperCase()}
                  </h3>
                  <p className="font-body text-sm text-white/55 leading-relaxed">
                    {valor.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RECENT SEASONS — editorial data ── */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="h-0.5 w-8"
                  style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
                />
                <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
                  Trayectoria
                </span>
              </div>
              <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
                ÚLTIMAS<br />TEMPORADAS
              </h2>
            </div>
            <Link
              href="/historia"
              className="reveal inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase"
              style={{ color: 'oklch(0.68 0.19 42)', borderBottom: '1px solid oklch(0.68 0.19 42 / 0.4)', paddingBottom: '4px' }}
            >
              Ver todas
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-3">
            {recentSeasons.map((season, i) => (
              <div
                key={season.id}
                className="reveal card-slash bg-[oklch(0.13_0.015_260)] border border-white/10 p-5 pl-8 group transition-all duration-300"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  borderLeftColor: season.color === 'green' ? 'oklch(0.72 0.18 145 / 0.3)' : 'oklch(0.68 0.19 42 / 0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = season.color === 'green'
                    ? 'oklch(0.72 0.18 145 / 0.5)'
                    : 'oklch(0.68 0.19 42 / 0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-5 flex-1 min-w-0">
                    {/* Shield badge */}
                    <div className="shrink-0 flex flex-col items-center justify-center w-12 h-14 font-display font-bold text-xs tracking-wider text-[oklch(0.08_0.01_260)]"
                      style={{
                        background: season.color === 'green' ? 'oklch(0.72 0.18 145)' : 'oklch(0.68 0.19 42)',
                        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
                      }}
                    >
                      {season.temporada.split('/').map((part, pi) => (
                        <span key={pi} className="leading-tight">{part}</span>
                      ))}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-white text-base tracking-wide truncate">
                        {season.club.toUpperCase()}
                      </div>
                      <div className="font-body text-xs text-white/45 mt-0.5">
                        {season.categoria}{season.division ? ` · ${season.division}` : ''}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 shrink-0">
                    {season.goles !== undefined && (
                      <div className="text-right">
                        <span className="font-display font-bold text-2xl" style={{ color: 'oklch(0.72 0.18 145)' }}>
                          {season.goles}
                        </span>
                        <span className="font-body text-xs text-white/35 ml-1 uppercase tracking-wider">goles</span>
                      </div>
                    )}
                    {season.hito && (
                      <span
                        className="font-display text-xs tracking-wider uppercase border px-3 py-1"
                        style={{ color: 'oklch(0.68 0.19 42)', borderColor: 'oklch(0.68 0.19 42 / 0.4)' }}
                      >
                        Hito
                      </span>
                    )}
                  </div>
                </div>
                {season.destacado && (
                  <p
                    className="font-body text-xs mt-3 border-t border-white/10 pt-3"
                    style={{ color: season.color === 'green' ? 'oklch(0.72 0.18 145)' : 'oklch(0.68 0.19 42)' }}
                  >
                    {season.destacado}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIERRA NEVADA CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SIERRA_IMG})` }}
        />
        <div className="absolute inset-0 bg-[oklch(0.08_0.01_260/0.85)]" />
        {/* Diagonal orange overlay strip */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-5deg)' }}
        />
        <div className="container relative z-10 reveal">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div
                className="h-0.5 w-16"
                style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
              />
              <span className="font-display text-xs tracking-[0.25em] uppercase text-[oklch(0.68_0.19_42)]">
                La historia completa
              </span>
              <div
                className="h-0.5 w-16"
                style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }}
              />
            </div>
            <h2 className="font-display font-bold text-white leading-[0.92] mb-6">
              <span className="block text-[clamp(2.5rem,8vw,6rem)]">DIEZ TEMPORADAS.</span>
              <span className="block text-[clamp(2.5rem,8vw,6rem)]" style={{ color: 'oklch(0.68 0.19 42)' }}>UN CAMINO.</span>
              <span className="block text-[clamp(2.5rem,8vw,6rem)]">SIN ATAJOS.</span>
            </h2>
            <p className="font-body text-lg text-white/65 max-w-xl mx-auto mb-10">
              Conoce cada temporada, cada club, cada gol y cada obstáculo superado en la trayectoria de Antonio.
            </p>
            <Link
              href="/historia"
              className="inline-flex items-center gap-3 font-display font-bold text-base tracking-wider uppercase px-8 py-4 transition-all duration-200 active:scale-[0.97]"
              style={{
                background: 'oklch(0.68 0.19 42)',
                color: 'oklch(0.08 0.01 260)',
                clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)',
                boxShadow: '0 0 40px oklch(0.68 0.19 42 / 0.35)',
              }}
            >
              Conoce la historia completa
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
