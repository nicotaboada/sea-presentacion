/**
 * Paso 2 · Enseñar — "qué no subir".
 *
 * Va DENTRO de Enseñar y no al final de la charla: es justo el momento en que la sala
 * se pregunta "¿y esto es seguro?". Contestarlo antes de que lo pregunten compra toda
 * la credibilidad del bloque.
 *
 * El truco práctico es uno solo: se trabaja con legajo. La planilla que relaciona
 * legajo con nombre se queda afuera.
 */

import { EncabezadoPaso } from "./Slide";

const SI = [
  "Legajo",
  "Nivel y comisión",
  "Notas y asistencia",
  "Importes y vencimientos",
  "El reglamento",
  "La grilla y los aranceles",
];

const NO = [
  "Nombres de alumnos menores",
  "DNI",
  "Teléfonos y direcciones",
  "Datos de salud",
  "Mails de las familias",
];

const Datos = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <EncabezadoPaso n="02" nombre="Enseñar" titulo="Qué no subir" />

    <div className="grid grid-cols-2 gap-[46px]">
      <div className="rounded-[16px] border border-[hsla(0,0%,100%,0.16)] bg-[hsla(0,0%,100%,0.04)] px-[48px] pb-[44px] pt-[36px]">
        <p className="mb-[32px] font-heading text-[30px] font-bold uppercase tracking-[0.16em] text-foreground">
          Sube
        </p>
        <ul className="space-y-[22px]">
          {SI.map((t) => (
            <li key={t} className="text-[36px] leading-tight text-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[16px] border border-[#C0392B]/35 bg-[#1e1212]/60 px-[48px] pb-[44px] pt-[36px]">
        <p className="mb-[32px] font-heading text-[30px] font-bold uppercase tracking-[0.16em] text-[#E08B80]">
          No sube
        </p>
        <ul className="space-y-[22px]">
          {NO.map((t) => (
            <li key={t} className="text-[36px] leading-tight text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Datos;
