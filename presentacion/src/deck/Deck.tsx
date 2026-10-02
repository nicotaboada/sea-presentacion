import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, StickyNote, Printer, LayoutGrid } from "lucide-react";
import { slides } from "./slides";

const W = 1920;
const H = 1080;

const Deck = () => {
  const [i, setI] = useState(() => {
    const h = parseInt(window.location.hash.replace("#", ""), 10);
    return Number.isFinite(h) && h >= 1 ? Math.min(h - 1, slides.length - 1) : 0;
  });
  const [notes, setNotes] = useState(false);
  const [grid, setGrid] = useState(false);
  const [scale, setScale] = useState(1);
  const box = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (d: number) => setI((v) => Math.min(slides.length - 1, Math.max(0, v + d))),
    []
  );

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
  }, [notes, grid]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key.toLowerCase() === "n") setNotes((v) => !v);
      else if (e.key.toLowerCase() === "g") setGrid((v) => !v);
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${i + 1}`);
  }, [i]);

  const s = slides[i];

  /* ---------- vista de contactos (grilla) ---------- */
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
                setI(k);
                setGrid(false);
              }}
              className="group text-left"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border transition-colors group-hover:border-foreground/40">
                <div
                  className="deck-stage absolute left-0 top-0"
                  style={{ transform: `scale(${1 / 5.6})` }}
                >
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
          className="deck-stage absolute left-1/2 top-1/2"
          style={{ transform: `translate(-50%,-50%) scale(${scale})`, width: W, height: H, transformOrigin: "center" }}
        >
          {s.el}
        </div>
      </div>

      {notes && (
        <div className="deck-chrome max-h-[30vh] overflow-y-auto border-t border-border bg-[hsla(0,0%,100%,0.03)] px-8 py-5">
          <p className="mb-2 font-heading text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {s.title} {s.min && `· ${s.min}`}
          </p>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-foreground/90">
            {s.notes}
          </p>
        </div>
      )}

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
          <span className="ml-3 text-sm text-muted-foreground">{s.title}</span>
        </div>
        <div className="flex items-center gap-1">
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
