import type { ReactNode } from "react";

/** Una placa de 1920×1080. El escalado lo hace Deck. */
const Slide = ({
  children,
  className = "",
  pad = true,
}: {
  children: ReactNode;
  className?: string;
  pad?: boolean;
}) => (
  <div
    className={`noise-overlay relative h-[1080px] w-[1920px] overflow-hidden bg-background ${
      pad ? "flex flex-col justify-center px-[150px] py-[130px]" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default Slide;

/** Marcador de paso — a partir de la placa del método la estructura es visible. */
export const Paso = ({ n, nombre }: { n: string; nombre: string }) => (
  <p className="font-heading text-[26px] font-bold uppercase tracking-[0.18em] text-muted-foreground/55">
    Paso {n} <span className="text-muted-foreground/30">·</span>{" "}
    <span className="text-muted-foreground">{nombre}</span>
  </p>
);

/** Encabezado de placa de bloque: marcador de paso + título. */
export const EncabezadoPaso = ({
  n,
  nombre,
  titulo,
}: {
  n: string;
  nombre: string;
  titulo: string;
}) => (
  <>
    <Paso n={n} nombre={nombre} />
    <h2 className="mb-[50px] mt-[26px] font-heading text-[76px] font-bold leading-none tracking-[-0.03em] text-foreground">
      {titulo}
    </h2>
  </>
);
