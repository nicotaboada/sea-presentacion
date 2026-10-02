/**
 * El extracto del banco contra la planilla de pagos.
 *
 * Reemplaza a la placa de "la planilla desordenada", que mostraba un estado y no
 * un trabajo. Esto sí es trabajo repetitivo: todos los meses alguien se sienta
 * con estas dos cosas abiertas y las cruza, movimiento por movimiento.
 *
 * Las dos tablas NO alinean a propósito. Ese desencuentro es la placa entera: el
 * banco te dice cuánto entró, la planilla te dice quién debe, y en el medio hay
 * una persona deduciendo. Por eso la columna de octubre está llena de signos de
 * pregunta y el extracto tiene las anotaciones a mano.
 *
 * Datos coherentes con Alborada: Kids 1 son 68.000, Teens 1 son 84.000, el
 * descuento de hermanos es 15% (57.800) y el pago anual 10% (75.600). El legajo
 * 0385 es uno de los dos que no tienen arancel cargado — el mismo que encuentra
 * la auditoría del Caso 2.
 */

const TINTA = "#23428F";

/**
 * Tres tiempos, y siguen el orden en que se cuenta la placa:
 *   1 · entra el banco, fila por fila        "esto es lo que entró"
 *   2 · entra tu planilla, fila por fila     "esto es lo que tenés"
 *   3 · aparecen las preguntas y los tildes  "y acá empieza el trabajo"
 */
const PASO_FILA = 0.2;
const BANCO = 0.3;
const PLANILLA = 2.1;
const PREGUNTAS = 3.9;
const AMARILLO = "#FFF2A8";

/* ---------------------------------------------------------------- el banco */

const MOVIMIENTOS: [string, string, string, string?][] = [
  ["05/10", "TRANSF · OLIVERA, DANTE", "84.000"],
  ["06/10", "TRANSF · GONZALEZ, MARIA C.", "84.000", "¿quién?"],
  ["07/10", "MERC PAGO · p.barrios", "84.000", "¿Rodrigo?"],
  ["08/10", "TRANSF · CORONEL, M.", "125.800", "¿las 2 hnas?"],
  ["09/10", "TRANSF · FALCON, ALMA", "84.000"],
  ["10/10", "TRANSF · SALAS, SOFIA", "92.000", "está en 2"],
  ["13/10", "TRANSF · R. SARMIENTO", "68.000", "¿y Ana?"],
  ["14/10", "TRANSF · HERRERA, G.", "75.600"],
];

