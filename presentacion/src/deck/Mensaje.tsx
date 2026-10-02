/**
 * El mensaje de reinscripción de Dante Olivera (legajo 0407).
 *
 * NO está en el deck ahora mismo. Sale del bloque de apertura a propósito: gastarlo en
 * el minuto doce quema el remate. Su lugar es el final, como salida de la demo 4
 * (reinscripción 2027), cerrando el círculo con la escena a oscuras del minuto uno.
 *
 * <Dante on={false} /> = sin resaltar · <Dante on={true} /> = con los datos en negrita.
 */

const Dante = ({ on }: { on: boolean }) => {
  const k = on ? "font-bold text-foreground" : "";
  return (
    <div className="mx-auto w-[1360px] rounded-2xl border border-[hsla(0,0%,100%,0.08)] bg-[hsla(0,0%,100%,0.03)] px-[72px] py-[64px] text-[40px] leading-[1.62] text-muted-foreground">
      <p className="mb-[1.2em]">Hola Isabella, ¿cómo estás?</p>
      <p className="mb-[1.2em]">
        Te escribo porque Dante termina <span className={k}>Teens 1</span> este año con muy buen
        desempeño: promedio 8,43 y 91% de asistencia.
      </p>
      <p className="mb-[1.2em]">
        Ya tiene su vacante reservada en <span className={k}>Teens 2</span>, que el año que viene va{" "}
        <span className={k}>lunes y miércoles de 18:00 a 19:30</span>, en la sede de Vicente López,
        con <span className={k}>Julián Recalde</span>.
      </p>
      <p className="mb-[1.2em]">
        La matrícula de reinscripción es de <span className={k}>$30.000 —en lugar de $42.000—</span>{" "}
        y el arancel mensual queda en $84.000. Si confirmás antes del{" "}
        <span className={k}>30 de noviembre</span> mantenés la bonificación por reinscripción
        temprana.
      </p>
      <p>¿Te reservo el lugar?</p>
    </div>
  );
};

export default Dante;
