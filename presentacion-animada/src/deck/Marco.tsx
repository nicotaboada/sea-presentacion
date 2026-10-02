/**
 * El marco que envuelve cada placa: barra de arriba con el contexto, resplandor
 * de fondo y la barra de progreso segmentada de abajo.
 *
 * Va por encima de las placas y no las toca. Las 46 siguen siendo las mismas
 * que en `presentacion/`: lo único que cambia es lo que las rodea.
 */

import { motion } from "framer-motion";

export const ORO = "#E8D36A";

/* ---------------------------------------------------------------- bloques */

/** `desde` es el índice de la primera placa del bloque; el largo se calcula solo. */
export const BLOQUES = [
  { nombre: "Las situaciones", desde: 0 },
  { nombre: "El diagnóstico", desde: 7 },
  { nombre: "El método", desde: 18 },
  { nombre: "Los límites", desde: 40 },
];

export const bloqueDe = (i: number) =>
  BLOQUES.reduce((acc, b) => (i >= b.desde ? b : acc), BLOQUES[0]);

/** Índice del bloque, para saber cuándo abrir un hueco en la barra de progreso. */
const inicioDeBloque = new Set(BLOQUES.map((b) => b.desde));

/* ---------------------------------------------------------------- progreso */

/**
 * Una marca por placa, con un hueco más ancho entre bloques. De lejos se lee
 * como cuatro tramos; de cerca, como cuántas placas faltan.
 */
export const Progreso = ({ i, total }: { i: number; total: number }) => (
  <div className="pointer-events-none absolute inset-x-[150px] bottom-[54px] z-30 flex items-center">
    {Array.from({ length: total }, (_, k) => {
      const pasada = k < i;
      const actual = k === i;
      return (
        <div
          key={k}
          className="h-[3px] flex-1 rounded-full transition-colors duration-500"
          style={{
            marginLeft: k === 0 ? 0 : inicioDeBloque.has(k) ? 22 : 5,
            background: actual ? ORO : pasada ? "hsla(0,0%,100%,0.42)" : "hsla(0,0%,100%,0.10)",
            boxShadow: actual ? `0 0 14px ${ORO}66` : "none",
          }}
        />
      );
    })}
  </div>
);

/* ---------------------------------------------------------------- barra superior */

export const BarraSuperior = ({
  i,
  total,
  bloque,
}: {
  i: number;
  total: number;
  bloque: string;
}) => (
  <div className="pointer-events-none absolute inset-x-[150px] top-[52px] z-30 flex items-center justify-between">
    <div className="flex items-center gap-[14px]">
      <span className="h-[9px] w-[9px] rounded-full" style={{ background: ORO }} />
      <span className="text-[18px] text-muted-foreground/55">
        IA aplicada a la gestión de la academia
      </span>
    </div>

    <div className="font-heading text-[16px] font-bold uppercase tracking-[0.22em] text-muted-foreground/45">
      <span className="tabular-nums text-foreground/70">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="text-muted-foreground/30"> / {total}</span>
      <span className="text-muted-foreground/25"> · </span>
      {bloque}
    </div>
  </div>
);

/* ---------------------------------------------------------------- fondo */

/**
 * Resplandor detrás de la placa. Se mueve apenas al cambiar de bloque, así cada
 * tramo de la charla tiene una temperatura distinta sin que nadie lo note.
 */
export const Resplandor = ({ bloqueIdx }: { bloqueIdx: number }) => {
  const puntos = [
    "radial-gradient(1100px 700px at 28% 115%, rgba(232,211,106,0.085), transparent 68%)",
    "radial-gradient(1100px 700px at 72% 112%, rgba(232,211,106,0.075), transparent 68%)",
    "radial-gradient(1200px 760px at 50% 118%, rgba(232,211,106,0.095), transparent 70%)",
    "radial-gradient(1000px 680px at 62% 108%, rgba(200,120,110,0.075), transparent 68%)",
  ];
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      animate={{ background: puntos[bloqueIdx] ?? puntos[0] }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    />
  );
};
