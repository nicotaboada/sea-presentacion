# Clave de la demo — NO SUBIR A LA IA

El machete tuyo: qué está plantado en los datos y qué tiene que encontrar cada caso.
Si lo cargás junto con el resto, le estás dando las respuestas.

**Lo que sí se carga:** todo `academia-ficticia/documentos/` y `academia-ficticia/planillas/`.

---

## Instituto Alborada — de un vistazo

173 filas de alumnos (165 activos o congelados, 8 bajas), dos sedes, inglés y portugués,
21 comisiones, 8 docentes. Cuotas de marzo a septiembre de 2026 cargadas (1.363 movimientos).
Cierre de notas el 26/10, informes el 2/11, reinscripción 2027 abre el 3/11.

---

## Caso 1 · Auditoría de la planilla

| Hallazgo | Dónde |
|---|---|
| Misma persona con dos legajos | 0400 y 0471 (Aguirre, Pilar) · 0373 y 0472 (Maldonado, Manuela) |
| Alumna en dos comisiones **y facturada dos veces** | 0454 Salas, Sofía — ING-B2-N-N + ING-CONV |
| Sin plan ni arancel asignado | 0318 Ledesma, Dante · 0385 Sarmiento, Ana |
| Descuento de hermanos sin hermano registrado | 0415 Pérez, Gaspar |
| Fecha de baja cargada pero estado "activo" | 0456 Molina, Luca |
| Activos sin pagos desde mayo (baja no registrada) | 0328 Lucero · 0376 Acosta · 0383 Mercado · 0389 Figueroa |
| Pago de un legajo que no existe | 0999 |
| Cuota de septiembre con el arancel del trimestre anterior | 0307 · 0339 · 0393 · 0414 · 0465 |
| Comisiones por debajo del mínimo de 6 (art. 5.1) | ING-K2-T (3) · POR-B1-N (4) · ING-C1-N (5) |
| Comisión por encima del cupo de 12 (art. 5.3) | ING-CONV (13) — consecuencia de la doble inscripción |
| Docente con dos comisiones el mismo día y horario | Renata Lima — POR-B1-N (Mar y Jue 19:00) y POR-A1-N-N (Mar y Jue 19:30) |

## Caso 2 · Contradicciones entre documentos

| Tema | Reglamento | Acuerdo de inscripción | Instructivo |
|---|---|---|---|
| Asistencia mínima | 75% | 70% | 70% |
| Aviso de baja | 30 días | 15 días | — |
| Reintegro de matrícula | No reintegrable | 50% dentro de 10 días | — |
| Aviso de aumento de aranceles | 30 días | 15 días | — |

El instructivo además está fechado en **agosto de 2025**: está desactualizado.

**Y la contradicción cuesta plata.** Cinco alumnos con buen promedio y asistencia entre 71% y 74%:

| Legajo | Alumno | Promedio | Asistencia | Comisión |
|---|---|---|---|---|
| 0359 | Lamas, Camila | 8,47 | 73,2% | ING-C1-N |
| 0429 | Chaves, Isabella | 7,83 | 71,4% | ING-A2-N-N |
| 0438 | Godoy, Guadalupe | 8,73 | 73,2% | ING-A2-N-N |
| 0444 | Galván, Isabella | 9,17 | 71,4% | ING-B1-N-N |
| 0466 | Pérez, Valentina | 9,03 | 73,2% | POR-A1-N-N |

Según el reglamento recursan. Según el acuerdo que firmó la familia, promocionan.

## Caso 3 · El caso concreto

*"Una familia pide la baja el 20 de octubre y tiene una cuota impaga. ¿Qué corresponde?"*
Tiene que citar 4.1 (30 días de aviso, el arancel se devenga hasta el registro), 2.4 (dos cuotas
impagas bloquean evaluaciones), 2.5 (no se emiten certificados con deuda) — y señalar que el
acuerdo firmado dice 15 días, no 30.

## Caso 4 · Las tres preguntas

- **Rentabilidad por comisión:** las tres flacas son ING-K2-T (3 × 68.000), POR-B1-N (4 × 88.000)
  y ING-C1-N (5 × 92.000). Las de adultos de la noche sostienen la academia.
- **Deserción por franja:** las 8 bajas y los 4 fantasmas se concentran en turno mañana y en Kids.
- **Reinscripción histórica:** se calcula sobre `antiguedad_anios` contra las bajas.

## Caso 5 · Cobranza

19 alumnos con deuda: 6 con una cuota, 5 con dos, 3 con tres, 4 con cuatro (los fantasmas), más
0454 con 8 por la doble facturación. El tono tiene que variar según cuántas cuotas debe y según
`antiguedad_anios` — hay morosos de 1 año y morosos de 5. El instructivo prohíbe reclamar los
fines de semana y después de las 20 h.

## Caso 6 · Reinscripción 2027

115 promocionan · 9 recuperatorio · 10 recursan · 5 a revisar por asistencia · 26 en cursos
complementarios sin promoción.

El rompecabezas que tiene que resolver:
- **La grilla 2026 no tiene Kids 3 ni Teens 3.** Los que promocionan de Kids 2 y Teens 2 no tienen
  a dónde ir: hay que abrir comisión.
- ING-K2-T, POR-B1-N e ING-C1-N no alcanzan el mínimo del art. 5.1: hay que reubicar a esos alumnos.
  Los de C1 están en el techo de la progresión, no tienen nivel siguiente.
- La matrícula de reinscripto es 30.000 contra 42.000 y 48.000 de uno nuevo, y la bonificación por
  reinscripción temprana vence el 30/11.
- Los mensajes van por familia, con nivel nuevo, comisión, horario, docente y arancel.

---

## Columnas de las planillas

**alumnos.csv** — legajo, apellido_y_nombre, fecha_nacimiento, edad, responsable, telefono, email,
sede, idioma, nivel, comision, docente, plan, arancel_mensual, descuento, estado, fecha_inscripcion,
fecha_baja, antiguedad_anios

**pagos.csv** — legajo, apellido_y_nombre, comision, periodo, concepto, vencimiento, importe,
recargo_mora, fecha_pago, medio, estado

**notas-y-asistencia.csv** — legajo, apellido_y_nombre, comision, idioma, nivel, docente, sede,
parcial_1, parcial_2, oral, promedio, clases_dictadas, ausencias, asistencia_pct,
resultado_preliminar, cuotas_impagas
