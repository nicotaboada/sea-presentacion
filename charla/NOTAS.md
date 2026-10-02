# Notas de armado — Charla SEA

Decisiones tomadas mientras revisamos placa por placa.
Última actualización: 28/09/2026

---

## Datos fijos

**Título:** IA aplicada a la gestión de la academia
**Bajada:** Cómo dejar de hacer a mano el trabajo repetitivo de la gestión. Qué se resuelve hoy, qué no, y por dónde empezar. *(cambiada el 29/09: "ahorrar tiempo" era tibio y "automatizar" sería falso.)*
**Cuándo:** viernes 2 de octubre de 2026 · Congreso SEA · USAL · 60 min
**Sala:** 40–80 dueños y coordinadores. Auditorio, sin computadoras.
**Eje del congreso donde encaja:** "Automatización de procesos" (uno de los ejes del programa, no el título de la charla).
**Lema del congreso:** "Liderar el Cambio y la Innovación: Personas, Profesionalización y Propósito".

---

## ESTA CHARLA NO VA DE AUTOMATIZAR

Se confundió dos veces mientras se armaba el deck, así que queda escrito grande:

**Va de dejar de hacer trabajo a mano.** "Automatización de procesos" es el eje del
programa donde encaja, no el tema. El tema es la bajada: ahorrar tiempo en las tareas
repetitivas de la gestión diaria.

Automatizar (que pase solo, sin que nadie lo dispare) es el **nivel tres**, y en esta
charla se muestra pero no se enseña. Todo lo que se enseña es el nivel del medio:
**asistido** — lo sigue ejecutando una persona, pero deja de hacerlo desde cero.

**Qué explica entonces la tesis "no sabe nada de tu academia":** por qué todos levantan la
mano en el sondeo 1 (escribir) y casi nadie en el sondeo 2 (gestionar). Escribir un mail
es genérico; la reinscripción de tu academia no lo es. **Eso es todo lo que tiene que
explicar.** No se la use para justificar nada sobre automatización.

Si lo preguntan desde la sala: *"que sepa de tu academia no automatiza nada por sí solo.
Pero sin eso no hay nada que automatizar: no vas a poner en piloto automático algo que te
devuelve una respuesta que hay que corregir entera."*

---

## La idea, en dos oraciones

> La IA no le sirve a tu academia porque no la conoce ni tiene contexto de ella. Enseñárselo lleva
> una tarde y no requiere comprar ni programar nada — y del otro lado hay unas ciento
> sesenta horas al año que hoy se hacen a mano.

**Frase repetible, tres veces en la hora:** "No conoce ni tiene contexto de tu academia." *(29/09: era "no sabe nada de tu academia".)*

---

## Decisiones de estructura

- **Abre con SITUACIONES reconocibles**, no con el resultado. La sala se tiene que ver
  a sí misma antes de ver nada de IA. *(decidido 27/09)*
- **La planilla desordenada va en el bloque de situaciones**, no de placa 1. *(decidido 27/09)*
- **El bloque de situaciones va entre la escena del 3 de noviembre y el mensaje de Dante.**
  Recién después aparece la IA. *(armado 27/09, ampliado 28/09)*
  Seis placas, en este orden: *(29/09: se sacó "lo que solo sabe quien la escribió" —
  las anotaciones al margen se señalan de boca sobre la placa de la planilla, no
  necesitan placa propia.)*
  1. La invitación a reconocerse ("¿algo de esto les suena?")
  2. La planilla desordenada — y ahí señalás dos o tres anotaciones al margen
  3. La doble carga (papel → alguien lo tipea → planilla)
  4. Las facturas (165 comprobantes, idénticos salvo el nombre)
  5. La consulta de la baja (doce fuentes desparramadas, dos que se contradicen)
  6. El cierre ("todo esto ya lo resuelven, a mano")
- **La escena del 3 de noviembre se queda en negro.** El hook de las situaciones va en su
  propia placa, después. Es una pregunta, no un anuncio del bloque. *(27/09)*
