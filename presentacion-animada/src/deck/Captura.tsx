/**
 * Una o dos capturas reales a pantalla completa, con rótulo arriba y veredicto abajo.
 *
 * Cuando la conversación es larga se capturan DOS pedazos —el pedido y el remate de la
 * respuesta— y se apilan con un corte visible en el medio. Es honesto (se ve que salteó
 * algo) y legible, que es lo único que importa proyectado.
 *
 * Las imágenes van en `public/resultados/`. Si falta alguna, la placa muestra un hueco
 * rotulado con el nombre que espera — el deck pasa igual.
 */

import { useState } from "react";

const Trozo = ({
  archivo,
  espera,
  alto,
}: {
  archivo: string;
  espera: string;
  alto: number;
}) => {
  const [falta, setFalta] = useState(false);

  if (falta) {
    return (
      <div
        className="flex w-full flex-col items-center justify-center rounded-[14px] border-2 border-dashed border-[hsla(0,0%,100%,0.16)] bg-[hsla(0,0%,100%,0.02)]"
        style={{ height: alto }}
      >
        <p className="font-heading text-[26px] font-bold uppercase tracking-[0.2em] text-muted-foreground/55">
          Captura real
        </p>
        <p className="mt-[20px] max-w-[48ch] text-center text-[26px] leading-[1.45] text-muted-foreground/45">
          {espera}
        </p>
        <p className="mt-[24px] rounded-[8px] border border-[hsla(0,0%,100%,0.12)] px-[18px] py-[8px] font-mono text-[20px] text-muted-foreground/35">
          public/resultados/{archivo}
        </p>
      </div>
    );
  }

  return (
    <img
      src={`resultados/${archivo}`}
      alt=""
      onError={() => setFalta(true)}
      className="w-auto max-w-full self-center rounded-[14px] border border-[hsla(0,0%,100%,0.10)]"
      style={{ maxHeight: alto }}
    />
  );
};

const Captura = ({
  rotulo,
  archivo,
  archivo2,
  veredicto,
  espera,
  espera2,
  mal = false,
}: {
  rotulo: string;
  archivo: string;
  /** segunda captura, para cuando la conversación es larga y se parte en dos */
  archivo2?: string;
  veredicto: string;
  /** qué tiene que mostrar cada captura, para el hueco mientras no exista */
  espera: string;
  espera2?: string;
  mal?: boolean;
}) => {
  const doble = Boolean(archivo2);
  const alto = doble ? 375 : 880;

  return (
    <div className="flex h-full flex-col justify-center px-[120px]">
      <p
        className={`mb-[22px] font-heading text-[26px] font-bold uppercase tracking-[0.16em] ${
          mal ? "text-[#E08B80]/80" : "text-muted-foreground/60"
        }`}
      >
        {rotulo}
      </p>

      <Trozo archivo={archivo} espera={espera} alto={alto} />

      {doble && (
        <>
          <p className="my-[12px] text-center font-heading text-[30px] leading-none tracking-[0.5em] text-muted-foreground/30">
            ···
          </p>
          <Trozo archivo={archivo2!} espera={espera2 ?? ""} alto={alto} />
        </>
      )}

      {veredicto && (
        <p
          className={`mt-[26px] font-heading text-[44px] font-bold leading-tight tracking-[-0.02em] ${
            mal ? "text-[#E08B80]" : "text-foreground"
          }`}
        >
          {veredicto}
        </p>
      )}
    </div>
  );
};

export default Captura;
