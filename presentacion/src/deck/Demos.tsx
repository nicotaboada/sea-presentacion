/**
 * Paso 3 · Usar — las cuatro demos.
 *
 * Las cuatro tienen la MISMA estructura de tres tiempos: la pregunta, el video, y
 * cuánto tardaba antes. Repetir el formato no es pereza: hace que la sala no tenga
 * que reorientarse cuatro veces y pueda mirar el contenido.
 *
 * Las capturas van en `public/resultados/`. Mientras no estén, la placa muestra un
 * hueco rotulado con el nombre de archivo que espera.
 */

import { useState } from "react";

import { EncabezadoPaso } from "./Slide";

const PASO = { n: "03", nombre: "Usar" };

/* ---------------- tiempo 1 · la pregunta ---------------- */

export const Pregunta = ({
  titulo,
  prompt,
  adjunto,
}: {
  titulo: string;
  prompt: string;
  adjunto?: string;
}) => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso {...PASO} titulo={titulo} />

    <div className="rounded-[16px] border border-[hsla(0,0%,100%,0.16)] bg-[hsla(0,0%,100%,0.05)] px-[56px] py-[52px]">
      {adjunto && (
        <span className="mb-[30px] inline-block rounded-full border border-[hsla(0,0%,100%,0.18)] px-[24px] py-[10px] text-[24px] text-muted-foreground">
          {adjunto}
        </span>
      )}
      <p className="text-[48px] leading-[1.38] text-foreground">{prompt}</p>
    </div>
  </div>
);

/* ---------------- tiempo 2 · el resultado ---------------- */

/**
 * Captura REAL, no recreación. Es la placa donde la sala decide si te cree, y un
 * output dibujado se huele. Las capturas van en `public/resultados/`.
 */
export const Resultado = ({
  titulo,
  archivo,
  muestra,
  pie,
}: {
  titulo: string;
  archivo: string;
  /** qué tiene que mostrar la captura, para el hueco mientras no exista */
  muestra: string;
  pie?: string;
}) => {
  const [falta, setFalta] = useState(false);

  return (
    <div className="flex h-full flex-col justify-center px-[120px]">
      <EncabezadoPaso {...PASO} titulo={titulo} />

      {falta ? (
        <div className="flex h-[600px] w-full flex-col items-center justify-center rounded-[16px] border-2 border-dashed border-[hsla(0,0%,100%,0.16)] bg-[hsla(0,0%,100%,0.02)]">
          <p className="font-heading text-[30px] font-bold uppercase tracking-[0.2em] text-muted-foreground/55">
            Captura real
          </p>
          <p className="mt-[26px] max-w-[46ch] text-center text-[30px] leading-[1.45] text-muted-foreground/45">
            {muestra}
          </p>
          <p className="mt-[34px] rounded-[8px] border border-[hsla(0,0%,100%,0.12)] px-[22px] py-[10px] font-mono text-[22px] text-muted-foreground/35">
            public/resultados/{archivo}
          </p>
        </div>
      ) : (
        <img
          src={`resultados/${archivo}`}
          alt=""
          onError={() => setFalta(true)}
          className="max-h-[760px] w-auto max-w-full self-center rounded-[14px] border border-[hsla(0,0%,100%,0.10)]"
        />
      )}

      {pie && (
        <p className="mt-[34px] text-[34px] leading-snug text-muted-foreground">{pie}</p>
      )}
    </div>
  );
};

/* ---------------- tiempo 3 · qué ganás ---------------- */

/**
 * NO es solo tiempo. En dos de las cuatro demos lo que se gana es otra cosa:
 * en la consulta, que la respuesta sea siempre la misma; en la auditoría, plata
 * y trabajo que hoy directamente no se hace.
 */
export const Ganancia = ({
  titulo,
  principal,
  detalle,
  puntos,
}: {
  titulo: string;
  principal: string;
  detalle: string;
  puntos: string[];
}) => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso {...PASO} titulo={titulo} />

    <p className="whitespace-pre-line font-heading text-[92px] font-bold leading-[1.06] tracking-[-0.03em] text-foreground">
      {principal}
    </p>
    <p className="mt-[24px] text-[40px] leading-snug text-muted-foreground">{detalle}</p>

    <ul className="mt-[54px] space-y-[24px]">
      {puntos.map((t) => (
        <li key={t} className="flex items-baseline gap-[26px]">
          <span className="mt-[2px] h-[10px] w-[10px] shrink-0 rounded-full bg-[hsla(0,0%,100%,0.3)]" />
          <span className="text-[34px] leading-tight text-muted-foreground">{t}</span>
        </li>
      ))}
    </ul>
  </div>
);