- **La consulta de la baja abre y cierra la charla como par largo.** El desparramo de las
  doce fuentes va en el bloque de problemas, como última situación; las mismas doce
  tarjetas reaparecen ordenadas veinte minutos después, en Enseñar. La distancia es a
  propósito: cuando vuelven, la sala las reconoce. *(28/09)*
- **El mensaje de Dante sale de la apertura y se muda al final.** *(28/09)* Estaba en el
  minuto doce y quemaba el remate: la sala veía el resultado antes de entender el método.
  Su lugar es la salida de la demo 4 (reinscripción), cerrando el círculo con la escena a
  oscuras del minuto uno. El componente quedó en `Mensaje.tsx`, fuera del deck.
- **Faltaba la bisagra.** Entre "no sabe nada de tu academia" y el método no había nada
  que conectara: la sala quedaba en que la IA no sirve y el método aparecía colgado. Se
  agregó **"Pero se le puede enseñar · sin comprar nada y sin programar nada"**, que da
  vuelta la hora y adelanta las dos objeciones. *(28/09)*
- **El reencuadre pasa DESPUÉS del método.** Antes era una afirmación que había que
  creerte; ahora es la conclusión de haber mostrado que dos de los cuatro pasos no tienen
  IA. *(28/09)*
- **Tres niveles se muda al paso 4 · Sistematizar.** Manual/asistido/automatizado es el eje
  de quién lo dispara, no el de qué sabe; antes del método obligaba a sostener dos ideas
  abstractas a la vez. Quedó al final del deck como recordatorio. *(28/09)*
- **"Todo junto" sale del deck** hasta que se construya el paso 2 · Enseñar, que es donde
  pertenece. Vive en `Fuentes.tsx`. *(28/09)*
- **La tesis se muestra antes de enunciarse.** *(29/09)* Se sacó "Lo que sabe hacer"
  (repetía los cuatro verbos de "La forma del trabajo" quince minutos después) y en su
  lugar va **"Las dos consultas"**, entre los sondeos y la tesis: a la izquierda el mail
  que sale bien, a la derecha una pregunta sobre la academia y la respuesta genérica
  —"por lo general", "suele ubicarse", "dependiendo de la institución"—. La sala VE el
  problema y recién después la tesis le pone nombre.
  **Conviene reemplazarla por dos capturas reales**: es una placa donde podrían sospechar
  que elegiste una respuesta mala a propósito.
- **"Y cuando no sabe, lo inventa."** *(29/09)* Es el remate de la placa "Qué no conoce" y
  el argumento entero del paso 2: **no le enseñás para que sea más inteligente, le
  enseñás para que deje de inventar.** Importa más que el resto porque es el error que no
  se ve — si contestara un disparate lo descartás; el problema es que contesta algo
  verosímil.
- **POR QUÉ LA CHARLA PASA A HABLAR DE IA.** *(29/09)* Antes no había nada que lo
  justificara: se pasaba de las situaciones a los sondeos porque sí. Se agregó la placa
  **"Lo que tienen en común"**, que observa que las cinco situaciones tienen la misma
  forma —**leer, cruzar, decidir, producir**— y que eso, hasta hace poco, solo lo hacía
  una persona sentada. Es el único argumento honesto para que aparezca la IA: no traés
  una tecnología, mostrás que el trabajo que ya tienen tiene una forma que recién ahora
  algo puede hacer. Primero el trabajo, después la herramienta.
  **La placa lo dice explícito:** "Hoy hay una herramienta que también puede: la
  inteligencia artificial." Insinuarlo no alcanzaba — la sala necesita el puente dicho.
  Es también la primera vez que la IA se nombra como tema; antes solo aparece de costado,
  en la bio.
  **Los mismos cuatro verbos vuelven en "Lo que sabe hacer"**, ahí describiendo la
  herramienta. Esa rima es el argumento y no hace falta señalarla.
- **La placa de presentación hace tres cosas, no una.** *(29/09)* Pasó de 20 a 45 seg:
  (1) te da el derecho a haber mostrado esas cinco situaciones —"todo lo que vieron
  recién salió de ahí"—, (2) nombra la IA por primera vez pero como algo que hacés vos
  (NimboDesk), no como tema, y (3) deja colgada la pregunta que contestan los sondeos:
  **"y en todas se repite lo mismo"**. No se explica qué se repite: eso lo contestan
  ellos levantando la mano.
