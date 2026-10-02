/**
 * La misma asistencia, escrita dos veces: en la lista de papel durante la clase,
 * y después tipeada fila por fila en la planilla.
 * Los nombres son los de ING-T1-N-T (Teens 1, Sede Norte) — la comisión de Dante Olivera.
 */

const FECHAS = ["1", "3", "8", "10", "15"];

/** [apellido y nombre, marcas del papel] */
const FILAS: [string, string[]][] = [
  ["Barrios, Rodrigo", ["P", "P", "P", "P", "P"]],
  ["Velázquez, Julia", ["P", "A", "P", "P", "P"]],
  ["Olivera, Dante", ["P", "P", "P", "T", "P"]],
  ["Herrera, Gaspar", ["A", "A", "P", "P", "J"]],
  ["Falcón, Alma", ["P", "P", "P", "P", "P"]],
  ["Gómez, Abril", ["P", "P", "A", "P", "P"]],
];

const TINTA = "#23428F";
const SOMBRA = "shadow-[0_36px_76px_-18px_rgba(0,0,0,0.8)]";

/* ---------------- el papel ---------------- */

const Papel = () => (
  <div
    className={`w-[792px] -rotate-[1.3deg] rounded-[3px] bg-[#FBFAF5] px-[42px] py-[36px] ${SOMBRA}`}
    style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a1a" }}
  >
    <div className="flex items-end justify-between border-b-2 border-black pb-[9px]">
      <div>
        <p className="text-[22px] font-bold tracking-[0.04em]">INSTITUTO ALBORADA</p>
        <p className="mt-[4px] text-[15px]">Planilla de asistencia · Sede Norte</p>
      </div>
      <p className="text-right text-[15px] leading-[1.75]">
        Comisión{" "}
        <span className="font-mano text-[28px] leading-none" style={{ color: TINTA }}>
          ING-T1-N-T
        </span>
        <br />
        Mes{" "}
        <span className="font-mano text-[28px] leading-none" style={{ color: TINTA }}>
          septiembre
        </span>
      </p>
    </div>

    <table className="mt-[16px] w-full border-collapse">
      <thead>
        <tr>
          <th className="w-[40px] border border-black bg-[#EFEDE4] py-[6px] text-[14px] font-normal">N°</th>
          <th className="border border-black bg-[#EFEDE4] py-[6px] pl-[10px] text-left text-[14px] font-normal">
            Apellido y nombre
          </th>
          {FECHAS.map((f) => (
            <th key={f} className="w-[62px] border border-black bg-[#EFEDE4] py-[6px] text-[14px] font-normal">
              {f}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {FILAS.map(([nom, marcas], i) => (
          <tr key={nom}>
            <td className="border border-black py-[11px] text-center text-[14px] text-[#555]">{i + 1}</td>
            <td className="border border-black py-[11px] pl-[10px] text-[19px]">{nom}</td>
            {marcas.map((m, k) => (
              <td key={k} className="border border-black py-[11px] text-center">
                <span
                  className="font-mano text-[36px] font-semibold leading-none"
                  style={{ color: TINTA, display: "inline-block", transform: `rotate(${(k % 3) - 1}deg)` }}
                >
                  {m}
                </span>
              </td>
            ))}
          </tr>
        ))}
        {/* la fila agregada a mano: entró en agosto y nunca llegó a la planilla */}
        <tr>
          <td className="border border-black py-[11px] text-center text-[14px] text-[#555]">7</td>
          <td className="border border-black py-[7px] pl-[10px]">
            <span className="font-mano text-[36px] font-semibold leading-none" style={{ color: TINTA }}>
              Rivero, Delfina
            </span>
          </td>
          {["P", "P", "P", "P", "P"].map((m, k) => (
            <td key={k} className="border border-black py-[11px] text-center">
              <span
                className="font-mano text-[36px] font-semibold leading-none"
                style={{ color: TINTA, display: "inline-block", transform: `rotate(${1 - (k % 3)}deg)` }}
              >
                {m}
              </span>
            </td>
          ))}
        </tr>
      </tbody>
    </table>

    <p className="mt-[14px] text-[13px]">Referencias: P presente · A ausente · T tarde · J justificada</p>
  </div>
);

/* ---------------- la planilla ---------------- */

const Excel = () => (
  <div className={`w-[792px] overflow-hidden rounded-[6px] border border-[#3a3a3a] bg-white font-sans ${SOMBRA}`}>
    <div className="flex items-center gap-3 border-b border-[#d0d0d0] bg-[#f3f3f3] px-4 py-[10px]">
      <span className="rounded border border-[#c6c6c6] bg-white px-3 py-[3px] text-[15px] text-[#333]">D4</span>
      <span className="text-[15px] text-[#777]">fx</span>
      <span className="text-[15px] text-[#333]">T</span>
    </div>

    <div className="border-b border-[#d0d0d0] bg-[#FFF2A8] px-4 py-[9px] text-[17px] font-bold tracking-wide text-[#1a1a1a]">
      ASISTENCIA SEPT — T1 NORTE
    </div>

    <table className="w-full border-collapse text-[#1a1a1a]">
      <thead>
        <tr className="bg-[#e8e8e8]">
          <th className="w-[40px] border border-[#c6c6c6] py-[8px]" />
          <th className="border border-[#c6c6c6] py-[8px] pl-[10px] text-left text-[15px] font-semibold">
            APELLIDO Y NOMBRE
          </th>
          {FECHAS.map((f) => (
            <th key={f} className="w-[58px] border border-[#c6c6c6] py-[8px] text-center text-[15px] font-semibold">
              {f}
            </th>
          ))}
          <th className="w-[84px] border border-[#c6c6c6] py-[8px] text-center text-[15px] font-semibold">
            % asist
          </th>
        </tr>
      </thead>
      <tbody>
        {FILAS.map(([nom, marcas], i) => {
          const aus = marcas.filter((m) => m === "A").length;
          return (
            <tr key={nom}>
              <td className="border border-[#d8d8d8] bg-[#e8e8e8] py-[11px] text-center text-[14px] text-[#777]">
                {i + 1}
              </td>
              <td className="border border-[#d8d8d8] py-[11px] pl-[10px] text-[18px]">{nom}</td>
              {marcas.map((m, k) => (
                <td key={k} className="border border-[#d8d8d8] py-[11px] text-center text-[18px]">
                  {m}
                </td>
              ))}
              <td className="border border-[#d8d8d8] py-[11px] text-center text-[18px]">
                {Math.round(((5 - aus) / 5) * 100)}%
              </td>
            </tr>
          );
        })}
        {/* la fila 7 del papel todavía no está acá */}
        <tr>
          <td className="border border-[#d8d8d8] bg-[#e8e8e8] py-[11px] text-center text-[14px] text-[#777]">7</td>
          <td className="h-[54px] border border-[#d8d8d8]" />
          {FECHAS.map((f) => (
            <td key={f} className="border border-[#d8d8d8]" />
          ))}
          <td className="border border-[#d8d8d8]" />
        </tr>
      </tbody>
    </table>

    <div className="flex items-stretch gap-[2px] border-t border-[#c6c6c6] bg-[#f3f3f3] px-3 pt-[6px]">
      {["Asistencia", "sept", "ago", "Hoja1"].map((s, k) => (
        <span
          key={s}
          className={`rounded-t-[4px] px-[14px] py-[7px] text-[14px] ${
            k === 0
              ? "border border-b-0 border-[#c6c6c6] bg-white font-semibold text-[#1a1a1a]"
              : "text-[#666]"
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

/* ---------------- la placa ---------------- */

const DobleCarga = () => (
  <div className="flex h-full flex-col justify-center px-[58px]">
    <p className="mb-[52px] text-center font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
      Lo mismo, escrito dos veces
    </p>

    <div className="flex items-center justify-between">
      <Papel />

      <div className="flex w-[196px] shrink-0 flex-col items-center">
        <svg width="140" height="26" viewBox="0 0 140 26" fill="none" aria-hidden>
          <path
            d="M2 13h132M123 3l12 10-12 10"
            stroke="hsla(0,0%,100%,0.42)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-[24px] text-center font-heading text-[31px] font-bold leading-[1.26] tracking-[-0.01em] text-foreground">
          Alguien
          <br />
          lo tipea
        </p>
        <p className="mt-[14px] text-center text-[23px] leading-[1.35] text-muted-foreground/70">
          fila
          <br />
          por fila
        </p>
      </div>

      <Excel />
    </div>
  </div>
);

export default DobleCarga;
