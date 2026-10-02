/**
 * Portada de cada paso del método.
 *
 * Hace dos cosas: orienta —la sala sabe en cuál de los cuatro está— y repite el método
 * cuatro veces más sin volver a mostrar la placa completa. El método es lo que se llevan,
 * y se lleva mejor si lo ven cinco veces que si lo ven una.
 */

const PASOS: [string, string, string][] = [
  ["01", "Mapear", "Qué trabajo repetitivo se puede sacar de encima."],
  ["02", "Enseñar", "Cargarle cómo funciona tu academia."],
  ["03", "Usar", "Preguntarle, y pedirle trabajo terminado."],
  ["04", "Sistematizar", "Convertirlo en rutina, con responsable."],
];

const ORO = "#E8D36A";

const PortadaPaso = ({ n }: { n: "01" | "02" | "03" | "04" }) => {
  const i = PASOS.findIndex(([num]) => num === n);
  const [, nombre, bajada] = PASOS[i];
  const conIA = i === 1 || i === 2;

  return (
    <div className="flex h-full flex-col justify-center px-[120px]">
      {/* el recorrido, con el paso actual encendido */}
      <div className="mb-[92px] flex items-center gap-[22px]">
        {PASOS.map(([num, nom], k) => (
          <div key={num} className="flex items-center gap-[22px]">
            <span
              className={`font-heading text-[27px] font-bold uppercase tracking-[0.16em] ${
                k === i ? "text-foreground" : "text-muted-foreground/25"
              }`}
            >
              {nom}
            </span>
            {k < 3 && (
              <span className="text-[24px] text-muted-foreground/15">·</span>
            )}
          </div>
        ))}
      </div>

      <p
        className="font-heading text-[40px] font-bold tracking-[0.08em]"
        style={{ color: conIA ? ORO : "hsla(0,0%,100%,0.28)" }}
      >
        {n}
      </p>

      <h2 className="mt-[24px] font-heading text-[148px] font-bold leading-none tracking-[-0.035em] text-foreground">
        {nombre}
      </h2>

      <p className="mt-[46px] max-w-[26ch] text-[48px] leading-[1.3] text-muted-foreground">
        {bajada}
      </p>

      {!conIA && (
        <p className="mt-[52px] text-[32px] text-muted-foreground/45">
          Este paso lo hacés vos. Sin IA.
        </p>
      )}
    </div>
  );
};

export default PortadaPaso;
