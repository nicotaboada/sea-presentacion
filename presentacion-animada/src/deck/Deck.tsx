import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, StickyNote, Printer, LayoutGrid, Maximize2, Zap, ZapOff } from "lucide-react";
import { slides } from "./slides";
import { BLOQUES, BarraSuperior, Progreso, Resplandor, bloqueDe } from "./Marco";

const W = 1920;
const H = 1080;

/* ---------------------------------------------------------------- transición */

const SUAVE = [0.22, 1, 0.36, 1] as const;

/**
 * La placa que entra viene del lado hacia el que estás yendo, desenfocada y un
 * poco más chica. La que sale se va para el otro lado. El desenfoque es lo que
 * hace que no parezca un carrusel.
 */
const placa = {
  entra: (d: number) => ({
    opacity: 0,
    x: d >= 0 ? 120 : -120,
    scale: 0.975,
    filter: "blur(14px)",
  }),
  centro: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: SUAVE },
  },
  sale: (d: number) => ({
    opacity: 0,
    x: d >= 0 ? -120 : 120,
    scale: 0.975,
    filter: "blur(14px)",
    transition: { duration: 0.36, ease: [0.4, 0, 1, 1] as const },
  }),
};

/** Modo sobrio (tecla R): por si la máquina de la sala no da. */
const sinGracia = {
  entra: { opacity: 0 },
  centro: { opacity: 1, transition: { duration: 0.12 } },
  sale: { opacity: 0, transition: { duration: 0.1 } },
};

/* ---------------------------------------------------------------- deck */

const Deck = () => {
  /**
   * La placa actual y la dirección van juntas en un solo estado a propósito:
   * la dirección solo tiene sentido respecto del salto que la produjo, y
   * separarlas obliga a actualizar una desde el updater de la otra, que en
   * StrictMode se ejecuta dos veces.
   */
  const [{ i, dir }, setPos] = useState(() => {
    const h = parseInt(window.location.hash.replace("#", ""), 10);
    const n = Number.isFinite(h) && h >= 1 ? Math.min(h - 1, slides.length - 1) : 0;
    return { i: n, dir: 1 };
  });
  const [notes, setNotes] = useState(false);
  const [grid, setGrid] = useState(false);
  const [limpio, setLimpio] = useState(false);
  const [animar, setAnimar] = useState(true);
  const [scale, setScale] = useState(1);
  const box = useRef<HTMLDivElement>(null);

  const go = useCallback((d: number) => {
    setPos((p) => {
      const n = Math.min(slides.length - 1, Math.max(0, p.i + d));
      return n === p.i ? p : { i: n, dir: d };
    });
  }, []);

  const saltarA = useCallback((k: number) => {
    setPos((p) => (k === p.i ? p : { i: k, dir: k > p.i ? 1 : -1 }));
  }, []);

  useLayoutEffect(() => {
    const fit = () => {
      const el = box.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / W, height / H));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [notes, grid, limpio]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Si te quedás apretando la flecha, el teclado dispara auto-repetición y
      // te comés veinte placas. Una pulsación, una placa.
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (k === "n") setNotes((v) => !v);
      else if (k === "g") setGrid((v) => !v);
      else if (k === "f") setLimpio((v) => !v);
      else if (k === "r") setAnimar((v) => !v);
      else if (e.key === "Escape") setLimpio(false);
      else if (e.key === "Home") saltarA(0);
      else if (e.key === "End") saltarA(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, saltarA]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${i + 1}`);
  }, [i]);

  const s = slides[i];
  const bloque = bloqueDe(i);
  const bloqueIdx = BLOQUES.indexOf(bloque);
  const variantes = animar ? placa : sinGracia;

  /* ---------- vista de contactos ---------- */
  if (grid) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="deck-chrome mb-6 flex items-center justify-between">
          <h1 className="font-heading text-xl font-bold text-foreground">
            IA aplicada a la gestión de la academia
          </h1>
          <button
            onClick={() => setGrid(false)}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Cerrar (G)
          </button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((sl, k) => (
            <button
              key={k}
              onClick={() => {
                saltarA(k);
                setGrid(false);
              }}
              className="group text-left"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border transition-colors group-hover:border-foreground/40">
                <div className="deck-stage absolute left-0 top-0" style={{ transform: `scale(${1 / 5.6})` }}>
                  <div style={{ width: W, height: H }}>{sl.el}</div>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                <span className="font-heading font-bold text-foreground">
                  {String(k + 1).padStart(2, "0")}
                </span>{" "}
                {sl.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ---------- vista de presentación ---------- */
  return (
    <div className="flex h-screen flex-col bg-background">
      <div ref={box} className="relative flex-1 overflow-hidden">
        <div
          className="deck-stage absolute left-1/2 top-1/2 overflow-hidden"
          style={{
            transform: `translate(-50%,-50%) scale(${scale})`,
            width: W,
            height: H,
            transformOrigin: "center",
          }}
        >
          <Resplandor bloqueIdx={bloqueIdx} />

          <AnimatePresence custom={dir} initial={false}>
            <motion.div
              key={i}
              custom={dir}
              variants={variantes}
              initial="entra"
              animate="centro"
              exit="sale"
              className="absolute inset-0 z-10"
            >
              <div className={animar ? "escena h-full w-full" : "h-full w-full"}>{s.el}</div>
            </motion.div>
          </AnimatePresence>

          <BarraSuperior i={i} total={slides.length} bloque={bloque.nombre} />
          <Progreso i={i} total={slides.length} />
        </div>
      </div>

      {notes && (
        <div className="deck-chrome max-h-[30vh] overflow-y-auto border-t border-border bg-[hsla(0,0%,100%,0.03)] px-8 py-5">
          <p className="mb-2 font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {s.title} {s.min && `· ${s.min}`}
          </p>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-foreground/90">{s.notes}</p>
        </div>
      )}

      {!limpio && (
        <div className="deck-chrome flex items-center justify-between border-t border-border px-6 py-3">
          <div className="flex items-center gap-2">
            <button onClick={() => go(-1)} className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => go(1)} className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="ml-2 font-heading text-sm font-bold tabular-nums text-foreground">
              {String(i + 1).padStart(2, "0")}
              <span className="font-normal text-muted-foreground">/{slides.length}</span>
            </span>
            <span className="ml-3 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground/60">
              {bloque.nombre}
            </span>
            <span className="ml-3 text-sm text-muted-foreground">{s.title}</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setAnimar((v) => !v)} title="Animaciones (R)" className={`rounded-md p-2 hover:bg-secondary ${animar ? "text-foreground" : "text-muted-foreground"}`}>
              {animar ? <Zap className="h-4 w-4" /> : <ZapOff className="h-4 w-4" />}
            </button>
            <button onClick={() => setLimpio(true)} title="Modo limpio (F · Esc para volver)" className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
              <Maximize2 className="h-4 w-4" />
            </button>
            <button onClick={() => setGrid(true)} title="Vista general (G)" className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button onClick={() => setNotes((v) => !v)} title="Guion (N)" className={`rounded-md p-2 hover:bg-secondary ${notes ? "text-foreground" : "text-muted-foreground"}`}>
              <StickyNote className="h-4 w-4" />
            </button>
            <button onClick={() => window.print()} title="Exportar PDF" className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
              <Printer className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Todas las placas, solo para imprimir */}
      <div className="hidden print:block">
        {slides.map((sl, k) => (
          <div key={k} className="deck-print-page">
            {sl.el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deck;
