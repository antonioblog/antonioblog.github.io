// Galería de Fotos — Antonio Encinas Camacho
// Design: "Ascenso Imparable" — editorial sports photo gallery with lightbox
import { useState, useCallback, useRef } from 'react';
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
    id: 2,
    src:   '/images/base-alevin-infantil/infantil2-5.webp',
    thumb: '/images/base-alevin-infantil/infantil2-5.webp',
    alt: 'Antonio en categoría alevín',
    temporada: '16/17 – 17/18',
    etapa: 'base',
    etapaLabel: 'Alevín',
    caption: 'Los primeros pasos en el Ogíjares 89. Aquí empezó todo.',
  },
  
    {
    id: 3,
    src:   '/images/base-alevin-infantil/infantil1-2.webp',
    thumb: '/images/base-alevin-infantil/infantil1-2.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 4,
    src:   '/images/base-alevin-infantil/infantil1-3.webp',
    thumb: '/images/base-alevin-infantil/infantil1-3.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 5,
    src:   '/images/base-alevin-infantil/infantil1-4.webp',
    thumb: '/images/base-alevin-infantil/infantil1-4.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 6,
    src:   '/images/base-alevin-infantil/infantil1-5.webp',
    thumb: '/images/base-alevin-infantil/infantil1-5.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 7,
    src:   '/images/base-alevin-infantil/infantil2-1.webp',
    thumb: '/images/base-alevin-infantil/infantil2-1.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 8,
    src:   '/images/base-alevin-infantil/infantil2-3.webp',
    thumb: '/images/base-alevin-infantil/infantil2-3.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 9,
    src:   '/images/base-alevin-infantil/infantil2-4.webp',
    thumb: '/images/base-alevin-infantil/infantil2-4.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 10,
    src:   '/images/base-alevin-infantil/infantil2-5.webp',
    thumb: '/images/base-alevin-infantil/infantil2-5.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 11,
    src:   '/images/base-alevin-infantil/infantil2-7.webp',
    thumb: '/images/base-alevin-infantil/infantil2-7.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 12,
    src:   '/images/base-alevin-infantil/infantil2-8a.webp',
    thumb: '/images/base-alevin-infantil/infantil2-8a.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 13,
    src:   '/images/base-alevin-infantil/infantil2-12.webp',
    thumb: '/images/base-alevin-infantil/infantil2-12.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
  {
    id: 14,
    src:   '/images/base-alevin-infantil/infantil2-13a.webp',
    thumb: '/images/base-alevin-infantil/infantil2-13a.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 15,
    src:   '/images/base-alevin-infantil/infantil2-15a.webp',
    thumb: '/images/base-alevin-infantil/infantil2-15a.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 16,
    src:   '/images/base-alevin-infantil/infantil2-17a.webp',
    thumb: '/images/base-alevin-infantil/infantil2-17a.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 17,
    src:   '/images/base-alevin-infantil/infantil2-19.webp',
    thumb: '/images/base-alevin-infantil/infantil2-19.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 18,
    src:   '/images/base-alevin-infantil/infantil2-21.webp',
    thumb: '/images/base-alevin-infantil/infantil2-21.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 19,
    src:   '/images/base-alevin-infantil/infantil2-22.webp',
    thumb: '/images/base-alevin-infantil/infantil2-22.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 20,
    src:   '/images/base-alevin-infantil/infantil2-24.webp',
    thumb: '/images/base-alevin-infantil/infantil2-24.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 21,
    src:   '/images/base-alevin-infantil/infantil2-30.webp',
    thumb: '/images/base-alevin-infantil/infantil2-30.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 22,
    src:   '/images/base-alevin-infantil/infantil2-32.webp',
    thumb: '/images/base-alevin-infantil/infantil2-32.webp',
    alt: 'Viaje a Inglaterra',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Viaje Increible.',
  },
  
    {
    id: 23,
    src:   '/images/base-alevin-infantil/infantil2-33.webp',
    thumb: '/images/base-alevin-infantil/infantil2-33.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Viaje a Inglaterra.',
  },

    {
    id: 24,
    src:   '/images/base-alevin-infantil/infantil2-35.webp',
    thumb: '/images/base-alevin-infantil/infantil2-35.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Viaje a Inglaterra',
  },
  
    {
    id: 25,
    src:   '/images/base-alevin-infantil/infantil2-36.webp',
    thumb: '/images/base-alevin-infantil/infantil2-36.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Viaje a Inglaterra',
  },
  
    {
    id: 26,
    src:   '/images/base-alevin-infantil/infantil2-37.webp',
    thumb: '/images/base-alevin-infantil/infantil2-37.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Viaje a Inglaterra',
  },
  
    {
    id: 27,
    src:   '/images/base-alevin-infantil/infantil2-51.webp',
    thumb: '/images/base-alevin-infantil/infantil2-51.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Estadio del Manchester City',
  },
    
    {
    id: 28,
    src:   '/images/base-alevin-infantil/infantil2-38.webp',
    thumb: '/images/base-alevin-infantil/infantil2-38.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Viaje a Inglaterra',
  },
  
    {
    id: 29,
    src:   '/images/base-alevin-infantil/infantil2-39.webp',
    thumb: '/images/base-alevin-infantil/infantil2-39.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Partido en Inglaterra',
  },
  
    {
    id: 30,
    src:   '/images/base-alevin-infantil/infantil2-43.webp',
    thumb: '/images/base-alevin-infantil/infantil2-43.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Estado Inglés',
  },
  
    {
    id: 31,
    src:   '/images/base-alevin-infantil/infantil2-44.webp',
    thumb: '/images/base-alevin-infantil/infantil2-44.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Estadio del Liverpool',
  },
  
    {
    id: 32,
    src:   '/images/base-alevin-infantil/infantil2-47.webp',
    thumb: '/images/base-alevin-infantil/infantil2-47.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Estadio del Liverpool',
  },
  
    {
    id: 33,
    src:   '/images/base-alevin-infantil/infantil2-49.webp',
    thumb: '/images/base-alevin-infantil/infantil2-49.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Estadio del Manchester United',
  },
  
    {
    id: 34,
    src:   '/images/base-alevin-infantil/infantil2-34.webp',
    thumb: '/images/base-alevin-infantil/infantil2-34.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Estadio del Manchester United.',
  },
  
    {
    id: 35,
    src:   '/images/base-alevin-infantil/infantil2-40.webp',
    thumb: '/images/base-alevin-infantil/infantil2-40.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'Partido contre equipo Inglés.',
  },
  
    {
    id: 36,
    src:   '/images/base-alevin-infantil/infantil2-52.webp',
    thumb: '/images/base-alevin-infantil/infantil2-52.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 37,
    src:   '/images/base-alevin-infantil/infantil2-55.webp',
    thumb: '/images/base-alevin-infantil/infantil2-55.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 38,
    src:   '/images/base-alevin-infantil/infantil2-56.webp',
    thumb: '/images/base-alevin-infantil/infantil2-56.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 39,
    src:   '/images/base-alevin-infantil/infantil2-57.webp',
    thumb: '/images/base-alevin-infantil/infantil2-57.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 40,
    src:   '/images/base-alevin-infantil/infantil2-60.webp',
    thumb: '/images/base-alevin-infantil/infantil2-60.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 41,
    src:   '/images/base-alevin-infantil/infantil2-61.webp',
    thumb: '/images/base-alevin-infantil/infantil2-61.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 42,
    src:   '/images/base-alevin-infantil/infantil2-62.webp',
    thumb: '/images/base-alevin-infantil/infantil2-62.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
    {
    id: 43,
    src:   '/images/base-alevin-infantil/infantil2-63.webp',
    thumb: '/images/base-alevin-infantil/infantil2-63.webp',
    alt: 'Antonio en categoría Infantil',
    temporada: '18/19 – 19/20',
    etapa: 'base',
    etapaLabel: 'Infantil',
    caption: 'La Nueva Etapa en Ogíjares 89.',
  },
  
  {
    id: 44,
    src:   '/images/cadete/cadete1-2.webp',
    thumb: '/images/cadete/cadete1-2.webp',
    alt: 'Antonio en categoría cadete con el dorsal 27',
    temporada: '20/21',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'Temporada cadete 20/21.',
  },
  
  {
    id: 45,
    src:   '/images/cadete/cadete1-3.webp',
    thumb: '/images/cadete/cadete1-3.webp',
    alt: 'Antonio en categoría cadete con el dorsal 27',
    temporada: '20/21',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'Temporada cadete 20/21.',
  },
  
  {
    id: 46,
    src:   '/images/cadete/cadete1-1.webp',
    thumb: '/images/cadete/cadete1-1.webp',
    alt: 'Antonio en categoría cadete con el dorsal 27',
    temporada: '20/21',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'Temporada cadete 20/21.',
  },
  
  {
    id: 47,
    src:   '/images/cadete/cadete2-1.webp',
    thumb: '/images/cadete/cadete2-1.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 48,
    src:   '/images/cadete/cadete2-2.webp',
    thumb: '/images/cadete/cadete2-2.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 49,
    src:   '/images/cadete/cadete2-3.webp',
    thumb: '/images/cadete/cadete2-3.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 50,
    src:   '/images/cadete/cadete2-4.webp',
    thumb: '/images/cadete/cadete2-4.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 51,
    src:   '/images/cadete/cadete2-5.webp',
    thumb: '/images/cadete/cadete2-5.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 52,
    src:   '/images/cadete/cadete2-8.webp',
    thumb: '/images/cadete/cadete2-8.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 53,
    src:   '/images/cadete/cadete2-9.webp',
    thumb: '/images/cadete/cadete2-9.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 54,
    src:   '/images/cadete/cadete2-10.webp',
    thumb: '/images/cadete/cadete2-10.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 55,
    src:   '/images/cadete/cadete2-12.webp',
    thumb: '/images/cadete/cadete2-12.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 56,
    src:   '/images/cadete/cadete2-13.webp',
    thumb: '/images/cadete/cadete2-13.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 57,
    src:   '/images/cadete/cadete2-14.webp',
    thumb: '/images/cadete/cadete2-14.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },
    
  {
    id: 58,
    src:   '/images/cadete/cadete2-15.webp',
    thumb: '/images/cadete/cadete2-15.webp',
    alt: 'Antonio en categoría cadete con el dorsal 21',
    temporada: '21/22',
    etapa: 'cadete',
    etapaLabel: 'Cadete',
    caption: 'El dorsal 21 llega para quedarse. Temporada cadete con 3 goles.',
  },

  {
    id: 59,
    src:   '/images/juvenil/juvenil1-1.webp',
    thumb: '/images/juvenil/juvenil1-1.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 60,
    src:   '/images/juvenil/juvenil1-2.webp',
    thumb: '/images/juvenil/juvenil1-2.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 61,
    src:   '/images/juvenil/juvenil1-3.webp',
    thumb: '/images/juvenil/juvenil1-3.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 62,
    src:   '/images/juvenil/juvenil1-4.webp',
    thumb: '/images/juvenil/juvenil1-4.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 63,
    src:   '/images/juvenil/juvenil1-5.webp',
    thumb: '/images/juvenil/juvenil1-5.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 64,
    src:   '/images/juvenil/juvenil1-5.webp',
    thumb: '/images/juvenil/juvenil1-5.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 65,
    src:   '/images/juvenil/juvenil1-6.webp',
    thumb: '/images/juvenil/juvenil1-6.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 66,
    src:   '/images/juvenil/juvenil1-7.webp',
    thumb: '/images/juvenil/juvenil1-7.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 67,
    src:   '/images/juvenil/juvenil1-80.webp',
    thumb: '/images/juvenil/juvenil1-80.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil primer año Ogijares 89.',  
  },

  {
    id: 68,
    src:   '/images/juvenil/juvenil2-1.webp',
    thumb: '/images/juvenil/juvenil2-1.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 69,
    src:   '/images/juvenil/juvenil2-2.webp',
    thumb: '/images/juvenil/juvenil2-2.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 70,
    src:   '/images/juvenil/juvenil2-3.webp',
    thumb: '/images/juvenil/juvenil2-3.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 71,
    src:   '/images/juvenil/juvenil2-5.webp',
    thumb: '/images/juvenil/juvenil2-5.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 72,
    src:   '/images/juvenil/juvenil2-9.webp',
    thumb: '/images/juvenil/juvenil2-9.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 73,
    src:   '/images/juvenil/juvenil2-10.webp',
    thumb: '/images/juvenil/juvenil2-10.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 74,
    src:   '/images/juvenil/juvenil2-11.webp',
    thumb: '/images/juvenil/juvenil2-11.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 75,
    src:   '/images/juvenil/juvenil2-12.webp',
    thumb: '/images/juvenil/juvenil2-12.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 76,
    src:   '/images/juvenil/juvenil2-14.webp',
    thumb: '/images/juvenil/juvenil2-14.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 77,
    src:   '/images/juvenil/juvenil2-21.webp',
    thumb: '/images/juvenil/juvenil2-21.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 78,
    src:   '/images/juvenil/juvenil2-28.webp',
    thumb: '/images/juvenil/juvenil2-28.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 79,
    src:   '/images/juvenil/juvenil2-29.webp',
    thumb: '/images/juvenil/juvenil2-29.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Alhendín.',  
  },

  {
    id: 80,
    src:   '/images/juvenil/juvenil2-33.webp',
    thumb: '/images/juvenil/juvenil2-33.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil segundo año Sierra Nevada Cenes.',  
  },

  {
    id: 81,
    src:   '/images/juvenil/juvenil3-1.webp',
    thumb: '/images/juvenil/juvenil3-1.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil Tercer año Sierra Nevada Cenes.',  
  },

  {
    id: 82,
    src:   '/images/juvenil/juvenil3-4.webp',
    thumb: '/images/juvenil/juvenil3-4.webp',
    alt: 'Antonio en categoría juvenil',
    temporada: '22/23 – 23/24 - 24/25',
    etapa: 'juvenil',
    etapaLabel: 'Juvenil',
    caption: 'Etapa juvenil Tercer año Sierra Nevada Cenes.',  
  },

  {
    id: 83,
    src:   '/images/senior/senior1-1.webp',
    thumb: '/images/senior/senior1-1.webp',
    alt: 'Antonio en categoría senior',
    temporada: '25/26',
    etapa: 'senior',
    etapaLabel: 'Senior',
    caption: 'Etapa senior primer año Sierra Nevada Cenes.',  
  },

  {
    id: 84,
    src:   '/images/senior/senior1-5.webp',
    thumb: '/images/senior/senior1-5.webp',
    alt: 'Antonio en categoría senior',
    temporada: '25/26',
    etapa: 'senior',
    etapaLabel: 'Senior',
    caption: 'Etapa senior primer año Sierra Nevada Cenes.',  
  },

  {
    id: 85,
    src:   '/images/senior/senior1-11.webp',
    thumb: '/images/senior/senior1-11.webp',
    alt: 'Antonio en categoría senior',
    temporada: '25/26',
    etapa: 'senior',
    etapaLabel: 'Senior',
    caption: 'Etapa senior primer año Sierra Nevada Cenes.',  
  },

  {
    id: 86,
    src:   '/images/senior/senior1-21.webp',
    thumb: '/images/senior/senior1-21.webp',
    alt: 'Antonio en categoría senior',
    temporada: '25/26',
    etapa: 'senior',
    etapaLabel: 'Senior',
    caption: 'Etapa senior primer año Sierra Nevada Cenes.',  
  },

  {
    id: 87,
    src:   '/images/senior/senior1-22.webp',
    thumb: '/images/senior/senior1-22.webp',
    alt: 'Antonio en categoría senior',
    temporada: '25/26',
    etapa: 'senior',
    etapaLabel: 'Senior',
    caption: 'Etapa senior primer año Sierra Nevada Cenes.',  
  },

  {
    id: 88,
    src:   '/images/base-alevin-infantil/alevin2-1.webp',
    thumb: '/images/base-alevin-infantil/alevin2-1.webp',
    alt: 'Foto de equipo',
    temporada: '16/17 - 17/18',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo alevín del Ogíjares 89.',
  },

  {
    id: 89,
    src:   '/images/base-alevin-infantil/infantil1-1.webp',
    thumb: '/images/base-alevin-infantil/infantil1-1.webp',
    alt: 'Foto de equipo',
    temporada: '18/19',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo infantil de primer año del Ogíjares 89.',
  },

  {
    id: 90,
    src:   '/images/base-alevin-infantil/infantil2-25.webp',
    thumb: '/images/base-alevin-infantil/infantil2-25.webp',
    alt: 'Foto de equipo',
    temporada: '19/20',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo infantil de segundo año del Ogíjares 89.',
  },

  {
    id: 91,
    src:   '/images/cadete/cadete1-1.webp',
    thumb: '/images/cadete/cadete1-1.webp',
    alt: 'Foto de equipo',
    temporada: '20/21',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo cadete de primer año del Ogíjares 89. Temporada de debut en Tercera Andaluza.',
  },

  {
    id: 92,
    src:   '/images/cadete/cadete2-16.webp',
    thumb: '/images/cadete/cadete2-16.webp',
    alt: 'Foto de equipo',
    temporada: '21/22',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo cadete de segundo año del Ogíjares 89. Temporada de debut en Tercera Andaluza.',
  },

  {
    id: 93,
    src:   '/images/juvenil/juvenil1-8.webp',
    thumb: '/images/juvenil/juvenil1-8.webp',
    alt: 'Foto de equipo',
    temporada: '22/23',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo juvenil de primer año del Ogíjares 89. Temporada de debut en Tercera Andaluza.',
  },

  {
    id: 94,
    src:   '/images/juvenil/juvenil2-4.webp',
    thumb: '/images/juvenil/juvenil2-4.webp',
    alt: 'Foto de equipo',
    temporada: '23/24',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo juvenil de segundo año del Alhendin. Temporada de debut en Segunda Andaluza.',
  },

  {
    id: 95,
    src:   '/images/juvenil/juvenil2-33.webp',
    thumb: '/images/juvenil/juvenil2-33.webp',
    alt: 'Foto de equipo',
    temporada: '23/24',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo juvenil del Sierra Nevada Cenes. Temporada de debut en Segunda Andaluza.',
  },

  {
    id: 96,
    src:   '/images/juvenil/juvenil3-3-.webp',
    thumb: '/images/juvenil/juvenil3-3.webp',
    alt: 'Foto de equipo',
    temporada: '24/25',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo juvenil del Sierra Nevada Cenes. Temporada de debut en segunda andaluza.',
  },

  {
    id: 97,
    src:   '/images/senior/senior1-34.webp',
    thumb: '/images/senior/senior1-34.webp',
    alt: 'Foto de equipo',
    temporada: '25/26',
    etapa: 'equipo',
    etapaLabel: 'Equipo',
    caption: 'El equipo senior del Sierra Nevada Cenes. Temporada de debut en primera andaluza.',
  },

//  {
//    id: 11,
 //   src:   'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-training-HvCtKqb377CXxVUCSS9GJB.png',
//    thumb: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030852881/Z23zqCqHXtDCHzorcyzFQi/gallery-training-DaZxaCU5tdHAyDUCyzfnSn.webp',
//    alt: 'Entrenamiento al atardecer',
//    temporada: 'Todos los años',
//    etapa: 'entrenamiento',
//    etapaLabel: 'Entrenamiento',
//    caption: '5 días de entrenamiento a la semana, temporada tras temporada. Sin excusas.',
//  },

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
  const gridRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = useCallback((key: string) => {
    setActiveFilter(key);
    // Scroll suave al inicio del grid de fotos al cambiar filtro
    setTimeout(() => {
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }, []);

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
                onClick={() => handleFilterChange(f.key)}
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
      <section className="py-12" ref={gridRef}>
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
