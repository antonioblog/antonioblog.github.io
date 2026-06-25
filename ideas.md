# Ideas de Diseño — Antonio Encinas Camacho

## Tres enfoques considerados

### Enfoque A — "Estadio Nocturno"
Fondo oscuro profundo con destellos de luz de estadio, colores neón verdes y azules eléctricos. Estética de fútbol profesional moderno.
**Probabilidad:** 0.07

### Enfoque B — "Cuero y Tierra"
Tonos cálidos, textura de cuero de balón, tipografía serif robusta. Estética artesanal y atemporal que evoca la pasión por el deporte.
**Probabilidad:** 0.04

### Enfoque C — "Ascenso Imparable" ← ELEGIDO
Diseño editorial deportivo de alto impacto: fondo casi negro con un acento naranja-fuego como color de marca, tipografía condensada bold, composición asimétrica con líneas diagonales que evocan movimiento y velocidad. Inspirado en las mejores revistas deportivas europeas.
**Probabilidad:** 0.09

---

## Enfoque Elegido: "Ascenso Imparable"

### Design Movement
Editorial deportivo europeo — fusión de *Kicker* alemán y *France Football*, con la energía gráfica del fútbol moderno andaluz.

### Core Principles
1. **Asimetría dinámica**: Layouts que rompen la cuadrícula, con elementos en diagonal y composiciones en tensión visual.
2. **Contraste extremo**: Negro profundo vs. naranja fuego — sin medias tintas, sin grises suaves.
3. **Tipografía como arquitectura**: Los títulos son estructuras visuales, no solo texto.
4. **Datos como protagonistas**: Las estadísticas y la trayectoria se presentan con la misma importancia visual que las imágenes.

### Color Philosophy
- **Fondo**: `oklch(0.08 0.01 260)` — negro azulado casi puro, profundidad de noche de partido
- **Acento primario (naranja fuego)**: `oklch(0.68 0.19 42)` — inconfundible, enérgico, el color de la ambición
- **Acento secundario (verde campo)**: `oklch(0.72 0.18 145)` — gol, éxito, naturaleza del fútbol
- **Texto principal**: `oklch(0.95 0.005 80)` — blanco cálido, no frío
- **Texto secundario**: `oklch(0.65 0.01 80)` — gris cálido

### Layout Paradigm
Composición editorial con columnas asimétricas: la hero section usa una división 60/40 con imagen a la derecha cortada en diagonal. El timeline usa una línea vertical con tarjetas alternando izquierda/derecha. Las estadísticas usan un grid de datos tipo dashboard deportivo.

### Signature Elements
1. **Línea diagonal naranja**: Elemento recurrente que corta secciones y tarjetas, evocando velocidad y dirección.
2. **Número de dorsal gigante**: El "21" aparece como elemento decorativo de fondo en secciones clave.
3. **Badge de temporada**: Etiquetas con forma de escudo para marcar cada temporada.

### Interaction Philosophy
Animaciones de entrada rápidas y decididas (como un sprint). Hover states que revelan información adicional con transiciones de 150-200ms. El scroll desencadena revelaciones progresivas de la timeline.

### Animation
- Entrada de hero: título entra desde abajo con ease-out en 400ms
- Timeline: cada tarjeta se revela al hacer scroll con un fade + slide de 250ms
- Números de estadísticas: contador animado al entrar en viewport
- Hover en tarjetas: elevación sutil con sombra naranja (150ms)

### Typography System
- **Display/Títulos**: `Oswald` — condensada, bold, impacto máximo
- **Cuerpo**: `Source Sans 3` — legible, profesional, ligeramente humanista
- **Números/Datos**: `Oswald` en peso 700 para máximo impacto visual

### Brand Essence
**"El fútbol no te regala nada — Antonio lo sabe."** Para los que entienden que la constancia es el talento más difícil.
Personalidad: **Tenaz · Auténtico · Ascendente**

### Brand Voice
Directo, sin adornos, con peso. Como un buen pase: preciso y con intención.
- Ejemplo headline: *"Diez temporadas. Un camino. Sin atajos."*
- Ejemplo CTA: *"Conoce la historia completa"*

### Wordmark & Logo
Monograma "AEC" en Oswald bold, con la "A" y la "C" en naranja fuego y la "E" en blanco. Sobre fondo negro en forma de escudo hexagonal.

### Signature Brand Color
**Naranja fuego** `oklch(0.68 0.19 42)` — el color del balón bajo los focos, de la ambición sin límites.

---

## Style Decisions
- El número 21 (dorsal más representativo de Antonio) se usa como elemento decorativo gigante en secciones clave
- Las temporadas se presentan siempre con formato "XX/XX" en badge tipo escudo
- Los goles marcados se destacan con el color verde campo
- Los ascensos de categoría se marcan visualmente como hitos especiales
