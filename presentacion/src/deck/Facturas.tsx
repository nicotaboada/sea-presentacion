/**
 * La emisión de comprobantes, una por una.
 * El formulario es siempre el mismo: lo único que cambia es el receptor.
 * Alumnos de ING-T1-N-T (Teens 1) — todos con el mismo arancel, para que se vea
 * que entre un comprobante y el siguiente no cambia nada más que el nombre.
 */

const RECEPTORES: [string, string][] = [
  ["45.203.117", "Barrios, Rodrigo"],
  ["45.611.480", "Velázquez, Julia"],
  ["45.077.932", "Olivera, Dante"],
  ["44.980.265", "Herrera, Gaspar"],
];

const AZUL = "#2C5F8D";
const CAMBIA = "bg-[#FFF2A8] text-[#1a1a1a]";

const Campo = ({
  rotulo,
  valor,
  cambia = false,
}: {
  rotulo: string;
  valor: string;
  cambia?: boolean;
}) => (
  <div className="flex items-baseline gap-[12px] py-[7px]">
    <span className="w-[176px] shrink-0 text-right text-[15px] text-[#5a6570]">{rotulo}</span>
    <span
      className={`min-w-0 flex-1 truncate rounded-[3px] border border-[#c9d2da] px-[10px] py-[6px] text-[17px] ${
        cambia ? CAMBIA : "bg-[#fbfcfd] text-[#1a1a1a]"
      }`}
    >
      {valor}
    </span>
  </div>
);

const Separador = ({ children }: { children: string }) => (
  <p className="mb-[4px] mt-[16px] border-b border-[#dfe5ea] pb-[6px] text-[13px] font-bold uppercase tracking-[0.13em] text-[#8b959e]">
    {children}
  </p>
);

const Comprobante = ({ doc, nombre }: { doc: string; nombre: string }) => (
  <div className="w-[500px] shrink-0 overflow-hidden rounded-[7px] border border-[#b9c3cc] bg-white font-sans shadow-[0_30px_64px_-20px_rgba(0,0,0,0.75)]">
    <div
      className="flex items-center justify-between px-[18px] py-[12px] text-white"
      style={{ backgroundColor: AZUL }}
    >
      <span className="text-[17px] font-bold tracking-[0.01em]">Comprobantes en línea</span>
      <span className="text-[13px] opacity-80">Paso 3 de 4</span>
    </div>

    <div className="px-[20px] pb-[18px] pt-[12px]">
      <Separador>Comprobante</Separador>
      <Campo rotulo="Tipo" valor="Factura C" />
      <Campo rotulo="Punto de venta" valor="0003" />
      <Campo rotulo="Fecha de emisión" valor="01/09/2026" />
      <Campo rotulo="Concepto" valor="Servicios" />
      <Campo rotulo="Período facturado" valor="01/09 al 30/09/2026" />

      <Separador>Receptor</Separador>
      <Campo rotulo="DNI" valor={doc} cambia />
      <Campo rotulo="Apellido y nombre" valor={nombre} cambia />
      <Campo rotulo="Condición IVA" valor="Consumidor Final" />

      <Separador>Detalle</Separador>
      <Campo rotulo="Descripción" valor="Curso de inglés — Teens 1" />
      <Campo rotulo="Importe" valor="$ 84.000,00" />

      <div className="mt-[18px] flex justify-end">
        <span
          className="rounded-[4px] px-[26px] py-[9px] text-[16px] font-semibold text-white"
          style={{ backgroundColor: AZUL }}
        >
          Continuar
        </span>
      </div>
    </div>
  </div>
);

const Facturas = () => (
  <div className="flex h-full flex-col justify-center">
    <p className="mb-[46px] text-center font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
      Una por una
    </p>

    {/* la cuarta queda cortada: el bucle no termina en la placa */}
    <div className="flex gap-[34px] overflow-hidden pl-[58px]">
      {RECEPTORES.map(([doc, nombre], k) => (
        <div key={doc} style={{ opacity: [1, 0.84, 0.6, 0.34][k] }}>
          <Comprobante doc={doc} nombre={nombre} />
        </div>
      ))}
    </div>
  </div>
);

export default Facturas;