- **Se sacó la tabla de rutinas de ejemplo.** *(30/09)* Era una lámina de asignaciones
  obvias —"recepción le pregunta al proyecto antes de contestar"— que no le revelaba nada
  a alguien que dirige una academia. Los ejemplos se dan de boca sobre la placa de las
  tres preguntas, junto con la objeción que sí importa: **las fechas no se inventan, el
  cierre de mes y el día 1 ya existen.**
- **Las placas de situación no llevan frase de cierre.** *(29/09)* La doble carga, las
  facturas y la consulta tenían un remate escrito abajo; se sacaron. La imagen hace el
  trabajo y la frase la decís vos — escrita además te obliga a leerla, que es lo peor que
  podés hacer con un remate. Las frases quedaron en las notas del orador.
- **Cada paso abre con su propia portada.** *(30/09)* Cuatro placas de 15 segundos, con
  el recorrido arriba —los cuatro nombres, el actual encendido— y el número, el nombre y
  la bajada abajo. Hacen dos cosas: orientan (nadie se pierde en los veinte minutos del
  medio) y repiten el método cuatro veces más. El método es lo que se llevan, y se lleva
  mejor visto cinco veces que una. Las de Mapear y Sistematizar agregan **"este paso lo
  hacés vos, sin IA"**; el número va dorado en las dos que sí tienen IA.
- **Toda placa de bloque lleva el marcador de paso.** `PASO 0N · NOMBRE` arriba y un
  título grande abajo (componente `EncabezadoPaso`). Es lo que hace visible la estructura:
  la sala tiene que saber en qué paso está sin preguntar. Una placa de bloque sin
  marcador queda fuera del sistema y se nota. *(29/09)*
- **Las placas conceptuales van con recreación, no con captura real.** Proyectada en un
  auditorio la interfaz de verdad se lee mal y mete ruido. La interfaz real se ve igual,
  en los videos de las demos. *(29/09)*
- **Qué NO subir va DENTRO de Enseñar**, no al final de la charla: es el momento exacto en
  que la sala se pregunta si esto es seguro. El truco práctico es uno solo: se trabaja con
  legajo y la planilla que lo relaciona con el nombre se queda afuera. *(29/09)*
