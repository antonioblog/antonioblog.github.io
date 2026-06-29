// Sobre — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — personal profile, character, values
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Flame, Target, Users, Shield, Calendar, MapPin, Hash } from 'lucide-react';

const ACTION_IMG = '/images/antonio-ball-action.webp';
const SIERRA_IMG = '/images/retrato.webp';

const perfil = [
  { icono: Calendar, label: 'Inicio', valor: 'Temporada 2016/17' },
  { icono: MapPin, label: 'Primer club', valor: 'Ogíjares 89' },
  { icono: Hash, label: 'Dorsal icónico', valor: '21' },
  { icono: MapPin, label: 'Club actual', valor: 'C.F. Sierra Nevada-Cenes' },
];

const cualidades = [
  {
    icono: Flame,
    titulo: 'Constancia',
    descripcion: 'Nunca ha faltado a un entrenamiento sin motivo. Cinco días a la semana, temporada tras temporada. La constancia es su arma más poderosa.',
  },
  {
    icono: Target,
    titulo: 'Disciplina',
    descripcion: 'Cada sesión de entrenamiento es una oportunidad de mejorar. Antonio no deja nada al azar: trabaja con intención y foco en cada repetición.',
  },
  {
    icono: Users,
    titulo: 'Buen compañero',
    descripcion: 'Dentro y fuera del campo, Antonio suma al grupo. Su actitud positiva y su disposición a ayudar lo hacen valioso más allá de sus actuaciones individuales.',
  },
  {
    icono: Shield,
    titulo: 'Resiliencia',
    descripcion: 'Ha vivido temporadas difíciles: entrenadores que no confiaron en él, situaciones de doble equipo sin pertenencia clara. Siempre encontró la manera de seguir adelante.',
  },
];

const clubes = [
  { nombre: 'Ogíjares 89', temporadas: '16/17 — 22/23', descripcion: 'El club donde todo empezó. Siete temporadas formando la base de su carácter futbolístico.' },
  { nombre: 'Alhendín', temporadas: '23/24', descripcion: 'Un paso importante en su desarrollo juvenil, hasta que las circunstancias lo llevaron a buscar un nuevo reto.' },
  { nombre: 'C.F. Sierra Nevada-Cenes', temporadas: '23/24 — 25/26', descripcion: 'El club donde da el salto al senior y alcanza la Primera Andaluza. Un vínculo que se ha renovado en dos ocasiones.' },
  { nombre: 'C.D. Numancia', temporadas: '25/26', descripcion: 'Primera mitad de la temporada senior en Tercera Andaluza, antes de ser reclamado por el Sierra Nevada-Cenes.' },
];

export default function Sobre() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_260)]">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{ backgroundImage: `url(${ACTION_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.01_260/0.3)] to-[oklch(0.08_0.01_260)]" />
        <div className="container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[oklch(0.68_0.19_42)]" />
            <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
              Perfil personal
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-tight">
            SOBRE<br />
            <span className="text-[oklch(0.68_0.19_42)]">ANTONIO</span>
          </h1>
          <p className="font-body text-lg text-white/60 max-w-xl mt-4">
            Un jugador que define el talento como el resultado de años de trabajo invisible.
          </p>
        </div>
      </section>

      {/* ── PERFIL + IMAGEN ── */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Texto */}
            <div>
              <div className="reveal mb-8">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  EL JUGADOR QUE<br />
                  <span className="text-[oklch(0.68_0.19_42)]">EL FÚTBOL NECESITA</span>
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-white/70 leading-relaxed">
                    Antonio Encinas Camacho es un futbolista que ha construido su carrera ladrillo a ladrillo,
                    temporada a temporada, sin saltarse ningún paso. Desde su primer partido de alevín en el
                    Ogíjares 89 hasta la Primera Andaluza Senior con el C.F. Sierra Nevada-Cenes, cada etapa
                    ha sido un escalón más en su ascenso constante.
                  </p>
                  <p className="font-body text-white/70 leading-relaxed">
                    Lo que distingue a Antonio no es solo su calidad técnica, sino su <strong className="text-white">mentalidad</strong>.
                    Es el tipo de jugador que llega antes al entrenamiento, que no se rinde cuando las cosas se
                    complican, que busca soluciones cuando los demás ven problemas.
                  </p>
                  <p className="font-body text-white/70 leading-relaxed">
                    En la temporada 22/23 vivió una de las situaciones más difíciles: jugando en tres competiciones
                    distintas simultáneamente, sin sentirse parte de ningún equipo del todo. Lejos de hundirse,
                    usó esa experiencia como combustible para las temporadas siguientes.
                  </p>
                  <p className="font-body text-white/70 leading-relaxed">
                    Hoy, en la Primera Andaluza Senior, Antonio demuestra que la constancia y la disciplina
                    son el camino más seguro hacia arriba.
                  </p>
                </div>
              </div>

              {/* Perfil data */}
              <div className="reveal grid grid-cols-2 gap-4">
                {perfil.map((item) => {
                  const Icon = item.icono;
                  return (
                    <div
                      key={item.label}
                      className="bg-[oklch(0.13_0.015_260)] border border-white/10 p-4 flex items-center gap-3"
                    >
                      <Icon size={18} className="text-[oklch(0.68_0.19_42)] shrink-0" />
                      <div>
                        <div className="font-body text-xs text-white/40 uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="font-display font-bold text-sm text-white tracking-wide">
                          {item.valor}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Imagen */}
            <div className="reveal-right">
              <div className="relative">
                <img
                  src={SIERRA_IMG}
                  alt="Antonio Encinas Camacho"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_260/0.5)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <blockquote className="font-display font-bold text-xl text-white leading-tight">
                    "La constancia es el talento más difícil de tener."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUALIDADES ── */}
      <section className="py-24 bg-[oklch(0.11_0.012_260)]">
        <div className="container">
          <div className="reveal text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[oklch(0.68_0.19_42)]" />
              <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
                Lo que lo define
              </span>
              <div className="h-px w-8 bg-[oklch(0.68_0.19_42)]" />
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              SUS CUALIDADES
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cualidades.map((cual, i) => {
              const Icon = cual.icono;
              return (
                <div
                  key={cual.titulo}
                  className="reveal flex gap-5 bg-[oklch(0.15_0.015_260)] border border-white/10 p-6 hover:border-[oklch(0.68_0.19_42)/0.4] transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 bg-[oklch(0.68_0.19_42)/0.15] flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-[oklch(0.68_0.19_42)]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-2 tracking-wide">
                      {cual.titulo.toUpperCase()}
                    </h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">
                      {cual.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CLUBES ── */}
      <section className="py-24">
        <div className="container">
          <div className="reveal mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[oklch(0.68_0.19_42)]" />
              <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">
                Clubes
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              SUS EQUIPOS
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {clubes.map((club, i) => (
              <div
                key={club.nombre}
                className="reveal bg-[oklch(0.13_0.015_260)] border border-white/10 p-6 hover:border-[oklch(0.68_0.19_42)/0.4] transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-bold text-xl text-white tracking-wide">
                    {club.nombre.toUpperCase()}
                  </h3>
                  <span className="season-badge shrink-0 text-xs">
                    {club.temporadas}
                  </span>
                </div>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {club.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
