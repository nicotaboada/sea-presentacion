/**
 * Las tres placas de conversación, animadas.
 *
 * Reemplazan a las capturas de `public/resultados/`. El texto es el MISMO que el
 * de esas capturas, palabra por palabra —incluidos los errores de tipeo del
 * pedido, que son parte del argumento: no hay que aprender a hablarle raro—.
 * Lo único que cambia es que se escribe en pantalla en vez de estar quieto.
 *
 * Las capturas siguen en `public/resultados/` por si hay que volver atrás.
 */

import type { ReactNode } from "react";

const AZUL = "#1E4E8C";

/* ---------------------------------------------------------------- el marco */

const Pantalla = ({
  rotulo,
  veredicto,
  mal = false,
  demoraVeredicto,
  children,
}: {
  rotulo: string;
  veredicto: string;
  mal?: boolean;
  demoraVeredicto: number;
  children: ReactNode;
}) => (
  <div className="flex h-full flex-col px-[110px] pb-[50px] pt-[108px]">
    <p className="mb-[20px] shrink-0 font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
      {rotulo}
    </p>

    <div className="min-h-0 flex-1 overflow-hidden rounded-[22px] border border-[hsla(0,0%,100%,0.09)] bg-[hsla(0,0%,100%,0.022)] px-[42px] py-[22px]">
      <div className="flex h-full flex-col justify-center gap-[20px]">{children}</div>
    </div>

    <p
      className="burbuja mt-[22px] shrink-0 font-heading text-[43px] font-bold leading-none tracking-[-0.025em]"
      style={{ animationDelay: `${demoraVeredicto}s`, color: mal ? "#E0918A" : undefined }}
    >
      {veredicto}
    </p>
  </div>
);

/* ---------------------------------------------------------------- piezas */

/** Lo que escribe el director. Entra desde la derecha, como en cualquier chat. */
const Vos = ({ t, children }: { t: number; children: ReactNode }) => (
  <div className="burbuja flex justify-end" style={{ animationDelay: `${t}s` }}>
    <div
      className="max-w-[1180px] rounded-[26px] px-[34px] py-[24px] text-[28px] leading-[1.45] text-white"
      style={{ backgroundColor: AZUL }}
    >
      {children}
    </div>
  </div>
);

/** Los tres puntitos, entre que mandás y que contesta. */
const Pensando = ({ t, hasta }: { t: number; hasta: number }) => (
  <div
    className="pensando flex items-center gap-[12px] pl-[6px]"
    style={{ animationDelay: `${t}s`, animationDuration: `${hasta - t}s` }}
  >
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="punto-pensando h-[14px] w-[14px] rounded-full bg-[hsla(0,0%,100%,0.5)]"
        style={{ animationDelay: `${i * 0.16}s` }}
      />
    ))}
  </div>
);

/** Un bloque de la respuesta. */
const Ia = ({ t, children }: { t: number; children: ReactNode }) => (
  <div className="burbuja" style={{ animationDelay: `${t}s` }}>
    {children}
  </div>
);

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

/* ================================================================ placa 12 */

export const MailGenerico = () => (
  <Pantalla
    rotulo="Lo que casi todos le piden"
    veredicto="Sirve. Lo mandás casi sin tocar."
    demoraVeredicto={5.4}
  >
    <Vos t={0.3}>
      Necesito que me ayudes a redactar un un mail para avisar a las a todas las
      familias que la academia va estar cerrada el dia jueves 10 y viernes 11 por
      el feriado.
    </Vos>

    <Pensando t={1.3} hasta={2.5} />

    <Ia t={2.6}>
      <p className="text-[28px] leading-[1.45] text-foreground/85">
        Claro. Te dejo una versión profesional, cálida y clara para enviar a todas
        las familias:
      </p>
    </Ia>

    <Ia t={3.2}>
      <div className="rounded-[18px] border border-[hsla(0,0%,100%,0.10)] bg-[hsla(0,0%,100%,0.045)] px-[30px] py-[22px]">
        <p className="text-[22px] text-muted-foreground/60">Correo electrónico</p>
        <p className="mt-[10px] border-b border-[hsla(0,0%,100%,0.10)] pb-[14px] text-[27px] text-foreground/90">
          Aviso importante: Academia cerrada jueves 10 y viernes 11
        </p>

        <div className="mt-[16px] space-y-[11px] text-[25px] leading-[1.4] text-foreground/85">
          <p>Estimadas familias:</p>
          <p>
            Les informamos que la academia permanecerá cerrada los días{" "}
            <B>jueves 10 y viernes 11</B>, con motivo del feriado.
          </p>
          <p>
            Las clases y actividades se retomarán con normalidad el <B>lunes 14</B>.
          </p>
          <p>
            Les agradecemos su comprensión y les deseamos un excelente fin de
            semana largo.
          </p>
          <p>
            Saludos cordiales,
            <br />
            <B>Equipo de la Academia</B>
          </p>
        </div>
      </div>
    </Ia>
  </Pantalla>
);

