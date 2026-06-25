// Galería de Vídeos — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — editorial sports video gallery
import { useState, useRef, useCallback } from 'react';
import { Play, X, Video, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  temporada: string;
  categoria: 'gol' | 'jugada' | 'partido' | 'entrenamiento' | 'resumen';
  categoriaLabel: string;
  duracion?: string;
  // Para vídeos de YouTube usa youtubeId; para vídeos propios usa videoUrl
  youtubeId?: string;
  videoUrl?: string;
  thumbnail: string;
  destacado?: boolean;
}

const CAT_COLORS: Record<string, string> = {
  gol:           'oklch(0.72 0.18 145)',
  jugada:        'oklch(0.68 0.19 42)',
  partido:       'oklch(0.68 0.19 42)',
  entrenamiento: 'oklch(0.58 0.15 42)',
  resumen:       'oklch(0.72 0.18 145)',
};

// ── Datos de vídeos ──────────────────────────────────────────────────────────
// Para añadir un vídeo de YouTube: pon el ID del vídeo en "youtubeId"
//   Ejemplo: para https://www.youtube.com/watch?v=dQw4w9WgXcQ → youtubeId: "dQw4w9WgXcQ"
// Para añadir un vídeo propio: pon la URL directa en "videoUrl"
// Para el thumbnail: usa la URL de una imagen propia o déjala como está (placeholder)
// ────────────────────────────────────────────────────────────────────────────
const videos: VideoItem[] = [
  {
    id: 1,
    title: 'Gol en Tercera Andaluza — Temporada 20/21',
    description: 'Primer gol documentado en Tercera Andaluza. Cadete de primer año con el dorsal 27. El inicio de una racha goleadora.',
    temporada: '20/21',
    categoria: 'gol',
    categoriaLabel: 'Gol',
    duracion: '0:45',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-cadete-LyYMRihg3gniRmNcCUNEeC.webp',
    destacado: true,
  },
  {
    id: 2,
    title: 'Jugada destacada — Cadete 2.º año',
    description: 'Regates y conducción en la temporada cadete con el dorsal 21. La técnica que se fue puliendo partido a partido.',
    temporada: '21/22',
    categoria: 'jugada',
    categoriaLabel: 'Jugada',
    duracion: '1:12',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-cadete-oWcVM6rGfgFUn2PvaMShrq.png',
  },
  {
    id: 3,
    title: 'Resumen temporada Juvenil 1.º año',
    description: 'Una temporada exigente jugando en tres competiciones: Tercera, Cuarta y Segunda Andaluza. 5 entrenamientos semanales, 2-3 partidos por fin de semana.',
    temporada: '22/23',
    categoria: 'resumen',
    categoriaLabel: 'Resumen',
    duracion: '3:20',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-juvenil-Zq8Wi2UfJyzYzKek3Rw9Wf.png',
    destacado: true,
  },
  {
    id: 4,
    title: 'Gol con el C.F. Sierra Nevada-Cenes',
    description: 'Uno de los 3 goles marcados en la temporada 23/24. Después de cambiar de club dos veces, Antonio respondió dentro del campo.',
    temporada: '23/24',
    categoria: 'gol',
    categoriaLabel: 'Gol',
    duracion: '0:38',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-goal-6ZRs7PHg6CNCkKHdq7giLY.webp',
  },
  {
    id: 5,
    title: 'Entrenamiento individual — Preparación física',
    description: 'La disciplina que nadie ve. Trabajo individual fuera de los entrenamientos colectivos. La base de todo lo que consigue en los partidos.',
    temporada: 'Todos los años',
    categoria: 'entrenamiento',
    categoriaLabel: 'Entrenamiento',
    duracion: '2:05',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-training-DaZxaCU5tdHAyDUCyzfnSn.webp',
  },
  {
    id: 6,
    title: 'Partido de Segunda Andaluza — Juvenil 3.º año',
    description: 'Temporada 24/25 tras el ascenso. Antonio compagina el equipo juvenil con el senior en Segunda Andaluza, demostrando que ya tiene nivel para competir entre adultos.',
    temporada: '24/25',
    categoria: 'partido',
    categoriaLabel: 'Partido',
    duracion: '4:15',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-senior-HzK72Xm4rLHugn2AmixfN2.webp',
    destacado: true,
  },
  {
    id: 7,
    title: 'Debut en Primera Andaluza Senior',
    description: 'El C.F. Sierra Nevada-Cenes vuelve a ficharle a mitad de temporada para disputar la Primera Andaluza Senior. El reconocimiento que llegó.',
    temporada: '25/26',
    categoria: 'partido',
    categoriaLabel: 'Partido',
    duracion: '5:30',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-portrait-EB2r7sWU6PqRtVPthkvMGL.webp',
    destacado: true,
  },
  {
    id: 8,
    title: 'Foto de equipo — Ogíjares 89',
    description: 'El equipo que lo vio crecer. El Ogíjares 89 fue el hogar de Antonio durante sus primeras seis temporadas.',
    temporada: '16/17 – 21/22',
    categoria: 'resumen',
    categoriaLabel: 'Resumen',
    duracion: '1:45',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-team-dW6vrur4gYQcbbqiYiQioy.webp',
  },
];

