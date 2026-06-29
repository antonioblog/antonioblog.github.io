// Historia — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — full timeline, alternating left/right cards
import { useEffect } from 'react';
import { seasons } from '@/lib/seasonData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FIELD_BG = '/images/antonio-field-texture.webp';

const tipoLabels: Record<string, string> = {
  base: 'Fútbol Base',
  cadete: 'Cadete',
  juvenil: 'Juvenil',
  senior: 'Senior',
};

const tipoColors: Record<string, string> = {
  base: 'oklch(0.55 0.01 260)',
  cadete: 'oklch(0.68 0.19 42)',
  juvenil: 'oklch(0.75 0.15 42)',
  senior: 'oklch(0.72 0.18 145)',
};

export default function Historia() {
  useScrollReveal();

  const etapas = [
    { tipo: 'base', label: 'Fútbol Base', seasons: seasons.filter(s => s.tipo === 'base') },
    { tipo: 'cadete', label: 'Cadete', seasons: seasons.filter(s => s.tipo === 'cadete') },
    { tipo: 'juvenil', label: 'Juvenil', seasons: seasons.filter(s => s.tipo === 'juvenil') },
    { tipo: 'senior', label: 'Senior', seasons: seasons.filter(s => s.tipo === 'senior') },
  ];

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_260)]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{ backgroundImage: `url(${FIELD_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.01_260/0.25)] to-[oklch(0.08_0.01_260)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[oklch(0.68_0.19_42)]" />
            <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
              Trayectoria completa
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight">
            EL CAMINO<br />
            <span className="text-[oklch(0.68_0.19_42)]">DE ANTONIO</span>
          </h1>
          <p className="font-body text-lg text-white/60 max-w-xl mt-4">
            Diez temporadas documentadas, desde el primer partido de alevín hasta la Primera Andaluza Senior.
          </p>
        </div>
      </section>

      {/* ── ETAPAS ── */}
      {etapas.map((etapa) => (
        <section key={etapa.tipo} className="py-16">
          <div className="container">
            {/* Etapa header */}
            <div className="flex items-center gap-4 mb-10 reveal">
              <div
                className="w-1 h-10 shrink-0"
                style={{ backgroundColor: tipoColors[etapa.tipo] }}
              />
              <div>
                <div className="font-display text-xs tracking-[0.2em] uppercase text-white/40">
                  Etapa
                </div>
                <h2
                  className="font-display font-bold text-3xl sm:text-4xl"
                  style={{ color: tipoColors[etapa.tipo] }}
                >
                  {etapa.label.toUpperCase()}
                </h2>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line (desktop) */}
              <div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{
                  background: `linear-gradient(to bottom, transparent, ${tipoColors[etapa.tipo]} 10%, ${tipoColors[etapa.tipo]} 90%, transparent)`,
                }}
              />

              <div className="space-y-8 md:space-y-0">
                {etapa.seasons.map((season, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={season.id}
                      className={`md:flex md:items-center md:gap-8 md:mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Card */}
                      <div className={`flex-1 ${isLeft ? 'reveal-left' : 'reveal-right'}`}>
                        <div
                          className="bg-[oklch(0.13_0.015_260)] border border-white/10 p-6 hover:border-opacity-50 transition-all duration-300 group"
                          style={{
                            '--hover-color': tipoColors[etapa.tipo],
                          } as React.CSSProperties}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = tipoColors[etapa.tipo] + '80';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = '';
                          }}
                        >
                          {/* Header */}
                          <div className="flex flex-wrap items-start gap-3 mb-4">
                            <span
                              className="season-badge"
                              style={{ backgroundColor: tipoColors[etapa.tipo], color: 'oklch(0.08 0.01 260)' }}
                            >
                              {season.temporada}
                            </span>
                            {season.hito && (
                              <span
                                className="font-display text-xs tracking-wider uppercase border px-2 py-1"
                                style={{ color: tipoColors[etapa.tipo], borderColor: tipoColors[etapa.tipo] + '60' }}
                              >
                                Hito
                              </span>
                            )}
                          </div>

                          <h3 className="font-display font-bold text-xl text-white mb-1 tracking-wide">
                            {season.club.toUpperCase()}
                          </h3>
                          <div className="font-body text-sm text-white/50 mb-4">
                            {season.categoria}
                            {season.division && (
                              <span className="text-white/30"> · {season.division}</span>
                            )}
                          </div>

                          <p className="font-body text-sm text-white/65 leading-relaxed mb-4">
                            {season.descripcion}
                          </p>

                          {/* Stats row */}
                          {(season.dorsal || season.goles !== undefined) && (
                            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                              {season.dorsal && (
                                <div className="flex items-center gap-2">
                                  <span className="font-body text-xs text-white/40 uppercase tracking-wider">Dorsal</span>
                                  <span
                                    className="font-display font-bold text-2xl"
                                    style={{ color: tipoColors[etapa.tipo] }}
                                  >
                                    {season.dorsal}
                                  </span>
                                </div>
                              )}
                              {season.goles !== undefined && (
                                <div className="flex items-center gap-2">
                                  <span className="font-body text-xs text-white/40 uppercase tracking-wider">Goles</span>
                                  <span className="font-display font-bold text-2xl text-[oklch(0.72_0.18_145)]">
                                    {season.goles}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Destacado */}
                          {season.destacado && (
                            <div
                              className="mt-4 pt-4 border-t border-white/10 font-body text-xs tracking-wide"
                              style={{ color: tipoColors[etapa.tipo] }}
                            >
                              {season.destacado}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Center dot (desktop) */}
                      <div className="hidden md:flex items-center justify-center w-4 shrink-0 relative z-10">
                        <div
                          className="w-4 h-4 rounded-full border-2"
                          style={{
                            backgroundColor: 'oklch(0.08 0.01 260)',
                            borderColor: tipoColors[etapa.tipo],
                          }}
                        />
                      </div>

                      {/* Spacer */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