/* ================================================================ placa 13 */

export const PedidoCaso = () => (
  <Pantalla
    rotulo="Lo que casi nadie le pide"
    veredicto="Todo lo que un director puede saber de ese caso."
    demoraVeredicto={3.2}
  >
    <Vos t={0.3}>
      <div className="space-y-[16px]">
        <p>
          Soy director de un instituto de inglés en Buenos Aires.
          <br />
          El ciclo va de marzo a diciembre y las clases terminan el 11 de
          diciembre.
        </p>
        <p>
          El caso: la familia de una alumna de Teens 1, turno tarde, inscripta en
          marzo de este año, avisó por mail el 20 de octubre que la da de baja.
        </p>
        <p>
          Tiene impaga la cuota de octubre, que venció el día 10. Pagó la
          matrícula al inscribirse y nunca tuvo otra deuda. Además pidieron el
          certificado de nivel para presentar en el colegio.
        </p>
        <p>Necesito contestarles hoy y resolver dos cosas:</p>
        <p>
          1. Hasta qué fecha se le sigue devengando el arancel.
          <br />
          2. Qué monto exacto tengo que reclamarle.
        </p>
      </div>
    </Vos>
  </Pantalla>
);

/* ================================================================ placa 14 */

const PIDE: [string, ReactNode][] = [
  ["1.", <B key="a">Valor de la cuota mensual de esta alumna en octubre</B>],
  [
    "2.",
    <span key="b">
      Si la cuota de <B>noviembre y diciembre</B> tiene el mismo valor o si cambia.
    </span>,
  ],
];

export const RespuestaCaso = () => (
  <Pantalla
    mal
    rotulo="Lo que devolvió"
    veredicto="No puede. Y te pide tu reglamento y tus aranceles."
    demoraVeredicto={5.6}
  >
    <Pensando t={0.2} hasta={1.2} />

    <Ia t={1.3}>
      <p className="text-[34px] font-semibold leading-tight text-foreground">
        Necesito que me pases 3 cosas
      </p>
    </Ia>

    <Ia t={2}>
      <ol className="space-y-[12px] pl-[18px] text-[28px] leading-[1.4] text-foreground/88">
        {PIDE.map(([n, t]) => (
          <li key={n} className="flex gap-[16px]">
            <span className="shrink-0 font-semibold text-foreground">{n}</span>
            <span>{t}</span>
          </li>
        ))}
        <li className="flex gap-[16px]">
          <span className="shrink-0 font-semibold text-foreground">3.</span>
          <span>
            <B>La cláusula/reglamento que entregaron al inscribirse</B> sobre:
            <span className="mt-[8px] block pl-[26px] text-[26px] leading-[1.45] text-foreground/75">
              baja, cancelación, cuotas, compromiso de permanencia, preaviso, o
              cualquier texto parecido.
            </span>
          </span>
        </li>
      </ol>
    </Ia>

    <Ia t={3}>
      <p className="text-[27px] leading-[1.4] text-foreground/75">
        Si no tienen una cláusula específica, decímelo también.
      </p>
    </Ia>

    <Ia t={3.6}>
      <p className="text-[29px] leading-[1.4] text-foreground/88">
        Con eso te puedo decir concretamente:
      </p>
    </Ia>

    <Ia t={4.2}>
      <ul className="space-y-[10px] text-[27px] leading-[1.38] text-foreground/88">
        {[
          "hasta qué fecha corresponde cobrarle,",
          "cuánto adeuda exactamente al día de hoy, incluyendo octubre y eventualmente noviembre/diciembre,",
          "si corresponde aplicar algún recargo por mora, y",
        ].map((t, i) => (
          <li key={t} className="flex gap-[14px]">
            <span className="shrink-0 font-semibold text-foreground">
              {"abc"[i]})
            </span>
            <span>{t}</span>
          </li>
        ))}
        <li className="flex gap-[14px]">
          <span className="shrink-0 font-semibold text-foreground">d)</span>
          <span className="underline decoration-[hsla(0,0%,100%,0.3)] underline-offset-[6px]">
            te redacto el mail para la familia con un tono firme pero correcto,
            incluyendo el certificado de nivel.
          </span>
        </li>
      </ul>
    </Ia>
  </Pantalla>
);
