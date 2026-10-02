/**
 * La última placa. Se queda en pantalla durante los diez minutos de preguntas,
 * que es exactamente cuando la gente saca el teléfono.
 *
 * Dos mitades: a la izquierda las preguntas, a la derecha el regalo.
 * El QR se genera en el deck, sin depender de internet en la sala.
 * Cambiá URL por la definitiva y listo.
 */

import { QRCodeSVG } from "qrcode.react";

/**
 * Lo único que hay que tocar acá.
 *
 * El utm_source=sea no es decorativo: es lo que separa a los que vienen de la charla
 * de los que se suscriben al newsletter de devs. La automatización de bienvenida
 * en beehiiv tiene la condición "UTM source does not equal sea". Si sacás el
 * parámetro, los directores de academia empiezan a recibir mails de desarrollo.
 */
export const URL_GUIA = "https://nicolas-taboada.beehiiv.com/products/guia?utm_source=sea";

const Cierre = () => (
  <div className="flex h-full items-center px-[120px]">
    {/* izquierda · las preguntas */}
    <div className="flex-1">
      <h2 className="font-heading text-[116px] font-bold leading-none tracking-[-0.035em] text-foreground">
        ¡Muchas gracias!
      </h2>

      <p className="mt-[42px] font-heading text-[58px] font-bold leading-none tracking-[-0.025em] text-muted-foreground">
        ¿Preguntas?
      </p>

      {/* El mail va acá y no en la placa del regalo: el QR captura al que se lo
          lleva para leerlo, el mail es para el que quiere escribirte. */}
      <p className="mt-[60px] text-[30px] leading-[1.5] text-muted-foreground/50">
        Nicolás Taboada · NimboClass
        <br />
        <span className="text-foreground/85">nicolas@nimbora.co</span>
      </p>
    </div>

    <div className="mx-[90px] h-[620px] w-px shrink-0 bg-[hsla(0,0%,100%,0.12)]" />

    {/* derecha · el regalo */}
    <div className="flex shrink-0 flex-col items-center">
      <div className="rounded-[22px] bg-white p-[32px]">
        <QRCodeSVG value={URL_GUIA} size={400} level="M" marginSize={0} />
      </div>

      <p className="mt-[42px] font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground/60">
        Un regalo
      </p>

      <p className="mt-[20px] max-w-[22ch] text-center text-[36px] leading-[1.35] text-foreground">
        La guía con los cuatro pasos y las consultas que usé hoy.
      </p>
    </div>
  </div>
);

export default Cierre;