const Banco = () => (
  <div className="flex-1 overflow-hidden rounded-[8px] border border-[#3a3a3a] bg-white font-sans shadow-[0_30px_64px_-18px_rgba(0,0,0,0.8)]">
    <div className="flex items-baseline justify-between border-b border-[#d0d0d0] bg-[#f3f3f3] px-[24px] py-[14px]">
      <span className="text-[20px] font-bold text-[#1a1a1a]">Movimientos · Banco</span>
      <span className="text-[17px] text-[#777]">octubre</span>
    </div>

    <table className="w-full border-collapse text-[#1a1a1a]">
      <tbody>
        {MOVIMIENTOS.map(([f, det, imp, nota], i) => (
          <tr
            key={f + det}
            className={`fila-conc ${i % 2 ? "bg-[#fafafa]" : ""}`}
            style={{ animationDelay: `${BANCO + i * PASO_FILA}s` }}
          >
            <td className="w-[78px] border-b border-[#ededed] py-[13px] pl-[24px] text-[17px] text-[#666]">
              {f}
            </td>
            <td className="border-b border-[#ededed] py-[13px] text-[19px]">{det}</td>
            <td className="w-[126px] border-b border-[#ededed] py-[13px] text-right text-[19px] tabular-nums">
              $ {imp}
            </td>
            <td className="w-[172px] border-b border-[#ededed] py-[13px] pl-[14px] pr-[18px]">
              {nota && (
                <span
                  className="nota-conc font-mano text-[27px] font-semibold leading-none"
                  style={{ color: TINTA, animationDelay: `${PREGUNTAS + i * 0.26}s` }}
                >
                  {nota}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ---------------------------------------------------------------- la planilla */

/** [legajo, alumno, curso, cuota, octubre resuelto] */
const ALUMNOS: [string, string, string, string, boolean][] = [
  ["0142", "Olivera, Dante", "Teens 1", "84.000", true],
  ["0143", "Barrios, Rodrigo", "Teens 1", "84.000", false],
  ["0118", "Coronel, Milagros", "Kids 1", "68.000", false],
  ["0119", "Coronel, Renata", "Kids 1", "57.800", false],
  ["0151", "Falcón, Alma", "Teens 1", "84.000", true],
  ["0160", "Salas, Sofía", "B2 + Conv", "92.000", false],
  ["0385", "Sarmiento, Ana", "A1", "—", false],
  ["0147", "Herrera, Gaspar", "Teens 1", "75.600", true],
];

const Planilla = () => (
  <div className="flex-1 overflow-hidden rounded-[8px] border border-[#3a3a3a] bg-white font-sans shadow-[0_30px_64px_-18px_rgba(0,0,0,0.8)]">
    <div className="flex items-baseline justify-between border-b border-[#d0d0d0] bg-[#f3f3f3] px-[24px] py-[14px]">
      <span className="text-[20px] font-bold text-[#1a1a1a]">Pagos · Instituto Alborada</span>
      <span className="text-[17px] text-[#777]">octubre</span>
    </div>

    <table className="w-full border-collapse text-[#1a1a1a]">
      <thead>
        <tr className="bg-[#efefef] text-[15px] font-semibold text-[#555]">
          <th className="w-[84px] py-[9px] pl-[24px] text-left">Legajo</th>
          <th className="py-[9px] text-left">Alumno</th>
          <th className="w-[126px] py-[9px] text-right">Cuota</th>
          <th className="w-[92px] py-[9px] pr-[24px] text-center">Oct</th>
        </tr>
      </thead>
      <tbody>
        {ALUMNOS.map(([leg, nom, curso, cuota, ok], i) => (
          <tr
            key={leg}
            className={`fila-conc ${i % 2 ? "bg-[#fafafa]" : ""}`}
            style={{ animationDelay: `${PLANILLA + i * PASO_FILA}s` }}
          >
            <td className="border-b border-[#ededed] py-[13px] pl-[24px] text-[17px] tabular-nums text-[#666]">
              {leg}
            </td>
            <td className="border-b border-[#ededed] py-[13px] text-[19px]">
              {nom}
              <span className="ml-[10px] text-[16px] text-[#999]">{curso}</span>
            </td>
            <td className="border-b border-[#ededed] py-[13px] text-right text-[19px] tabular-nums">
              {cuota}
            </td>
            <td className="border-b border-[#ededed] py-[13px] pr-[24px] text-center">
              {ok ? (
                <span
                  className="nota-conc text-[20px] text-[#2E7D32]"
                  style={{ animationDelay: `${PREGUNTAS + i * 0.18}s` }}
                >
                  ✓
                </span>
              ) : (
                <span
                  className="nota-conc rounded-[4px] px-[12px] py-[3px] text-[19px] font-bold"
                  style={{ backgroundColor: AMARILLO, animationDelay: `${PREGUNTAS + i * 0.18}s` }}
                >
                  ?
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ---------------------------------------------------------------- la placa */

const Conciliacion = () => (
  <div className="flex h-full flex-col justify-center px-[100px]">
    <p className="mb-[34px] text-center font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
      ¿Quién pagó?
    </p>

    <div className="flex items-start gap-[44px]">
      <Banco />
      <Planilla />
    </div>

    <p className="mt-[36px] text-center text-[34px] leading-snug text-muted-foreground">
      Ciento sesenta y cinco movimientos.{" "}
      <span className="text-foreground">Todos los meses.</span>
    </p>
  </div>
);

export default Conciliacion;
