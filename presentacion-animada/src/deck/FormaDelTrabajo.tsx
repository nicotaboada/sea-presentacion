/**
 * La placa que justifica que la charla sea sobre IA: los cuatro verbos que tienen
 * en común las cuatro situaciones.
 *
 * Acá los verbos aparecen de a uno y lento, al ritmo en que se enuncian, y el
 * rombo de la derecha se va completando con cada uno. Cuando entra el cuarto, la
 * figura cierra — y recién ahí llegan las dos líneas del final.
 *
 * Si al practicarlo te queda corto o largo, el único número que hay que tocar es
 * PASO: es el tiempo entre un verbo y el siguiente. Todo lo demás se acomoda solo.
 */

import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Slide from "./Slide";

const ORO = "#E8D36A";

/** Segundos entre un verbo y el siguiente. */
const PASO = 2.2;
/** Cuándo entra el primero. */
const ARRANQUE = 0.4;

const demora = (i: number) => ARRANQUE + i * PASO;
/** Las dos líneas del cierre, después del último verbo. */
const CIERRE = demora(3) + 2;

const VERBOS: [string, string][] = [
  ["Leer", "la lista de papel, el reglamento, la planilla"],
  ["Cruzar", "quién debe, qué nivel tiene, qué arancel le toca"],
  ["Decidir", "según tus reglas, no según lo que parece"],
  ["Producir", "la factura, el mensaje, el informe"],
];

/* ---------------------------------------------------------------- el rombo */

const R = 186;
const M = R / 2;

/** Los cuatro cuartos, en el orden en que se encienden: arriba, derecha, abajo, izquierda. */
const CARAS = [
  `0,${-R} ${M},${-M} 0,0 ${-M},${-M}`,
  `${M},${-M} ${R},0 ${M},${M} 0,0`,
  `0,0 ${M},${M} 0,${R} ${-M},${M}`,
  `${-M},${-M} 0,0 ${-M},${M} ${-R},0`,
];

const Contador = () => {
  const v = useMotionValue(1);
  const texto = useTransform(v, (n) => String(Math.min(4, Math.floor(n))));

  useEffect(() => {
    const control = animate(v, 5, {
      duration: 4 * PASO,
      delay: ARRANQUE,
      ease: "linear",
    });
    return control.stop;
  }, [v]);

  return (
    <motion.tspan>{texto}</motion.tspan>
  );
};

const Rombo = () => (
  <svg
    width="430"
    height="430"
    viewBox={`${-R - 14} ${-R - 14} ${(R + 14) * 2} ${(R + 14) * 2}`}
    aria-hidden
    className="shrink-0"
  >
    {/* el contorno completo, siempre visible: la figura que se va a cerrar */}
    <polygon
      points={`0,${-R} ${R},0 0,${R} ${-R},0`}
      fill="none"
      stroke="hsla(0,0%,100%,0.12)"
      strokeWidth="1.5"
      strokeDasharray="7 7"
    />

    {CARAS.map((puntos, i) => (
      <polygon
        key={puntos}
        className="cara"
        points={puntos}
        style={{ animationDelay: `${demora(i)}s` }}
        fill={ORO}
        fillOpacity={[0.92, 0.72, 0.52, 0.34][i]}
        stroke="#0a0a0a"
        strokeWidth="3"
      />
    ))}

    {/* el disco del centro tapa el vértice común y aloja la cuenta */}
    <circle r="60" fill="#121212" stroke="hsla(0,0%,100%,0.14)" strokeWidth="1.5" />
    <text
      textAnchor="middle"
      dominantBaseline="central"
      fill="hsla(0,0%,100%,0.92)"
      fontSize="42"
      fontWeight="700"
      fontFamily="Syne, sans-serif"
    >
      <Contador />
      <tspan fill="hsla(0,0%,100%,0.35)">/4</tspan>
    </text>
  </svg>
);

/* ---------------------------------------------------------------- la placa */

const FormaDelTrabajo = () => (
  <Slide pad={false}>
    <div className="flex h-full items-center gap-[80px] px-[150px]">
      <div className="min-w-0 flex-1">
        <p className="mb-[48px] font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Lo que tienen en común
        </p>

        <ul className="space-y-[28px]">
          {VERBOS.map(([v, ej], i) => (
            <li
              key={v}
              className="verbo flex items-baseline gap-[36px]"
              style={{ animationDelay: `${demora(i)}s` }}
            >
              <span className="w-[272px] shrink-0 font-heading text-[62px] font-bold leading-none tracking-[-0.03em] text-foreground">
                {v}
              </span>
              <span className="text-[32px] leading-tight text-muted-foreground">{ej}</span>
            </li>
          ))}
        </ul>

        <p
          className="verbo mt-[48px] text-[34px] leading-snug text-muted-foreground/70"
          style={{ animationDelay: `${CIERRE}s` }}
        >
          Hasta hace poco, eso solo se hacía a mano.
        </p>
        <p
          className="verbo mt-[18px] font-heading text-[42px] font-bold leading-[1.22] tracking-[-0.02em] text-foreground"
          style={{ animationDelay: `${CIERRE + 1}s` }}
        >
          Hoy hay una herramienta que también puede:
          <br />
          la inteligencia artificial.
        </p>
      </div>

      <Rombo />
    </div>
  </Slide>
);

export default FormaDelTrabajo;
