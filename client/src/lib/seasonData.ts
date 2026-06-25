// ============================================================
// ANTONIO ENCINAS CAMACHO — Datos de trayectoria completa
// ============================================================

export interface Season {
  id: string;
  temporada: string;
  club: string;
  categoria: string;
  division?: string;
  dorsal?: number;
  goles?: number;
  descripcion: string;
  destacado?: string;
  hito?: boolean;
  tipo: 'base' | 'cadete' | 'juvenil' | 'senior';
  color?: 'orange' | 'green';
}

export const seasons: Season[] = [
  {
    id: '16-17',
    temporada: '16/17',
    club: 'Ogíjares 89',
    categoria: 'Alevín 1.º año',
    descripcion: 'Primer año en el fútbol. Antonio da sus primeros pasos en el Ogíjares 89 en la categoría alevín, comenzando una historia que marcaría los siguientes diez años de su vida.',
    tipo: 'base',
  },
  {
    id: '17-18',
    temporada: '17/18',
    club: 'Ogíjares 89',
    categoria: 'Alevín 2.º año',
    descripcion: 'Segunda temporada como alevín. Antonio consolida su aprendizaje y empieza a mostrar las cualidades que lo definirán: constancia, disciplina y entrega en cada entrenamiento.',
    tipo: 'base',
  },
  {
    id: '18-19',
    temporada: '18/19',
    club: 'Ogíjares 89',
    categoria: 'Infantil 1.º año',
    descripcion: 'El salto a la categoría infantil. Mayor exigencia física y táctica. Antonio se adapta con determinación al nuevo nivel competitivo.',
    tipo: 'base',
  },
  {
    id: '19-20',
    temporada: '19/20',
    club: 'Ogíjares 89',
    categoria: 'Infantil 2.º año',
    descripcion: 'Segundo año en infantil. Madurez creciente y consolidación en el equipo. Antonio afina su lectura del juego y su posicionamiento.',
    tipo: 'base',
  },
  {
    id: '20-21',
    temporada: '20/21',
    club: 'Ogíjares 89',
    categoria: 'Cadete 1.º año',
    division: 'Tercera Andaluza',
    dorsal: 27,
    goles: 5,
    descripcion: 'Gran salto al fútbol cadete. Antonio debuta en Tercera Andaluza con el dorsal 27 y marca 5 goles. Además, debuta en Segunda Andaluza, demostrando que puede competir en niveles superiores.',
    destacado: 'Debut en Segunda Andaluza · 5 goles en Tercera Andaluza',
    hito: true,
    tipo: 'cadete',
    color: 'orange',
  },
  {
    id: '21-22',
    temporada: '21/22',
    club: 'Ogíjares 89',
    categoria: 'Cadete 2.º año',
    division: 'Tercera Andaluza',
    dorsal: 21,
    goles: 3,
    descripcion: 'Con el dorsal 21 que ya no abandonaría, Antonio suma 3 goles en su segundo año cadete. La constancia en el trabajo diario empieza a dar sus frutos de forma regular.',
    destacado: 'Dorsal 21 · 3 goles',
    tipo: 'cadete',
    color: 'orange',
  },
  {
    id: '22-23',
    temporada: '22/23',
    club: 'Ogíjares 89',
    categoria: 'Juvenil 1.º año',
    division: 'Tercera · Cuarta · Segunda Andaluza',
    dorsal: 21,
    descripcion: 'Una temporada exigente y compleja. Antonio juega en tres equipos simultáneamente: Tercera, Cuarta y Segunda Andaluza. Entrena 5 días a la semana y disputa 2-3 partidos cada fin de semana. La situación genera tensión: los de Cuarta lo consideran del equipo de Tercera, y viceversa. No fue un año fácil, pero Antonio lo afrontó con la cabeza alta.',
    destacado: '3 competiciones · 5 entrenamientos/semana · 2-3 partidos/fin de semana',
    hito: true,
    tipo: 'juvenil',
    color: 'orange',
  },
  {
    id: '23-24',
    temporada: '23/24',
    club: 'Alhendín / C.F. Sierra Nevada-Cenes',
    categoria: 'Juvenil 2.º año',
    division: 'Segunda Andaluza · Tercera · Cuarta Juvenil · Segunda Senior',
    goles: 3,
    descripcion: 'Cambio de club al Alhendín, donde le va muy bien hasta que el entrenador la toma con él. Sin rendirse, se cambia al C.F. Sierra Nevada-Cenes, donde juega en tres categorías distintas y marca 3 goles. La adversidad no detiene su progreso.',
    destacado: '3 goles · Dos clubs · Debut con el senior',
    hito: true,
    tipo: 'juvenil',
    color: 'green',
  },
  {
    id: '24-25',
    temporada: '24/25',
    club: 'C.F. Sierra Nevada-Cenes',
    categoria: 'Juvenil 3.º año',
    division: 'Segunda Andaluza Juvenil + Senior',
    dorsal: 21,
    descripcion: 'Tras el ascenso del equipo a Segunda Andaluza, Antonio consolida su posición con el dorsal 21. Compagina el equipo juvenil con el senior, demostrando que ya tiene nivel para competir entre adultos.',
    destacado: 'Ascenso a Segunda Andaluza · Doble equipo juvenil/senior',
    hito: true,
    tipo: 'juvenil',
    color: 'green',
  },
  {
    id: '25-26',
    temporada: '25/26',
    club: 'C.D. Numancia → C.F. Sierra Nevada-Cenes',
    categoria: 'Senior',
    division: 'Tercera Andaluza → Primera Andaluza',
    descripcion: 'El gran salto al fútbol senior. Tras el ascenso del C.F. Sierra Nevada-Cenes, no cuentan con él y ficha por el C.D. Numancia en Tercera Andaluza Senior. A mitad de temporada, el Sierra Nevada-Cenes lo ficha de nuevo para disputar la Primera Andaluza Senior. El reconocimiento llega.',
    destacado: 'Primera Andaluza Senior · Dos clubs en una temporada',
    hito: true,
    tipo: 'senior',
    color: 'green',
  },
];

export const careerStats = {
  temporadas: 10,
  clubes: 4,
  golesDocumentados: 11,
  categoriaActual: 'Primera Andaluza Senior',
  dorsalIconico: 21,
  descripcion: 'Diez temporadas de constancia, trabajo y ascenso continuo en el fútbol andaluz.',
};

export const valores = [
  {
    titulo: 'Constancia',
    descripcion: 'Cinco días de entrenamiento a la semana, temporada tras temporada. Antonio no falta, no cede, no para.',
    icono: '⚡',
  },
  {
    titulo: 'Disciplina',
    descripcion: 'Cada entrenamiento es una oportunidad. Cada partido, una prueba. La disciplina es su ventaja competitiva.',
    icono: '🎯',
  },
  {
    titulo: 'Trabajo en equipo',
    descripcion: 'Buen compañero dentro y fuera del campo. Su actitud eleva al grupo, no solo sus actuaciones individuales.',
    icono: '🤝',
  },
  {
    titulo: 'Resiliencia',
    descripcion: 'Cuando el entrenador la tomó con él, buscó otro equipo. Cuando no contaron con él, volvió más fuerte.',
    icono: '💪',
  },
];
