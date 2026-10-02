/**
 * El par largo: las mismas doce fuentes, desparramadas al principio (bloque de
 * problemas) y juntas veinte minutos después (bloque de Enseñar). La distancia
 * entre las dos placas es a propósito: cuando reaparecen ordenadas, la sala las
 * reconoce. Las cuatro marcadas contienen parte de la respuesta a la consulta de
 * la baja del 20 de octubre — y dos de ellas se contradicen entre sí.
 */

import { EncabezadoPaso } from "./Slide";

type Fuente = { tipo: string; nom: string; marcada?: boolean };

/** El orden es el del desparramo: las cuatro marcadas quedan repartidas, no en fila. */
export const FUENTES: Fuente[] = [
  { tipo: "Documento", nom: "Reglamento interno", marcada: true },
  { tipo: "Planilla", nom: "Notas y asistencia" },
  { tipo: "Planilla", nom: "Pagos", marcada: true },
  { tipo: "Documento", nom: "Grilla horaria" },
  { tipo: "Papel", nom: "Cuaderno de recepción" },
  { tipo: "Documento", nom: "Acuerdo de inscripción", marcada: true },
  { tipo: "Documento", nom: "Aranceles 2026" },
  { tipo: "Planilla", nom: "Alumnos", marcada: true },
  { tipo: "Mensajes", nom: "WhatsApp institucional" },
  { tipo: "Documento", nom: "Instructivo de secretaría" },
  { tipo: "Correo", nom: "Casilla de la academia" },
  { tipo: "Papel", nom: "La carpeta azul" },
];

/** En la placa de "juntas" se agrupan por tipo: el orden es justamente lo que cambia. */
const ORDEN: Record<string, number> = { Planilla: 0, Documento: 1 };
const AGRUPADAS = [...FUENTES].sort(
  (a, b) => (ORDEN[a.tipo] ?? 2) - (ORDEN[b.tipo] ?? 2)
);

/** left, top, rotación — desparramadas a mano, no en grilla */
const POS: [number, number, number][] = [
  [40, 15, -4],
  [490, -10, 3],
  [940, 25, -2],
  [1390, 0, 4],
  [150, 205, 3],
  [600, 230, -5],
  [1050, 195, 2],
  [1480, 225, -3],
  [60, 400, -3],
  [510, 425, 4],
  [960, 395, -4],
  [1400, 420, 2],
];

const Tarjeta = ({ f }: { f: Fuente }) => (
  <div
    className={`w-[230px] rounded-[9px] border px-[16px] py-[15px] ${
      f.marcada
        ? "border-[#E8D36A]/70 bg-[#221f14]"
        : "border-[hsla(0,0%,100%,0.10)] bg-[hsla(0,0%,100%,0.035)]"
    }`}
  >
    <p
      className={`text-[12px] uppercase tracking-[0.15em] ${
        f.marcada ? "text-[#E8D36A]/75" : "text-muted-foreground/45"
      }`}
    >
      {f.tipo}
    </p>
    <p className="mt-[9px] font-heading text-[19px] font-bold leading-[1.22] tracking-[-0.01em] text-foreground">
      {f.nom}
    </p>
    <div className="mt-[15px] space-y-[6px]">
      <div className="h-[3px] rounded-full bg-[hsla(0,0%,100%,0.13)]" />
      <div className="h-[3px] rounded-full bg-[hsla(0,0%,100%,0.13)]" />
      <div className="h-[3px] w-1/2 rounded-full bg-[hsla(0,0%,100%,0.13)]" />
    </div>
  </div>
);

/* ---------------- placa 1 · desparramadas ---------------- */

export const Dispersas = () => (
  <div className="flex h-full flex-col justify-center px-[58px]">
    <p className="mx-auto max-w-[42ch] text-center text-[44px] leading-[1.42] text-muted-foreground">
      “Una familia pide la baja el 20 de octubre y tiene una cuota impaga.{" "}
      <span className="text-foreground">¿Qué corresponde?”</span>
    </p>

    <div className="relative mt-[54px] h-[580px] w-full">
      {FUENTES.map((f, k) => (
        <div
          key={f.nom}
          className="absolute"
          style={{ left: POS[k][0], top: POS[k][1], transform: `rotate(${POS[k][2]}deg)` }}
        >
          <Tarjeta f={f} />
        </div>
      ))}
    </div>
  </div>
);

/* ---------------- placa 2 · juntas ---------------- */

export const Juntas = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso n="02" nombre="Enseñar" titulo="Juntar lo que ya tenés" />

    <div className="mx-auto rounded-[18px] border border-[hsla(0,0%,100%,0.14)] bg-[hsla(0,0%,100%,0.03)] px-[44px] pb-[40px] pt-[32px]">
      <p className="mb-[28px] font-heading text-[22px] font-bold uppercase tracking-[0.16em] text-muted-foreground/60">
        Instituto Alborada
      </p>
      <div className="grid grid-cols-4 gap-[22px]">
        {AGRUPADAS.map((f) => (
          <Tarjeta key={f.nom} f={f} />
        ))}
      </div>
    </div>
  </div>
);