const FILTERS = [
  { key: 'all',           label: 'Todos' },
  { key: 'gol',           label: 'Goles' },
  { key: 'jugada',        label: 'Jugadas' },
  { key: 'partido',       label: 'Partidos' },
  { key: 'entrenamiento', label: 'Entrenamientos' },
  { key: 'resumen',       label: 'Resúmenes' },
];

function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'oklch(0.05 0.01 260/0.97)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        {/* Video player */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: '16/9',
            background: 'oklch(0.05 0.01 260)',
            clipPath: 'polygon(0 0, 100% 0, 100% 97%, 98% 100%, 0 100%)',
          }}
        >
          {video.youtubeId ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : video.videoUrl ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={video.videoUrl}
              controls
              autoPlay
            />
          ) : (
            /* Placeholder cuando no hay vídeo real */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center px-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'oklch(0.68 0.19 42 / 0.15)', border: '2px solid oklch(0.68 0.19 42 / 0.4)' }}
                >
                  <Video size={32} style={{ color: 'oklch(0.68 0.19 42)' }} />
                </div>
                <p className="font-display font-bold text-white text-xl mb-2">VÍDEO PENDIENTE</p>
                <p className="font-body text-white/55 text-sm max-w-sm">
                  Para añadir este vídeo, edita <code className="text-[oklch(0.68_0.19_42)]">Videos.tsx</code> y
                  añade el <code className="text-[oklch(0.68_0.19_42)]">youtubeId</code> o la <code className="text-[oklch(0.68_0.19_42)]">videoUrl</code> correspondiente.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Info bar */}
        <div className="px-5 py-4" style={{ background: 'oklch(0.12 0.015 260)' }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="font-display text-xs font-bold tracking-wider uppercase px-2 py-0.5"
                  style={{
                    background: CAT_COLORS[video.categoria],
                    color: 'oklch(0.08 0.01 260)',
                    clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
                  }}
                >
                  {video.categoriaLabel}
                </span>
                <span className="font-display text-xs text-white/35 tracking-wider">{video.temporada}</span>
              </div>
              <h3 className="font-display font-bold text-white text-lg leading-tight">{video.title}</h3>
              <p className="font-body text-sm text-white/55 mt-1">{video.description}</p>
            </div>
            {video.duracion && (
              <div className="shrink-0 flex items-center gap-1 text-white/35">
                <Clock size={13} />
                <span className="font-body text-xs">{video.duracion}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filtered = activeFilter === 'all'
    ? videos
    : videos.filter(v => v.categoria === activeFilter);

  const featured = videos.filter(v => v.destacado).slice(0, 3);

  const openVideo = useCallback((v: VideoItem) => {
    setActiveVideo(v);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_260)]">

      {/* ── HERO HEADER ── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-display font-bold leading-none text-white/[0.04] select-none pointer-events-none"
          style={{ fontSize: 'clamp(8rem, 28vw, 28rem)', letterSpacing: '-0.05em' }}
          aria-hidden="true"
        >
          21
        </div>
        <div className="container relative">
          <div className="flex items-center gap-3 mb-5 reveal">
            <div className="h-0.5 w-10" style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }} />
            <span className="font-display text-xs tracking-[0.25em] uppercase text-[oklch(0.68_0.19_42)]">
              Multimedia
            </span>
          </div>
          <div className="flex items-end gap-5 reveal">
            <div>
              <h1 className="font-display font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2.5rem,8vw,6rem)' }}>
                GALERÍA<br />
                <span style={{ color: 'oklch(0.68 0.19 42)' }}>DE VÍDEOS</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2 mb-3 pb-1 border-b border-white/15">
              <Video size={16} className="text-white/40" />
              <span className="font-body text-sm text-white/40">{videos.length} vídeos</span>
            </div>
          </div>
          <p className="font-body text-white/55 max-w-xl mt-4 reveal">
            Goles, jugadas y momentos clave de la trayectoria de Antonio. Añade los vídeos reales cuando los tengas disponibles.
          </p>
        </div>
      </section>

      {/* ── FEATURED VIDEOS ── */}
      <section className="pb-12">
        <div className="container">
          <div className="flex items-center gap-3 mb-6 reveal">
            <div className="h-0.5 w-8" style={{ background: 'oklch(0.68 0.19 42)', transform: 'skewX(-15deg)' }} />
            <span className="font-display text-xs tracking-[0.2em] uppercase text-[oklch(0.68_0.19_42)]">Destacados</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {featured.map((video, i) => (
              <div
                key={video.id}
                className="reveal group relative overflow-hidden cursor-pointer"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  clipPath: 'polygon(0 0, 100% 0, 100% 95%, 97% 100%, 0 100%)',
                  aspectRatio: '16/9',
                }}
                onClick={() => openVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.01_260/0.9)] via-[oklch(0.05_0.01_260/0.4)] to-transparent" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'oklch(0.68 0.19 42)',
                      boxShadow: '0 0 30px oklch(0.68 0.19 42 / 0.5)',
                    }}
                  >
                    <Play size={22} fill="oklch(0.08 0.01 260)" style={{ color: 'oklch(0.08 0.01 260)', marginLeft: '3px' }} />
                  </div>
                </div>
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className="font-display text-xs font-bold tracking-wider uppercase px-2 py-0.5 mb-2 inline-block"
                    style={{
                      background: CAT_COLORS[video.categoria],
                      color: 'oklch(0.08 0.01 260)',
                      clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
                    }}
                  >
                    {video.categoriaLabel}
                  </span>
                  <h3 className="font-display font-bold text-white text-sm leading-tight line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-body text-xs text-white/45">{video.temporada}</span>
                    {video.duracion && (
                      <span className="flex items-center gap-1 font-body text-xs text-white/35">
                        <Clock size={11} />{video.duracion}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="sticky top-16 md:top-20 z-30 bg-[oklch(0.08_0.01_260/0.95)] backdrop-blur-xl border-b border-white/10">
        <div className="container py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="shrink-0 font-display text-xs tracking-wider uppercase px-4 py-2 transition-all duration-200 active:scale-[0.97]"
                style={
                  activeFilter === f.key
                    ? {
                        background: 'oklch(0.68 0.19 42)',
                        color: 'oklch(0.08 0.01 260)',
                        clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)',
                      }
                    : {
                        background: 'oklch(0.15 0.015 260)',
                        color: 'oklch(0.7 0.01 80)',
                        border: '1px solid oklch(1 0 0 / 0.1)',
                      }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO LIST ── */}
      <section className="py-10">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Video size={48} className="mx-auto mb-4 text-white/20" />
              <p className="font-display text-xl text-white/40">No hay vídeos en esta categoría aún.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((video, i) => (
                <div
                  key={video.id}
                  className="reveal group flex gap-4 bg-[oklch(0.13_0.015_260)] border border-white/10 p-4 cursor-pointer transition-all duration-300 hover:border-[oklch(0.68_0.19_42/0.4)]"
                  style={{
                    transitionDelay: `${(i % 8) * 50}ms`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 94%, 99% 100%, 0 100%)',
                  }}
                  onClick={() => openVideo(video)}
                >
                  {/* Thumbnail */}
                  <div
                    className="relative shrink-0 overflow-hidden"
                    style={{ width: '160px', aspectRatio: '16/9', clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)' }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[oklch(0.05_0.01_260/0.4)] group-hover:bg-[oklch(0.05_0.01_260/0.2)] transition-colors">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: 'oklch(0.68 0.19 42 / 0.9)' }}
                      >
                        <Play size={14} fill="oklch(0.08 0.01 260)" style={{ color: 'oklch(0.08 0.01 260)', marginLeft: '2px' }} />
                      </div>
                    </div>
                    {video.duracion && (
                      <div
                        className="absolute bottom-1 right-1 font-body text-xs px-1.5 py-0.5"
                        style={{ background: 'oklch(0.05 0.01 260/0.9)', color: 'white' }}
                      >
                        {video.duracion}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span
                        className="font-display text-xs font-bold tracking-wider uppercase px-2 py-0.5"
                        style={{
                          background: CAT_COLORS[video.categoria],
                          color: 'oklch(0.08 0.01 260)',
                          clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
                        }}
                      >
                        {video.categoriaLabel}
                      </span>
                      <span className="font-display text-xs text-white/35 tracking-wider">{video.temporada}</span>
                      {video.destacado && (
                        <span
                          className="font-display text-xs tracking-wider uppercase border px-2 py-0.5"
                          style={{ color: 'oklch(0.68 0.19 42)', borderColor: 'oklch(0.68 0.19 42 / 0.4)' }}
                        >
                          Destacado
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-white text-base leading-tight line-clamp-1 group-hover:text-[oklch(0.68_0.19_42)] transition-colors">
                      {video.title}
                    </h3>
                    <p className="font-body text-sm text-white/45 mt-1 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 flex items-center self-center">
                    <ChevronRight size={20} className="text-white/20 group-hover:text-[oklch(0.68_0.19_42)] transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── HOW TO ADD VIDEOS CTA ── */}
      <section
        className="py-12 mx-4 mb-12 reveal"
        style={{
          background: 'oklch(0.12 0.015 260)',
          border: '1px dashed oklch(0.68 0.19 42 / 0.3)',
          clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)',
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Video size={20} style={{ color: 'oklch(0.68 0.19 42)' }} />
                <h3 className="font-display font-bold text-white text-xl">CÓMO AÑADIR TUS VÍDEOS</h3>
              </div>
              <p className="font-body text-white/55 text-sm leading-relaxed">
                Edita <code className="text-[oklch(0.68_0.19_42)] bg-white/5 px-1 rounded">client/src/pages/Videos.tsx</code> y
                para cada vídeo añade el <strong className="text-white">ID de YouTube</strong> en el campo <code className="text-[oklch(0.68_0.19_42)] bg-white/5 px-1 rounded">youtubeId</code>,
                o la URL directa del archivo en <code className="text-[oklch(0.68_0.19_42)] bg-white/5 px-1 rounded">videoUrl</code>.
              </p>
            </div>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 font-display font-bold text-sm tracking-wider uppercase px-5 py-3 transition-all duration-200 active:scale-[0.97]"
              style={{
                background: 'oklch(0.68 0.19 42)',
                color: 'oklch(0.08 0.01 260)',
                clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
              }}
            >
              Ir a YouTube
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={closeVideo} />
      )}
    </div>
  );
}
