/**
 * Paso 2 · Enseñar — "dónde lo ponés".
 *
 * Es la placa más literal de la charla: la que la sala copia. Por eso es una recreación
 * limpia y grande, no una captura real: proyectada, la interfaz de verdad se lee mal.
 * La interfaz real la van a ver igual, en los videos de las demos.
 *
 * La pregunta del campo de abajo es la misma de la placa 08 (la consulta de la baja),
 * a propósito.
 */

import { EncabezadoPaso } from "./Slide";

const ARCHIVOS: [string, string][] = [
  ["Alumnos", "xlsx"],
  ["Reglamento interno", "pdf"],
  ["Pagos", "xlsx"],
  ["Acuerdo de inscripción", "pdf"],
  ["Notas y asistencia", "xlsx"],
  ["Aranceles 2026", "pdf"],
  ["Grilla horaria 2026", "pdf"],
  ["Instructivo de secretaría", "pdf"],
];

const Proyecto = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso n="02" nombre="Enseñar" titulo="Dónde lo ponés" />

    <div className="mx-auto w-[1420px] overflow-hidden rounded-[18px] border border-[hsla(0,0%,100%,0.14)] bg-[hsla(0,0%,100%,0.035)] shadow-[0_40px_90px_-24px_rgba(0,0,0,0.85)]">
      <div className="flex items-center justify-between border-b border-[hsla(0,0%,100%,0.10)] px-[44px] py-[28px]">
        <p className="font-heading text-[38px] font-bold tracking-[-0.02em] text-foreground">
          Instituto Alborada
        </p>
        <p className="text-[24px] uppercase tracking-[0.15em] text-muted-foreground/45">Proyecto</p>
      </div>

      <div className="px-[44px] pb-[36px] pt-[30px]">
        <p className="mb-[24px] text-[23px] uppercase tracking-[0.15em] text-muted-foreground/45">
          Archivos · 8
        </p>

        <div className="grid grid-cols-2 gap-x-[30px] gap-y-[14px]">
          {ARCHIVOS.map(([nom, ext]) => (
            <div
              key={nom}
              className="flex items-center gap-[20px] rounded-[10px] border border-[hsla(0,0%,100%,0.09)] bg-[hsla(0,0%,100%,0.03)] px-[24px] py-[20px]"
            >
              <span
                className={`shrink-0 rounded-[6px] px-[12px] py-[5px] font-heading text-[17px] font-bold uppercase tracking-[0.06em] ${
                  ext === "xlsx"
                    ? "bg-[#1f3524] text-[#8FCB9B]"
                    : "bg-[#332020] text-[#E0A2A2]"
                }`}
              >
                {ext}
              </span>
              <span className="truncate text-[29px] text-foreground">{nom}</span>
            </div>
          ))}
        </div>

        <div className="mt-[34px] rounded-[12px] border border-[hsla(0,0%,100%,0.13)] bg-[hsla(0,0%,100%,0.05)] px-[28px] py-[24px]">
          <p className="text-[27px] leading-tight text-muted-foreground/55">
            Una familia pide la baja el 20 de octubre y tiene una cuota impaga. ¿Qué
            corresponde?
          </p>
        </div>
      </div>
    </div>

    <p className="mt-[46px] text-[38px] leading-snug text-muted-foreground">
      Un proyecto. Ocho archivos.{" "}
      <span className="text-foreground">Eso es enseñarle.</span>
    </p>
  </div>
);

export default Proyecto;
