# Charla · Congreso SEA

"IA aplicada a la gestión de la academia" · USAL, 2 de octubre de 2026.
48 placas, para 40–45 minutos más 10 de preguntas.

## Qué hay acá

| | |
|---|---|
| `presentacion-animada/` | **El deck que se presenta.** Mismas placas que el otro, con animaciones. |
| `presentacion/` | El mismo deck sin animaciones. Es el plan B si la máquina de la sala no da. |
| `charla/` | El guion del orador, la guía que se regala, y `NOTAS.md` con las decisiones y por qué. |
| `academia-ficticia/` | Los datos del Instituto Alborada: planillas, reglamento, aranceles. De acá salen los tres casos. |

## Levantarlo

```bash
cd presentacion-animada
npm install
npm run dev        # http://localhost:8099
```

### Teclas

| | |
|---|---|
| `←` `→` · espacio | pasar de placa |
| `N` | guion del orador |
| `G` | vista general |
| `F` | modo limpio · `Esc` vuelve |
| `R` | **apagar las animaciones** |

`R` es el seguro: si la máquina de la sala se traba con el desenfoque, lo apretás y
todo pasa a aparecer sin transición. Conviene probarlo apenas se conecta el proyector.

## Los documentos

```bash
cd charla && python3 _guion_pdf.py          # el guion, para imprimir
cd charla/guia && python3 _pdf.py           # la guía que se regala
python3 academia-ficticia/_convertir.py     # los xlsx y pdf para cargar en un proyecto
```

Los PDF no están versionados: se generan con esos scripts.
