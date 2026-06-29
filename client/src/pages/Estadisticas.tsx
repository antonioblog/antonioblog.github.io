// Estadísticas — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — data dashboard, charts, career table
import { useEffect } from 'react';
import { seasons, careerStats } from '@/lib/seasonData';
import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from 'recharts';

const FIELD_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/antonio-field-texture-gFfCTZ25nvsTJcok7PyKFB.webp';

// Exigencia competitiva estimada por etapa (1-10)
const evolucionData = [
  { temporada: '16/17', exigencia: 1, goles: 0, label: 'Alevín 1º' },
  { temporada: '17/18', exigencia: 2, goles: 0, label: 'Alevín 2º' },
  { temporada: '18/19', exigencia: 3, goles: 0, label: 'Infantil 1º' },
  { temporada: '19/20', exigencia: 4, goles: 0, label: 'Infantil 2º' },
  { temporada: '20/21', exigencia: 6, goles: 5, label: 'Cadete 1º' },
  { temporada: '21/22', exigencia: 6, goles: 3, label: 'Cadete 2º' },
  { temporada: '22/23', exigencia: 8, goles: 0, label: 'Juvenil 1º' },
  { temporada: '23/24', exigencia: 7, goles: 3, label: 'Juvenil 2º' },
  { temporada: '24/25', exigencia: 8, goles: 0, label: 'Juvenil 3º' },
  { temporada: '25/26', exigencia: 9, goles: 0, label: 'Senior' },
];

const golesData = evolucionData.filter(d => d.goles > 0);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[oklch(0.15_0.015_260)] border border-white/20 px-4 py-3">
        <p className="font-display font-bold text-sm text-white tracking-wide">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} className="font-body text-sm" style={{ color: p.color }}>
            {p.name}: <strong>{p.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function BigStat({ value, label, color = 'orange', delay = 0 }: {
  value: number; label: string; color?: 'orange' | 'green'; delay?: number;
}) {
  const ref = useCountUp(value);
  return (
    <div className="reveal text-center p-8 bg-[oklch(0.13_0.015_260)] border border-white/10" style={{ transitionDelay: `${delay}ms` }}>
      <div
        className="font-display font-bold text-5xl md:text-6xl leading-none mb-2"
        style={{ color: color === 'green' ? 'oklch(0.72 0.18 145)' : 'oklch(0.68 0.19 42)' }}
      >
        <span ref={ref}>0</span>
      </div>
      <div className="font-body text-sm text-white/50 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function Estadisticas() {
  useScrollReveal();

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
              Datos de carrera
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight">
            TRAYECTORIA<br />
            <span className="text-[oklch(0.68_0.19_42)]">Y EVOLUCIÓN</span>
          </h1>
          <p className="font-body text-lg text-white/60 max-w-xl mt-4">
            Resumen por temporadas, clubes, categorías y estadísticas de carrera.
          </p>
        </div>
      </section>

      {/* ── BIG STATS ── */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <BigStat value={careerStats.temporadas} label="Temporadas" delay={0} />
            <BigStat value={careerStats.clubes} label="Clubes" delay={100} />
            <BigStat value={careerStats.golesDocumentados} label="Goles" color="green" delay={200} />
            <BigStat value={careerStats.dorsalIconico} label="Dorsal icónico" delay={300} />
          </div>
        </div>
      </section>

      {/* ── EVOLUTION CHART ── */}
      <section className="py-16">
        <div className="container">
          <div className="reveal mb-8">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
              EVOLUCIÓN COMPETITIVA
            </h2>
            <p className="font-body text-sm text-white/50">
              Nivel de exigencia estimado por temporada (escala 1-10)
            </p>
          </div>
          <div className="reveal bg-[oklch(0.13_0.015_260)] border border-white/10 p-6">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={evolucionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradOrange" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="oklch(0.68 0.19 42)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="oklch(0.68 0.19 42)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis
                  dataKey="temporada"
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'Oswald' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 10]}
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'Oswald' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="exigencia"
                  name="Exigencia"
                  stroke="oklch(0.68 0.19 42)"
                  strokeWidth={2.5}
                  fill="url(#gradOrange)"
                  dot={{ fill: 'oklch(0.68 0.19 42)', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: 'oklch(0.68 0.19 42)' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* ── GOALS CHART ── */}
      <section className="py-16">
        <div className="container">
          <div className="reveal mb-8">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
              GOLES POR TEMPORADA
            </h2>
            <p className="font-body text-sm text-white/50">
              Temporadas con goles documentados
            </p>
          </div>
          <div className="reveal bg-[oklch(0.13_0.015_260)] border border-white/10 p-6">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={golesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  dataKey="temporada"
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: 'Oswald' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: 'Oswald' }}
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="goles" name="Goles" radius={[2, 2, 0, 0]}>
                  {golesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? 'oklch(0.68 0.19 42)' : 'oklch(0.72 0.18 145)'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* ── CAREER TABLE ── */}
      <section className="py-16">
        <div className="container">
          <div className="reveal mb-8">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
              RESUMEN DE CARRERA
            </h2>
            <p className="font-body text-sm text-white/50">
              Todas las temporadas documentadas
            </p>
          </div>
          <div className="reveal overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="font-display text-xs tracking-[0.15em] uppercase text-white/50 text-left py-3 pr-4">Temporada</th>
                  <th className="font-display text-xs tracking-[0.15em] uppercase text-white/50 text-left py-3 pr-4">Club</th>
                  <th className="font-display text-xs tracking-[0.15em] uppercase text-white/50 text-left py-3 pr-4">Categoría</th>
                  <th className="font-display text-xs tracking-[0.15em] uppercase text-white/50 text-left py-3 pr-4">División</th>
                  <th className="font-display text-xs tracking-[0.15em] uppercase text-white/50 text-center py-3 pr-4">Dorsal</th>
                  <th className="font-display text-xs tracking-[0.15em] uppercase text-white/50 text-center py-3">Goles</th>
                </tr>
              </thead>
              <tbody>
                {seasons.map((season, i) => (
                  <tr
                    key={season.id}
                    className={`border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.03] ${
                      season.hito ? 'bg-[oklch(0.68_0.19_42/0.04)]' : ''
                    }`}
                  >
                    <td className="py-4 pr-4">
                      <span
                        className="season-badge text-xs"
                        style={{
                          backgroundColor: season.color === 'green' ? 'oklch(0.72 0.18 145)' : 'oklch(0.68 0.19 42)',
                          color: 'oklch(0.08 0.01 260)',
                        }}
                      >
                        {season.temporada}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-display font-bold text-sm text-white tracking-wide">
                        {season.club}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-body text-sm text-white/70">{season.categoria}</span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-body text-sm text-white/40">{season.division || '—'}</span>
                    </td>
                    <td className="py-4 pr-4 text-center">
                      {season.dorsal ? (
                        <span className="font-display font-bold text-lg text-[oklch(0.68_0.19_42)]">
                          {season.dorsal}
                        </span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {season.goles !== undefined ? (
                        <span className="font-display font-bold text-lg text-[oklch(0.72_0.18_145)]">
                          {season.goles}
                        </span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-white/20">
                  <td colSpan={5} className="py-4 font-display font-bold text-sm text-white/50 uppercase tracking-wider">
                    Total goles documentados
                  </td>
                  <td className="py-4 text-center font-display font-bold text-2xl text-[oklch(0.72_0.18_145)]">
                    {careerStats.golesDocumentados}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
