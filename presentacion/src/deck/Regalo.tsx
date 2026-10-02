/**
 * La placa del regalo, antes de las preguntas.
 *
 * Existe separada de "¿Preguntas?" porque ahí el QR competía con la pregunta y
 * se perdía. Acá el QR es lo único que hay, y la sala tiene veinte segundos de
 * silencio para escanearlo antes de que empiecen a levantar la mano.
 *
 * La URL es la misma que la del cierre: si cambia una, cambian las dos.
 */

import { QRCodeSVG } from "qrcode.react";
import { URL_GUIA } from "./Cierre";

const ADENTRO = [
  "Los cuatro pasos, con las preguntas de cada uno",
  "Las tres consultas que usé hoy, para copiar y pegar",
  "Qué subir y qué no, y por qué",
  "El criterio para saber si algo entra o no entra",
];

const Regalo = () => (
  <div className="flex h-full items-center gap-[110px] px-[120px]">
    <div className="min-w-0 flex-1">
      <p className="font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Un regalo
      </p>

      <h2 className="mt-[26px] font-heading text-[116px] font-bold leading-none tracking-[-0.035em] text-foreground">
        La guía
      </h2>

      <ul className="mt-[54px] space-y-[26px]">
        {ADENTRO.map((t, i) => (
          <li
            key={t}
            className="verbo flex items-baseline gap-[24px] text-[34px] leading-snug text-muted-foreground"
            style={{ animationDelay: `${0.7 + i * 0.55}s` }}
          >
            <span className="shrink-0 text-[#E8D36A]">·</span>
            {t}
          </li>
        ))}
      </ul>

      <p
        className="verbo mt-[52px] text-[30px] leading-snug text-muted-foreground/50"
        style={{ animationDelay: "3.2s" }}
      >
        Y si quieren, les miro un proceso de su academia sin cargo.
        <br />
        Eso va en el mail.
      </p>
    </div>

    <div className="flex shrink-0 flex-col items-center">
      <div className="qr-regalo rounded-[26px] bg-white p-[36px]">
        <QRCodeSVG value={URL_GUIA} size={440} level="M" marginSize={0} />
      </div>
      <p
        className="verbo mt-[40px] text-center text-[32px] leading-snug text-foreground"
        style={{ animationDelay: "1.4s" }}
      >
        Escanealo ahora.
        <br />
        <span className="text-muted-foreground/60">Dejás tu mail y te llega.</span>
      </p>
    </div>
  </div>
);

export default Regalo;
