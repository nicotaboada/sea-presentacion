/**
 * Paso 1 · Mapear — dos placas.
 *
 * La primera le pone nombre a lo que la sala ya vio en el bloque de situaciones:
 * eso era un mapeo, solo que nadie lo llamó así. Ordenado por frecuencia, porque
 * la frecuencia es lo que convierte una queja en un mapa.
 *
 * La segunda da el criterio para elegir el primero. Es la placa que hace que el
 * método sirva para procesos que no se muestran en la charla.
 */

import { EncabezadoPaso } from "./Slide";

/** [proceso, cada cuánto, si ya se mostró en el bloque de situaciones] */
const TRABAJO: [string, string, boolean][] = [
  ["Conciliar los pagos contra el extracto del banco", "Cada mes", true],
  ["Pasar la asistencia del papel a la planilla", "Cada semana", true],
  ["Contestar qué dice el reglamento ante un caso", "Cada semana", true],
  ["Emitir los comprobantes, uno por uno", "Cada mes", true],
  ["Los informes a las familias", "2 veces al año", false],
  ["La reinscripción completa", "1 vez al año", false],
];

export const Mapa = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso n="01" nombre="Mapear" titulo="El trabajo que se repite" />

    <ul className="space-y-[3px]">
      {TRABAJO.map(([proc, frec, visto]) => (
        <li
          key={proc}
          className="flex items-center justify-between gap-[40px] border-b border-[hsla(0,0%,100%,0.07)] py-[26px]"
        >
          <span
            className={`text-[38px] leading-tight ${
              visto ? "text-foreground" : "text-muted-foreground/65"
            }`}
          >
            {proc}
          </span>
          <span
            className={`shrink-0 rounded-full border px-[26px] py-[9px] text-[25px] ${
              visto
                ? "border-[hsla(0,0%,100%,0.22)] text-muted-foreground"
                : "border-[hsla(0,0%,100%,0.10)] text-muted-foreground/45"
            }`}
          >
            {frec}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------- el criterio ---------------- */

const PREGUNTAS: [string, string][] = [
  ["¿Cuántas veces al año pasa?", "Doce veces cuesta más que una, aunque esa una duela más."],
  ["¿Se hace siempre igual?", "Si cada caso se resuelve distinto, todavía no es candidato."],
  ["¿Está escrito en algún lado?", "Si la regla vive solo en tu cabeza, el primer paso es escribirla."],
];

export const Criterio = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso n="01" nombre="Mapear" titulo="Cuál elegir primero" />

    <div className="space-y-[30px]">
      {/* De a una y lento: las tres se enuncian con pausa entre medio. */}
      {PREGUNTAS.map(([q, d], k) => (
        <div
          key={q}
          className="paso flex items-baseline gap-[34px] rounded-[14px] border border-[hsla(0,0%,100%,0.10)] bg-[hsla(0,0%,100%,0.03)] px-[44px] py-[34px]"
          style={{ animationDelay: `${0.5 + k * 1.5}s` }}
        >
          <span className="font-heading text-[34px] font-bold leading-none text-muted-foreground/40">
            {k + 1}
          </span>
          <div>
            <p className="font-heading text-[46px] font-bold leading-none tracking-[-0.02em] text-foreground">
              {q}
            </p>
            <p className="mt-[16px] text-[30px] leading-snug text-muted-foreground/70">{d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
