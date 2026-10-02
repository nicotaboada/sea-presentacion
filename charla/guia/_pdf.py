#!/usr/bin/env python3
"""Genera guia.pdf a partir de guia.md. Reutiliza el conversor de academia-ficticia."""
import subprocess, sys
from pathlib import Path

AQUI = Path(__file__).parent
sys.path.insert(0, str(AQUI.parent.parent / "academia-ficticia"))
import _convertir as C  # noqa: E402

CSS = C.CSS.replace(
    "@page { size: A4; margin: 20mm 18mm; }",
    "@page { size: A4; margin: 22mm 20mm; }",
).replace(
    "h1 { font-size: 19pt; margin: 0 0 4px; }",
    "h1 { font-size: 26pt; margin: 0 0 10px; line-height: 1.15; }",
).replace(
    "h2 { font-size: 14pt; margin: 22px 0 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }",
    "h2 { font-size: 16pt; margin: 30px 0 10px; border-bottom: 2px solid #1a1a1a; padding-bottom: 6px; }",
) + """
blockquote { margin: 14px 0; padding: 12px 18px; background: #f4f6f8;
             border-left: 3px solid #1a1a1a; font-size: 11.5pt; }
blockquote p { margin: 0; }
pre { background: #1a1a1a; color: #f0f0f0; padding: 14px 16px; border-radius: 6px;
      font-size: 10pt; line-height: 1.5; white-space: pre-wrap; margin: 10px 0 16px; }
"""

def main():
    md = (AQUI / "guia.md").read_text(encoding="utf-8")
    html = C.md_a_html(md, "Guía · IA aplicada a la gestión de la academia")
    html = html.replace(C.CSS, CSS)
    # bloques de código
    out, dentro, buf = [], False, []
    for ln in html.split("\n"):
        out.append(ln)
    tmp = AQUI / ".guia.html"
    tmp.write_text("\n".join(out), encoding="utf-8")
    subprocess.run(
        [C.CHROME, "--headless", "--disable-gpu", "--no-pdf-header-footer",
         f"--print-to-pdf={AQUI/'guia.pdf'}", f"file://{tmp}"],
        check=True, capture_output=True)
    tmp.unlink()
    print(f"guia.pdf · {(AQUI/'guia.pdf').stat().st_size//1024} KB")

main()
