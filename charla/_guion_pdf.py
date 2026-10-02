#!/usr/bin/env python3
"""
Genera guion.pdf a partir de guion.md.

Dos diferencias con el PDF de la guía, y las dos son porque esto se lee de pie:
cuerpo más grande, y corte de página antes de cada bloque para no dar vuelta
la hoja en la mitad de una placa.
"""
import re, subprocess, sys
from pathlib import Path

AQUI = Path(__file__).parent
sys.path.insert(0, str(AQUI.parent / "academia-ficticia"))
import _convertir as C  # noqa: E402

CSS = """
@page { size: A4; margin: 13mm 13mm; }
body { font: 10.5pt/1.38 -apple-system, 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; }
h1 { font-size: 15pt; margin: 18px 0 10px; padding: 6px 0 6px 10px;
     background: #1a1a1a; color: #fff; page-break-after: avoid; }
h2 { font-size: 12pt; margin: 14px 0 5px; border-bottom: 1.5px solid #1a1a1a;
     padding-bottom: 3px; page-break-after: avoid; }
h3 { font-size: 11pt; margin: 12px 0 4px; color: #333; page-break-after: avoid; }
p  { margin: 0 0 5px; }
ul { margin: 0 0 7px 17px; padding: 0; }
li { margin-bottom: 3px; page-break-inside: avoid; }
strong { font-weight: 700; }
em { color: #666; }
hr { border: 0; border-top: 1px solid #ccc; margin: 11px 0; }
code { background: #eee; padding: 1px 4px; border-radius: 3px; font-size: 9.5pt; }
"""


def preparar(md: str) -> str:
    """El conversor no sabe de listas numeradas: las paso a viñetas conservando el número."""
    return re.sub(r"^(\d+)\.\s+(.*)$", r"- **\1.** \2", md, flags=re.M)


def main() -> None:
    md = preparar((AQUI / "guion.md").read_text(encoding="utf-8"))
    html = C.md_a_html(md, "Guion · Congreso SEA").replace(C.CSS, CSS)
    tmp = AQUI / ".guion.html"
    tmp.write_text(html, encoding="utf-8")
    destino = AQUI / "guion.pdf"
    subprocess.run(
        [C.CHROME, "--headless", "--disable-gpu", "--no-pdf-header-footer",
         f"--print-to-pdf={destino}", f"file://{tmp}"],
        check=True, capture_output=True)
    tmp.unlink()
    print(f"guion.pdf · {destino.stat().st_size // 1024} KB")


main()
