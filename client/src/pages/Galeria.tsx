// Galería de Fotos — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — editorial sports photo gallery with lightbox
import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Photo {
  id: number;
  src: string;
  thumb: string;
  alt: string;
  temporada: string;
  etapa: 'base' | 'cadete' | 'juvenil' | 'senior' | 'entrenamiento' | 'equipo';
  etapaLabel: string;
  caption: string;
}

const ETAPA_COLORS: Record<string, string> = {
  base:          'oklch(0.68 0.19 42)',
  cadete:        'oklch(0.68 0.19 42)',
  juvenil:       'oklch(0.72 0.18 145)',
  senior:        'oklch(0.72 0.18 145)',
  entrenamiento: 'oklch(0.68 0.19 42)',
  equipo:        'oklch(0.72 0.18 145)',
};

const photos: Photo[] = [
  {
    id: 1,
    src:   '/images/base-alevin-infantil/alevin2-1.webp',
    thumb: '/images/base-alevin-infantil/alevin2-1.webp',
    alt: 'Antonio en categoría alevín',
    temporada: '16/17 – 17/18',
    etapa: 'base',
    etapaLabel: 'Alevín',
    caption: 'Los primeros pasos en el Ogíjares 89. Aquí empezó todo.',
  },
  
    {
    id: 1,
    src:   '/images/base-alevin-infantil/infantil2-5.webp',
    thumb: '/images/base-alevin-infantil/infantil2-5.webp',
    alt: 'Antonio en categoría alevín',
    temporada: '16/17 – 17/18',
    etapa: 'base',
    etapaLabel: 'Alevín',
    caption: 'Los primeros pasos en el Ogíjares 89. Aquí empezó todo.',
  },
  
    {
    id: 1,
    src:   '/images/base-alevin-infantil/infantil1-2.webp',
    thumb: '/images/base-alevin-infantil/infantil1-2.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 1,
    src:   '/images/base-alevin-infantil/infantil1-3.webp',
    thumb: '/images/base-alevin-infantil/infantil1-3.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 1,
    src:   '/images/base-alevin-infantil/infantil1-4.webp',
    thumb: '/images/base-alevin-infantil/infantil1-4.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 1,
    src:   '/images/base-alevin-infantil/infantil1-5.webp',
    thumb: '/images/base-alevin-infantil/infantil1-5.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 1,
    src:   '/images/base-alevin-infantil/infantil2-1.webp',
    thumb: '/images/base-alevin-infantil/infantil2-1.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },





  {
    id: 2,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-infantil-ijBzpXRuEVpCbrQpPcFzb4.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-infantil-FpBN9BLBs94DCCiSpuyDcv.webp',
    alt: 'Celebración de gol en categoría infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La alegría de marcar en categoría infantil. El gol siempre fue su objetivo.',
  },
  {
    id: 3,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-team-DmjwoUHZXZ6RAc86dmRNXy.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-team-dW6vrur4gYQcbbqiYiQioy.webp',
    alt: 'Foto de equipo',
    temporada: '20/21',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo cadete del Ogíjares 89. Temporada de debut en Tercera Andaluza.',
  },
  {
    id: 4,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-cadete-oWcVM6rGfgFUn2PvaMShrq.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-cadete-LyYMRihg3gniRmNcCUNEeC.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
  {
    id: 5,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-training-HvCtKqb377CXxVUCSS9GJB.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-training-DaZxaCU5tdHAyDUCyzfnSn.webp',
    alt: 'Entrenamiento al atardecer',
    temporada: 'Todos los años',
    etapa: 'entrenamiento',
    etapaLabel: 'Entrenamiento',
    caption: '5 días de entrenamiento a la semana, temporada tras temporada. Sin excusas.',
  },
  {
    id: 6,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-juvenil-Zq8Wi2UfJyzYzKek3Rw9Wf.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-juvenil-AL3zuBhkBkC8uQvV2aui6W.webp',
    alt: 'Antonio en categoría juvenil con Sierra Nevada al fondo',
    temporada: '22/23 – 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil con el C.F. Sierra Nevada-Cenes. Las montañas como testigo.',
  },
  {
    id: 7,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-goal-Gza97bEP46FmE735SXadKE.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-goal-6ZRs7PHg6CNCkKHdq7giLY.webp',
    alt: 'Celebración de gol con el dorsal 21',
    temporada: '23/24',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Uno de los 3 goles de la temporada 23/24. La perseverancia tiene recompensa.',
  },
  {
    id: 8,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-portrait-eymvvB8P5kTRdpM7fkTL4F.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-portrait-EB2r7sWU6PqRtVPthkvMGL.webp',
    alt: 'Retrato de Antonio con el dorsal 21',
    temporada: '25/26',
    etapa: 'senior',
    etapaLabel: 'Senior',
    caption: 'Primera Andaluza Senior. El destino al que siempre apuntó.',
  },
  {
    id: 9,
    src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-senior-5Np5WKVpcfxRkrDkfsnKXY.png',
    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-senior-HzK72Xm4rLHugn2AmixfN2.webp',
    alt: 'Antonio en partido senior',
    temporada: '25/26',
    etapa: 'senior',
    etapaLabel: 'Senior',
    caption: 'Fútbol senior. El C.F. Sierra Nevada-Cenes volvió a contar con él. Merecido.',
  },
];

const FILTERS = [
  { key: 'all',          label: 'Todas' },
  { key: 'base',         label: 'Base (Alevín/Infantil)' },
  { key: 'cadete',       label: 'Cadete' },
  { key: 'juvenil',      label: 'Juvenil' },
  { key: 'senior',       label: 'Senior' },
  { key: 'entrenamiento',label: 'Entrenamiento' },
  { key: 'equipo',       label: 'Equipo' },
];

export default function Galeria() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === 'all'
    ? photos
    : photos.filter(p => p.etapa === activeFilter);

  const openLightbox = useCallback((id: number) => {
    setLightbox(id);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const navigate = useCallback((dir: 1 | -1) => {
    if (lightbox === null) return;
    const idx = filtered.findIndex(p => p.id === lightbox);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next].id);
  }, [lightbox, filtered]);

  const currentPhoto = lightbox !== null ? photos.find(p => p.id === lightbox) : null;

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
                <span style={{ color: 'oklch(0.68 0.19 42)' }}>DE FOTOS</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2 mb-3 pb-1 border-b border-white/15">
              <Camera size={16} className="text-white/40" />
              <span className="font-body text-sm text-white/40">{photos.length} fotografías</span>
            </div>
          </div>
          <p className="font-body text-white/55 max-w-xl mt-4 reveal">
            Del primer balón en el Ogíjares 89 a la Primera Andaluza Senior. Diez temporadas capturadas en imágenes.
            Cuando tengas las fotos reales de Antonio, sustitúyelas aquí.
          </p>
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

      {/* ── PHOTO GRID ── */}
      <section className="py-12">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Camera size={48} className="mx-auto mb-4 text-white/20" />
              <p className="font-display text-xl text-white/40">No hay fotos en esta categoría aún.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((photo, i) => (
                <div
                  key={photo.id}
                  className="reveal break-inside-avoid group relative overflow-hidden cursor-pointer"
                  style={{
                    transitionDelay: `${(i % 6) * 60}ms`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 96%, 98% 100%, 0 100%)',
                  }}
                  onClick={() => openLightbox(photo.id)}
                >
                  <img
                    src={photo.thumb}
                    alt={photo.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[oklch(0.08_0.01_260/0)] group-hover:bg-[oklch(0.08_0.01_260/0.7)] transition-all duration-300 flex flex-col justify-end p-4">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="font-display text-xs tracking-wider uppercase px-2 py-0.5"
                          style={{
                            background: ETAPA_COLORS[photo.etapa],
                            color: 'oklch(0.08 0.01 260)',
                            clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
                          }}
                        >
                          {photo.etapaLabel}
                        </span>
                        <ZoomIn size={18} className="text-white/70" />
                      </div>
                      <p className="font-body text-sm text-white/85 leading-snug line-clamp-2">
                        {photo.caption}
                      </p>
                      <p className="font-display text-xs text-white/40 mt-1 tracking-wider">
                        {photo.temporada}
                      </p>
                    </div>
                  </div>
                  {/* Season badge — always visible */}
                  <div
                    className="absolute top-3 left-3 font-display text-xs font-bold tracking-wider px-2 py-0.5"
                    style={{
                      background: 'oklch(0.08 0.01 260/0.85)',
                      color: ETAPA_COLORS[photo.etapa],
                      border: `1px solid ${ETAPA_COLORS[photo.etapa]}40`,
                    }}
                  >
                    {photo.etapaLabel}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── UPLOAD CTA ── */}
      <section
        className="py-16 mx-4 mb-12 reveal"
        style={{
          background: 'oklch(0.12 0.015 260)',
          border: '1px dashed oklch(0.68 0.19 42 / 0.3)',
          clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)',
        }}
      >
        <div className="container text-center">
          <Camera size={36} className="mx-auto mb-4" style={{ color: 'oklch(0.68 0.19 42)' }} />
          <h3 className="font-display font-bold text-white text-2xl mb-2">
            ¿TIENES FOTOS DE ANTONIO?
          </h3>
          <p className="font-body text-white/55 max-w-md mx-auto text-sm">
            Para añadir fotos reales, edita el archivo <code className="text-[oklch(0.68_0.19_42)] bg-white/5 px-1 py-0.5 rounded">client/src/pages/Galeria.tsx</code> y
            sustituye las URLs de las imágenes por las tuyas propias.
          </p>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && currentPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'oklch(0.05 0.01 260/0.97)', backdropFilter: 'blur(12px)' }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-16 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="w-full max-h-[72vh] object-contain"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 97%, 98% 100%, 0 100%)' }}
            />
            {/* Caption bar */}
            <div
              className="mt-0 px-5 py-4 flex items-start justify-between gap-4"
              style={{ background: 'oklch(0.12 0.015 260)' }}
            >
              <div>
                <p className="font-body text-white/85 text-sm leading-relaxed">{currentPhoto.caption}</p>
                <p className="font-display text-xs tracking-wider mt-1" style={{ color: ETAPA_COLORS[currentPhoto.etapa] }}>
                  {currentPhoto.etapaLabel} · {currentPhoto.temporada}
                </p>
              </div>
              <span
                className="shrink-0 font-display text-xs font-bold tracking-wider px-3 py-1"
                style={{
                  background: ETAPA_COLORS[currentPhoto.etapa],
                  color: 'oklch(0.08 0.01 260)',
                  clipPath: 'polygon(0 0, 100% 0, 96% 100%, 0 100%)',
                }}
              >
                {currentPhoto.etapaLabel}
              </span>
            </div>
            {/* Counter */}
            <p className="text-center font-display text-xs text-white/30 tracking-widest mt-3">
              {filtered.findIndex(p => p.id === lightbox) + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