- **Se sacó la placa del reencuadre** ("esta no es una charla sobre IA, es una charla
  sobre cómo se lleva una academia"). La placa del método ya lo demuestra con la barra de
  "acá entra la IA": decirlo además con todas las letras era subrayar lo ya dicho. Si hace
  falta rematarlo, se dice de boca. *(29/09)*
- **Se sacó el sondeo 3** (planillas vs papel). Dos sondeos alcanzan y el tercero estiraba
  el bloque. La calibración que daba —¿a quién le estoy hablando?— ahora sale de la placa
  de Mapear, preguntándoles qué agregarían a la lista: se calibra igual y encima participan.
  *(29/09)*
- **El enganche entre la tesis y el método.** *(28/09)* La tesis explica UN paso de los
  cuatro (Enseñar) — no los cuatro. Por eso el método se sentía pegado con cinta. La
  bisagra es: **"Le faltó saber de tu academia. Pero no faltó una cosa sola: faltaron
  cuatro."** El método no es un framework traído de afuera: es **el diagnóstico completo
  de por qué no les funcionó**. Cada paso evita un fracaso que ya vivieron:
  | Paso | El fracaso que evita |
  |---|---|
  | Mapear | "Le pregunté lo primero que se me ocurrió." |
  | Enseñar | "Me contestó una generalidad." ← la tesis |
  | Usar | "Me dio un texto que igual reescribí entero." |
  | Sistematizar | "Lo probé una vez y no lo volví a abrir." |
- **Faltaba agrandarles el modelo mental de la herramienta.** Llegan creyendo que escribe
  textos; con eso, un método de cuatro pasos suena desproporcionado. Se agregó la placa
  **"Lo que sabe hacer"**: leer / cruzar / decidir / producir. Los cuatro verbos son el
  índice de las cuatro demos. *(28/09)*
- **El hilo conductor es una cadena de preguntas.** Cada bloque termina dejando una
  pregunta en la cabeza de la sala y el siguiente la contesta. Si un bloque no deja
  pregunta, sobra. *(28/09)*
- **Me presento y los sondeos van ANTES del mensaje de Dante, no después.** *(28/09)*
  Antes estaban en el medio y partían el golpe en dos: la sala veía el mensaje, se
  entusiasmaba, y después había que frenar para decir quién sos y levantar manos.
  Ahora el orden es: sondeos (nadie la usa para gestionar) → la tesis (por eso: no sabe
  nada de tu academia) → qué no conoce → **y recién ahí el mensaje**. Así el mensaje no
  es solo impresionante: es imposible según lo que acabás de decir.
- **Los cuatro pasos son el esqueleto VISIBLE de la segunda mitad.** *(28/09, revierte lo
  que se había decidido antes ese mismo día)* Se muestran en una placa a mitad de charla
  y de ahí en adelante la sala siempre sabe en qué paso está. La regla de "estructura
  invisible" es de charla TED y optimiza emoción; esto se parece más a un taller y la
  sala tiene que poder aplicarlo el lunes. La primera mitad (el problema) sigue sin
  anunciar nada.
- **"No sabe nada de tu academia" NO implica que no se pueda automatizar.** Son dos ejes
  distintos: *qué sabe* (genérico ↔ tu academia) se arregla en Enseñar; *quién lo dispara*
  (manual ↔ asistido ↔ automatizado) se arregla en Sistematizar. La relación es de
  precondición, no de causa: si lo que produce es genérico no tenés nada que valga la pena
  repetir. **Primero que valga, después que se repita.** *(28/09)*
- **Dos de los cuatro pasos no tienen IA.** Mapear y Sistematizar los hace una persona.
  Es el reencuadre demostrado en vez de afirmado, y es lo que pide Jordan: la IA como
  herramienta debajo, no como tema arriba. *(28/09)*
- **El "elegí tu proceso" va al final**, no antes de las demos: si eligen sin haber visto
  los casos, eligen mal. *(28/09)*
- **Se sacó la placa de los 115.** La grilla de 115 tarjetas competía con el mensaje de
  Dante en vez de rematarlo. El número se dice ahora en voz alta sobre la placa de "Lo
  que sabe" — se imagina mejor de lo que se ve. *(28/09)*
- **La dispersión NO es un caso de ahorro de horas** y no entra en el contador de 160.
  Es el requisito previo: no se puede automatizar una regla que tiene dos versiones.
  *(28/09)*
- Hay una **portada** proyectada mientras el moderador presenta. No se comenta.
- **No se anuncia el método de cuatro pasos al principio.** Se entrega al final.
  (Regla de la guía de TEDx: la estructura debe ser invisible. La desobedecemos solo
  en el bloque de Enseñar, donde lento y detallado es a propósito.)
- **El cierre no termina en la oferta**: termina volviendo a la idea.
- **Se sacó la placa en negro.** *(29/09)* La escena de apertura se dice ahora ENCIMA de
  la portada, que se queda en pantalla los primeros 90 segundos. Una placa vacía en el
  deck confunde más de lo que ayuda.
- **NO HAY NADA EN VIVO.** *(confirmado 29/09)* Esto es una charla; el taller viene
  después y es otra cosa. Todos los resultados se muestran con **capturas reales**: sin
  conexión, sin tipear en escena, sin depender de nada del auditorio. Estaba anotado como
  "un momento en vivo" desde el 27/09 y se descarta — era el mayor punto de falla de la
  hora y son cuatro minutos que no sobran.
- **Tres niveles va en el paso 4 · Sistematizar**, no al principio. *(29/09)* Manual /
  Asistido / Automatizado es el eje de quién lo dispara; declarado temprano obligaba a la
  sala a sostener dos ideas abstractas a la vez. Todo lo que se enseña es el del medio.

---

---

## El método de cuatro pasos

Es lo que se lleva la sala. **No se anuncia al principio: se entrega al final.**

| Paso | Qué es |
|---|---|
| **Mapear** | Qué trabajo repetitivo se puede sacar de encima |
| **Enseñar** | Cargarle cómo funciona esa academia |
| **Usar** | Preguntarle, y pedirle trabajo terminado |
| **Sistematizar** | Convertirlo en rutina con responsable |

Jordan lo confirmó como el takeaway ("Map, Teach, Run, Systematize"): las demos muestran
cómo funciona, el método les da una forma de pensarlo después.

---

## Lo que decía la propuesta a SEA

**No es un contrato.** Es lo que se les propuso; la charla no tiene que seguirlo al pie.
Se conserva acá como referencia de dónde salió la idea. Lo único que sí se sostiene es
el método de cuatro pasos, porque es lo que la sala se lleva.

1. Por qué la IA todavía no llegó a la gestión — sondeo y diagnóstico
2. **Mapear**: qué podría dejar de hacerse a mano — informes, reinscripción, cobranza,
   consultas repetidas, y el criterio para elegir por dónde empezar
3. **Enseñar**: programas, aranceles, horarios, reglamento y planillas
4. **Usar / preguntarle**: qué dice el reglamento ante un caso concreto · alumnos en
   riesgo de discontinuar · comisiones que no llegan a cubrirse
5. **Usar / pedirle**: informes de fin de cuatrimestre con la comunicación a cada
   familia · la reinscripción completa
6. **Sistematizar**, y hasta dónde alcanza

**Qué se lleva cada asistente:** el método · la guía de trabajo con los pasos y las
consultas usadas · un proceso propio ya elegido y un primer paso para la semana siguiente.

---

## Feedback de Jordan (mentoría, 28/09)

- **Dar un takeaway simple.** Mapear / Enseñar / Usar / Sistematizar. Las demos muestran
  cómo funciona; el método les da cómo pensarlo después.
- **Enfocar en problemas reales del dueño**: reinscripción, alumnos en riesgo, viabilidad
  de comisiones, informes, comunicación con familias. El punto no es "miren lo que puede
  hacer esta tecnología" sino **"miren el trabajo que podrían dejar de hacer a mano"**.
- **Dejar la limitación adentro.** Decir "esto funciona, pero hoy depende de una persona y
  en algún momento se rompe" te hace más creíble y encadena naturalmente con lo que sigue.
- **No forzar la tecnología.** El posicionamiento es sobre mejores formas de llevar la
  academia, con la IA como herramienta debajo. *(Esto valida la placa del reencuadre.)*
- **Cadena comercial:** charla → guía → auditoría gratuita de un proceso → taller SEA →
  implementación. La auditoría se ofrece bien concreta: *"miramos un proceso de tu
  academia e identificamos dónde podrías ahorrar tiempo o sacarte trabajo repetitivo."*

---

## Diferencias con la propuesta (28/09) — decisiones, no deudas

- **La propuesta dice "demostraciones en vivo"** y no va a haber nada en vivo. Si SEA
  publicó el programa con esa línea, conviene tener lista una frase al pasar a la primera
  captura: *"esto lo dejé preparado para no hacerlos esperar la conexión"*. Mejor
  previsto que improvisado.
- **Los informes de fin de cuatrimestre** no están entre los cinco casos. Jordan los
  nombra como problema real del dueño. Queda como candidato, no como deuda.
- **Alumnos en riesgo y viabilidad de comisiones** viven hoy solo en el machete, como
  "las tres preguntas". Candidatos a demo si sobra lugar.
- La lista de asistencia en papel y el cruce de contactos no estaban en la propuesta y
  se quedan igual: el de papel es el que prueba "cero preparación previa".

---

## Lo que falta construir (desde la placa 20)

| Bloque | Placas | Estado |
|---|---|---|
| **El método** — los 4 pasos y dónde entra la IA | 1 | ✅ hecha |
| **Paso 1 · Mapear** — ponerle nombre a las situaciones del principio + el criterio para elegir | 2 | ✅ hechas |
| **Paso 2 · Enseñar** — Todo junto · dónde lo ponés · qué NO subir · una tarde | 4 | ✅ hechas |
| **Paso 3 · Usar** — tres casos × 3 placas (la pregunta · el resultado · qué ganás) | 9 | ✅ hechas · capturas puestas |
| **Paso 4 · Sistematizar** — las tres preguntas · dónde quedaste (tres niveles) | 2 | ✅ hechas |
| **Criterio, alcance y lo que NO puede hacer** | 3–4 | pendiente |
| **Cierre** — el método otra vez (+ la oferta) · el lunes · volver a la idea | 3 | ✅ hechas |

**Las cuatro demos elegidas** (de los cinco casos; la cobranza queda de reserva):

*(29/09: se sacó la lista de papel y se renombró "demo" por "caso". Quedan tres.)*

1. **Caso 1 · La consulta de la baja.** Vuelve a la placa de las doce fuentes. Prueba que cita fuentes y encuentra la contradicción.
2. **Caso 2 · La auditoría de la planilla.** El golpe: doble facturación de 8 meses, legajos duplicados, pago del 0999, tres comisiones bajo el mínimo. Adentro entran "alumnos en riesgo" y "viabilidad de comisiones" que pide Jordan.
3. **Caso 3 · Las facturas de AFIP.** *(reemplazó a la reinscripción el 29/09, por decisión de Nico.)*
   Es la situación que más duele y la única donde la IA no termina el trabajo: arma el
   archivo listo para importar, pero no emite. Cerrar el bloque de demos con una
   limitación es deliberado — después de cuatro demos funcionando, una quinta maravilla
   suena a vendedor; "hasta acá llega" suena a alguien que lo usa.
   Acá vuelve Dante, en la fila del comprobante.

**La escena de apertura se reescribió con las facturas** *(29/09)*. Antes abría con el
3 de noviembre y los 115 de la reinscripción, que ya no se demuestra. Ahora abre el
1 de octubre, recitando el formulario de comprobantes hasta que la sala lo siente.
Es mejor: es mensual y no anual, o sea peor para ellos.

La escena planta tres cosas sin anunciarlas — el formulario repetido (placa 07), los
cuatro dados de baja y la doble facturación (demo 3), y los 165 (demo 4). Las tres se
pagan después. Los números son los reales de Alborada: 165 activos, 7 con descuento de
hermanos, 4 bajas sin registrar, 1 doble facturación de ocho meses.

**El bloque de límites** (después de Sistematizar) tiene que incluir:
- El criterio para saber cuándo sirve y cuándo no.
- El alcance real.
- Lo que NO puede hacer: las 165 facturas en el portal, decidir cuál regla vale cuando
  se contradicen, y la limitación de Jordan — **hoy depende de una persona y en algún
  momento se rompe**. Esa última es la que encadena con lo que viene después.

## Los casos elegidos

| # | Caso | Qué prueba | Origen |
|---|---|---|---|
| 1 | Lista de asistencia en papel → tabla | Lee imágenes. Cero preparación previa. | Academia real |
| 2 | La planilla que solo el director entiende + auditoría | Ordena y documenta lo que vive en una cabeza | Academia real + Alborada |
| 3 | Cruce de contactos + links de WhatsApp | Busca en tres planillas y arma el envío | Academia real |
| 4 | Cobranza del mes | Cruza planillas y produce trabajo | Alborada |
| 5 | Reinscripción 2027 | Hace el proceso entero, con decisiones | Alborada |

**Nivel tres (solo se muestra, no se enseña):** agente de WhatsApp que atiende consultas,
y envío automático de los 115 mensajes.

**Entran a medias (se nombran, no se demuestran):** facturación en AFIP (la IA arma el
padrón, no factura) y comunicados a los grupos (adapta por comisión, el pegado sigue
siendo manual).

---

## Pendientes

- [ ] Llamar a 2–3 directores para verificar: cómo hacen la reinscripción y cuánto les
      lleva; si los informes son personalizados o formulario; si la cobranza se escribe
      caso por caso; cuántos alumnos tienen.
- [ ] Pasar la planilla real de referencia para calcar su estructura de columnas.

- [ ] ~~Sacar las capturas de resultado~~ ✅ las seis están en `presentacion/public/resultados/`
- [ ] (viejo) Sacar las CUATRO capturas de resultado en un Proyecto de claude.ai y dejarlas en
      `presentacion/public/resultados/` (ver LEEME.md ahí: qué tiene que mostrar cada una).
- [ ] Verificar con los directores los números de las placas "el antes": hoy son
      estimados (20 min por comisión, 1 a 2 semanas la reinscripción). El número tiene
      que ser de ellos, no tuyo.
- [ ] Confirmar el precio de la herramienta con impuestos, en pesos.
- [ ] Corregir el título que se mandó a SEA: decía "de la academias".

---

## Compromisos con la sala (volver a esto en el bloque de límites)

Dos situaciones del bloque de problemas NO se resuelven en las demos. Si no volvés a
ellas, la sala se va pensando que esquivaste los casos más dolorosos.

- ~~Las 165 facturas~~ — **ya no es un compromiso pendiente**: desde el 29/09 es la
  demo 4, y el límite ("no entra al portal, el botón lo apretás vos") se dice ahí mismo,
  en la placa de qué ganás. Es mejor así: el límite llega con el caso, no veinte minutos
  después.
- **Las reglas contradictorias.** La IA te muestra que el reglamento dice 75% y el
  acuerdo firmado dice 70%. Cuál de las dos vale lo decide la academia, no la IA.

## Advertencias que no hay que perder

- El contador de horas (160 h/año) está calculado sobre una academia de 180 alumnos.
  **Hay que acotarlo en voz alta**: una de 40 alumnos no ahorra semanas — gana cosas
  que hoy no hace.
- Preguntar en vez de afirmar cuando el dato es sobre la realidad de ellos.
  "¿Cuánto les lleva la reinscripción?" es más fuerte que decirlo vos.
- Los datos: se trabaja con legajo, no con nombres de menores. Placa de qué no subir.
- Sponsors del congreso: pueden ser proveedores de software. La charla es
  complementaria a los sistemas, no un reemplazo. Decirlo sin que lo pregunten.

---

## El embudo en beehiiv (30/09)

El QR del deck apunta a
`https://nicolas-taboada.beehiiv.com/products/guia?utm_source=sea`

El `utm_source=sea` no es decorativo. Es lo que separa a los directores de
academia de los suscriptores del newsletter de devs. Sin ese parámetro, los
80 de la sala empiezan a recibir mails de desarrollo de software.

**Dos automatizaciones, condiciones espejadas:**

| Automatización | Condición |
|---|---|
| Bienvenida devs (la que ya existía) | `UTM source` · does not equal · `sea` |
| Guía + auditoría (nueva) | `UTM source` · equals · `sea` |

Antes la condición era `Channel equals <la URL>`, que no matchea nunca —
el channel en beehiiv es `web` / `api` / `import`, no una URL. Por eso los
que bajaban la guía recibían el welcome de devs.

**El PDF no lo hostea beehiiv.** El producto guarda el archivo pero no da una
URL pegable en un mail. Hay que subirlo afuera (Drive por ahora,
`nimboclass.com/guia.pdf` después de la charla).

Los dos mails están escritos en `charla/mails.md`.

**Lo que queda por verificar:** que beehiiv guarde el `utm_source` en el alta
por producto. Si el campo queda vacío en el detalle del suscriptor, no hay
condición que funcione: apagar la automatización de devs y mandar la guía a mano.


## La placa del regalo (01/10)

El deck pasó de 46 a **47 placas**: el regalo tiene la suya, antes de las preguntas.
Antes compartía placa con "¿Preguntas?" y ahí el QR competía con la pregunta y se perdía.

La de preguntas **sigue teniendo el QR**, a propósito: la gente que no escaneó durante
la placa del regalo lo escanea mientras contestás. No la saques hasta que te bajen.

Lo único que hace funcionar esa placa son los veinte segundos de silencio después de
"escanéenlo ahora". Sin ese silencio, la placa no sirve de nada.
