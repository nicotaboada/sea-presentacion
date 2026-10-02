/**
 * El mapa de lo que queda de hora. A partir de acá la estructura es visible:
 * la sala siempre sabe en qué paso está.
 * El punto de la placa no son los cuatro nombres — es la barra: dos de los
 * cuatro pasos no tienen nada de IA.
 */

const PASOS: [string, string, string][] = [
  ["01", "Mapear", "Qué trabajo repetitivo se puede sacar de encima."],
  ["02", "Enseñar", "Cargarle cómo funciona tu academia."],
  ["03", "Usar", "Preguntarle, y pedirle trabajo terminado."],
  ["04", "Sistematizar", "Convertirlo en rutina, con responsable."],
];

const ORO = "#E8D36A";


const Metodo = () => (
  <div className="flex h-full flex-col justify-center px-[58px]">
    <p className="mb-[52px] font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
      El método
    </p>

    <div className="grid grid-cols-4 gap-[28px]">
      {PASOS.map(([n, nom, desc]) => (
        <div
          key={n}
          className="rounded-[14px] border border-[hsla(0,0%,100%,0.20)] bg-[hsla(0,0%,100%,0.055)] px-[34px] pb-[38px] pt-[30px]"
        >
          <p className="font-heading text-[26px] font-bold tracking-[0.06em] text-muted-foreground/55">
            {n}
          </p>
          <h3 className="mt-[20px] font-heading text-[54px] font-bold leading-none tracking-[-0.025em] text-foreground">
            {nom}
          </h3>
          <p className="mt-[22px] text-[29px] leading-[1.35] text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>

    {/* la barra: el argumento entero de la placa */}
    <div className="mt-[26px] grid grid-cols-4 gap-[28px]">
      <p className="pt-[18px] text-center text-[25px] text-muted-foreground/45">Lo hacés vos</p>
      <div
        className="col-span-2 rounded-[10px] border py-[18px] text-center"
        style={{ borderColor: "rgba(232,211,106,0.45)", backgroundColor: "rgba(232,211,106,0.07)" }}
      >
        <p className="font-heading text-[27px] font-bold tracking-[0.02em]" style={{ color: ORO }}>
          Acá entra la IA
        </p>
      </div>
      <p className="pt-[18px] text-center text-[25px] text-muted-foreground/45">Lo hacés vos</p>
    </div>

  </div>
);

export default Metodo;
