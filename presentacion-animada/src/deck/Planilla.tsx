/**
 * Recreación de "la planilla donde se gestiona toda la academia".
 * Estructura calcada de planillas reales de academias; los datos son inventados.
 * Los vicios están puestos a propósito: son los que la sala reconoce.
 */

type Cell = { v: string; cls?: string };

const H = ["", "APELLIDO Y NOMBRE", "curso", "Dia", "HORARIO", "prof", "Tel", "cuota",
  "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "sept", "OBS", "ver"];

const amarillo = "bg-[#FFF2A8] text-[#1a1a1a]";
const rojo = "text-[#C0392B] font-semibold";
const verde = "bg-[#C6E7C6] text-[#1a1a1a]";
const gris = "text-[#999]";

const R: Cell[][] = [
  [{v:"1"},{v:"CORONEL, Milagros"},{v:"Kids 1"},{v:"Mar"},{v:"17:30"},{v:"Laura"},{v:"11-6951-4409"},{v:"68000"},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"DEBE",cls:rojo},{v:"hna de Renata"},{v:""}],
  [{v:"2"},{v:"coronel renata"},{v:"Kids 1"},{v:"Mar"},{v:"17:30"},{v:"Laura"},{v:"same"},{v:"57800",cls:verde},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"15% hnos"},{v:""}],
  [{v:"3"},{v:"Ortiz Rocío"},{v:"Kids 1"},{v:"Mar"},{v:"17.30"},{v:"L"},{v:"11-6630-2793"},{v:"$68.000"},
   {v:"ok"},{v:"pagó 15/4"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"-"},{v:""},{v:"x",cls:rojo}],
  [{v:"4"},{v:"SOSA, Alma"},{v:"Kids1"},{v:"martes"},{v:"17:30"},{v:"Laura"},{v:"1168104197"},{v:"68000"},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:""},{v:""}],
  [{v:"5"},{v:"Sosa Valentin"},{v:"Kids 1"},{v:"Mar"},{v:"17:30"},{v:"Laura"},{v:""},{v:"68000"},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"hno"},{v:""}],
  [{v:"6"},{v:"LEDESMA, Dante"},{v:""},{v:"Jue"},{v:"17:30"},{v:"Laura"},{v:"11-4520-7781"},{v:"?",cls:amarillo},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"CONSULTAR",cls:amarillo},{v:"!",cls:rojo}],
  [{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""},{v:""}],
  [{v:"8"},{v:"Lucero, Máximo",cls:"line-through "+gris},{v:"Teens 1",cls:gris},{v:"Mar/Jue",cls:gris},{v:"18:00",cls:gris},
   {v:"Sofía",cls:gris},{v:"11-5001-2288",cls:gris},{v:"84000",cls:gris},
   {v:"ok",cls:gris},{v:"ok",cls:gris},{v:"ok",cls:gris},{v:"-",cls:gris},{v:"-",cls:gris},{v:"-",cls:gris},{v:"-",cls:gris},
   {v:"no viene más?",cls:amarillo},{v:""}],
  [{v:"9"},{v:"VELASQUEZ julia"},{v:"Teens 1"},{v:"Mar/Jue"},{v:"18 a 19.30"},{v:"Sofia"},{v:"11-4523-9876"},{v:"84000"},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:""},{v:""}],
  [{v:"10"},{v:"Olivera, Dante"},{v:"Teens 1"},{v:"Mar/Jue"},{v:"18:00"},{v:"Sofía"},{v:"11-6045-1193"},{v:"84000"},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"prom 8,43"},{v:""}],
  [{v:"11"},{v:"HERRERA gaspar"},{v:"Teens 1"},{v:"Mar/Jue"},{v:"18:00"},{v:"Sofía"},{v:"11-3390-4412"},{v:"75.600",cls:verde},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"pago anual"},{v:""}],
  [{v:"12"},{v:"Salas, Sofia"},{v:"B2 + CONV",cls:amarillo},{v:"Mar/Jue"},{v:"20:00"},{v:"Gastón"},{v:"11-2287-5510"},{v:"92000 + 56000",cls:amarillo},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"DEBE",cls:rojo},{v:"DEBE",cls:rojo},{v:"DEBE",cls:rojo},{v:"DEBE",cls:rojo},
   {v:"está en 2 cursos??",cls:amarillo},{v:"!!",cls:rojo}],
  [{v:"13"},{v:"MOLINA, Luca"},{v:"A2 Adultos"},{v:"Lun/Mié"},{v:"19:30"},{v:"Carla"},{v:"11-7781-0034"},{v:"92000"},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"baja 14/7 ??",cls:amarillo},{v:""}],
  [{v:"14"},{v:"sarmiento ana"},{v:"A1"},{v:"Mar/Jue"},{v:"10:00"},{v:"Carla"},{v:"11-2290-3345"},{v:"",cls:amarillo},
   {v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"ok"},{v:"FALTA CARGAR",cls:amarillo},{v:"!",cls:rojo}],
];

const SOLAPAS = ["Alumnos", "alumnos 2025", "Copia de Alumnos", "PAGOS", "horarios", "NO TOCAR", "Hoja1"];

const Planilla = ({ className = "" }: { className?: string }) => (
  <div className={`overflow-hidden rounded-[8px] border border-[#3a3a3a] bg-white font-sans ${className}`}>
    {/* barra de fórmulas simplificada */}
    <div className="flex items-center gap-3 border-b border-[#d0d0d0] bg-[#f3f3f3] px-4 py-[10px]">
      <span className="rounded border border-[#c6c6c6] bg-white px-3 py-[3px] text-[15px] text-[#333]">B12</span>
      <span className="text-[15px] text-[#777]">fx</span>
      <span className="text-[15px] text-[#333]">Salas, Sofia</span>
    </div>

    {/* encabezado amarillo de la planilla */}
    <div className="border-b border-[#d0d0d0] bg-[#FFF2A8] px-4 py-[9px] text-[17px] font-bold tracking-wide text-[#1a1a1a]">
      ALUMNOS 2026 — ACTUALIZADO (no borrar filas!!)
    </div>

    <table className="w-full border-collapse text-[15px] text-[#1a1a1a]">
      <thead>
        <tr className="bg-[#e8e8e8]">
          {H.map((h, k) => (
            <th
              key={k}
              className={`border border-[#c6c6c6] px-[9px] py-[7px] text-left font-semibold ${
                k === 0 ? "w-[42px] text-center text-[#777]" : ""
              } ${k === 1 ? "w-[230px]" : ""} ${k >= 8 && k <= 14 ? "w-[78px] text-center" : ""}`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {R.map((row, r) => (
          <tr key={r} className={row[1].v === "" ? "h-[30px]" : ""}>
            {row.map((c, k) => (
              <td
                key={k}
                className={`border border-[#d8d8d8] px-[9px] py-[6px] ${
                  k === 0 ? "bg-[#e8e8e8] text-center text-[#777]" : ""
                } ${k >= 8 && k <= 14 ? "text-center" : ""} ${c.cls ?? ""}`}
              >
                {c.v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    {/* solapas */}
    <div className="flex items-stretch gap-[2px] border-t border-[#c6c6c6] bg-[#f3f3f3] px-3 pt-[6px]">
      {SOLAPAS.map((s, k) => (
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

export default Planilla;
