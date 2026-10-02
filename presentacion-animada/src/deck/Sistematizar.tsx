/**
 * Paso 4 · Sistematizar — el paso que nadie da y por el que todo se cae.
 *
 * Simetría a propósito con Mapear: aquel tiene tres preguntas para elegir el proceso,
 * este tiene tres preguntas para que el proceso sobreviva. Son los dos pasos sin IA.
 *
 * Son dos placas: las tres preguntas y dónde quedaste. Había una tercera con una tabla
 * de rutinas de ejemplo; se sacó el 30/09 porque era una lámina de asignaciones obvias
 * que no le revelaba nada a la sala. Los ejemplos se dan de boca.
 */

import { EncabezadoPaso } from "./Slide";

const PASO = { n: "04", nombre: "Sistematizar" };

/* ---------------- las tres preguntas ---------------- */

const PREGUNTAS = [
  "¿Quién lo ejecuta?",
  "¿Cada cuánto?",
  "¿Qué se hace con el resultado?",
];

export const Preguntas = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso {...PASO} titulo="Que no se caiga a la semana" />

    <div className="space-y-[26px]">
      {PREGUNTAS.map((q, k) => (
        <div
          key={q}
          className="flex items-baseline gap-[40px] rounded-[14px] border border-[hsla(0,0%,100%,0.10)] bg-[hsla(0,0%,100%,0.03)] px-[48px] py-[38px]"
        >
          <span className="font-heading text-[34px] font-bold leading-none text-muted-foreground/35">
            {k + 1}
          </span>
          <p className="font-heading text-[58px] font-bold leading-none tracking-[-0.025em] text-foreground">
            {q}
          </p>
        </div>
      ))}
    </div>
  </div>
);

/* ---------------- dónde quedaste ---------------- */

const NIVELES: [string, string, boolean][] = [
  ["Manual", "Una persona lo hace desde cero, cada vez.", false],
  ["Asistido", "Una persona lo ejecuta, pero no lo hace desde cero.", true],
  ["Automatizado", "Pasa solo, sin que nadie lo dispare.", false],
];

export const Niveles = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso {...PASO} titulo="Dónde quedaste" />

    <div className="space-y-[24px]">
      {NIVELES.map(([t, d, foco]) => (
        <div
          key={t}
          className={`rounded-[16px] border px-[52px] py-[38px] ${
            foco
              ? "border-[hsla(0,0%,100%,0.22)] bg-[hsla(0,0%,100%,0.06)]"
              : "border-[hsla(0,0%,100%,0.08)] bg-[hsla(0,0%,100%,0.025)]"
          }`}
        >
          <h3
            className={`font-heading text-[58px] font-bold leading-none tracking-[-0.02em] ${
              foco ? "text-foreground" : "text-muted-foreground/55"
            }`}
          >
            {t}
          </h3>
          <p
            className={`mt-[16px] text-[34px] leading-snug ${
              foco ? "text-muted-foreground" : "text-muted-foreground/45"
            }`}
          >
            {d}
          </p>
        </div>
      ))}
    </div>
  </div>
);
