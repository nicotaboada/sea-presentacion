import type { ReactNode } from "react";
import Slide, { EncabezadoPaso } from "./Slide";
import Conciliacion from "./Conciliacion";
import DobleCarga from "./DobleCarga";
import Facturas from "./Facturas";
import { Dispersas, Juntas } from "./Fuentes";
import Metodo from "./Metodo";
import PortadaPaso from "./PortadaPaso";
import { Mapa, Criterio } from "./Mapear";
import Captura from "./Captura";
import Datos from "./Datos";
import { Pregunta, Resultado, Ganancia } from "./Demos";
import { Preguntas, Niveles } from "./Sistematizar";
import { NoHace, CuandoSirve, HaceFalta, Lunes } from "./Limites";
import Cierre from "./Cierre";
import Regalo from "./Regalo";

export interface SlideDef {
  title: string;
  min?: string;
  notes: string;
  el: ReactNode;
}

/* ---------------- piezas reutilizables ---------------- */

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="mb-[52px] font-heading text-[26px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
    {children}
  </p>
);

const Statement = ({ children, xl = false }: { children: ReactNode; xl?: boolean }) => (
  <p
    className={`font-heading font-bold leading-[1.08] tracking-[-0.03em] text-foreground ${
      xl ? "text-[164px]" : "text-[110px]"
    }`}
  >
    {children}
  </p>
);

const Sondeo = ({ q, sub }: { q: string; sub?: string }) => (
  <div>
    <Statement>{q}</Statement>
    {sub && <p className="mt-[40px] text-[52px] leading-snug text-muted-foreground">{sub}</p>}
  </div>
);

/* ---------------- las placas ---------------- */

export const slides: SlideDef[] = [
  {
    title: "Portada",
    notes: `Está proyectada mientras la gente se sienta y el moderador te presenta.

La portada NO se comenta: no leas tu propio título ni tu bio en voz alta. Que la lean.

Cuando arrancás a hablar, esta placa SE QUEDA en pantalla y decís la escena de abajo
encima de ella. No pasás de placa hasta terminarla.

═══════════════════════════════════════════════════════════════

Pantalla en negro a propósito. La sala te mira a vos, no a la pantalla.

Esto se dice PARADO Y QUIETO. No camines. La escena la sostiene el ritmo, no vos.

---

"Primero de octubre. Nueve de la mañana. Abrís el portal y empezás a facturar."

(y acá cambiás el ritmo: rápido, monótono, como quien recita un trámite)

"Tipo de comprobante. Punto de venta. Fecha de emisión. Concepto: servicios. Período facturado. Documento del receptor. Apellido y nombre. Condición frente al IVA. Descripción. Importe. Continuar. Confirmar."

(pausá una respiración)

"Y de nuevo. Tipo de comprobante. Punto de venta. Fecha de emisión..."

(cortá en seco)

"Ciento sesenta y cinco veces."

(PAUSA LARGA — dejá que la sala haga la cuenta sola)

"Y de esos ciento sesenta y cinco, hay siete que tienen descuento de hermanos y les tenés que restar el quince por ciento a mano. Hay cuatro que se dieron de baja hace meses y nadie lo registró, así que los estás facturando igual. Y hay una que está anotada en dos cursos, así que le cobrás dos veces."

(pausá)

"Eso viene pasando desde marzo. Ocho meses."

(pausá)

"Cuando terminás es la una de la tarde. Y faltan veintiocho días para volver a empezar."

---

TOPE: 90 segundos. Si se estira a dos y medio, abriste lento y lo pagás toda la hora.

LO QUE ESTA ESCENA PLANTA, sin anunciar nada:
· El formulario repetido → placa de las facturas
· Los cuatro dados de baja y la doble facturación → caso 2, la auditoría
· Los ciento sesenta y cinco → caso 3, el archivo

Los tres se pagan más adelante. No los señales ahora.

LOS NÚMEROS SON REALES y están en los datos de Alborada: 165 activos, 7 con descuento de
hermanos, 4 bajas no registradas, 1 doble facturación (Sofía Salas, ocho meses).`,
    el: (
      <Slide className="justify-between">
        <div>
          <div className="mb-[56px] h-px w-[420px] bg-gradient-to-r from-[hsla(0,0%,100%,0.28)] to-transparent" />
          <h1 className="max-w-[24ch] font-heading text-[128px] font-bold leading-[1.06] tracking-[-0.035em] text-foreground">
            IA aplicada a la gestión de la academia
          </h1>
          <p className="mt-[48px] max-w-[52ch] text-[42px] leading-[1.5] text-muted-foreground">
            Cómo dejar de hacer a mano el trabajo repetitivo de la gestión. Qué se resuelve hoy,
            qué no, y por dónde empezar.
          </p>
        </div>
        <div>
          <p className="font-heading text-[40px] font-bold tracking-[-0.02em] text-foreground">
            Nicolás Taboada
          </p>
          <p className="mt-[12px] text-[28px] leading-[1.5] text-muted-foreground/70">
            Ingeniero de software
            <br />
            Fundador de NimboClass — software de gestión académica
            <br />
            Fundador de NimboDesk — agentes de IA en WhatsApp
          </p>
        </div>
      </Slide>
    ),
  },
  {
    title: "¿Les suena?",
    notes: `La invitación a reconocerse. Decila y pasá: no la expliques.

"Antes de mostrarles nada de inteligencia artificial, quiero que veamos de dónde sale ese trabajo. Capaz con algo de esto se sienten identificados."

(pausá una respiración y pasá a la planilla)

Es una PREGUNTA, no un anuncio: no digas cuántas situaciones vienen ni cómo se llama el bloque.`,
    el: (
      <Slide>
        <Statement>
          ¿Algo de esto
          <br />
          les suena?
        </Statement>
      </Slide>
    ),
  },
  {
    title: "El extracto",
    notes: `NO LA LEAS. Proyectala y callate cinco segundos: la sala la lee sola y se reconoce.

SEÑALÁ PRIMERO LA IZQUIERDA, DESPUÉS LA DERECHA. El gesto es la placa.

"De este lado, lo que dice el banco en octubre. De este otro, lo que dice tu planilla."

(pausá)

"Todos los meses alguien se sienta con estas dos cosas abiertas y las cruza, movimiento por
movimiento, para saber quién pagó."

AHORA DOS O TRES DEL EXTRACTO, no más:

· "González María. No hay ninguna alumna que se llame así. Pagó la madre."
· "Coronel, ciento veinticinco mil ochocientos. Son las dos hermanas juntas, una con
   descuento. Pero entró como un solo pago."
· "Y esta de Sarmiento. Ana no tiene arancel cargado, así que no sé si está bien o está mal."

(y señalá la columna de la derecha, la de los signos de pregunta)

"Cada uno de esos signos de pregunta es una persona averiguando."

(pausá)

EL REMATE, que es lo que lo vuelve trabajo y no desorden:

"El banco te dice cuánto entró. No te dice de quién. Eso lo tenés que deducir vos, ciento
sesenta y cinco veces, todos los meses."

(pausá)

"Y lo que no reconocés queda sin imputar. O sea: alguien pagó, y en tu planilla figura
como que debe."

POR QUÉ ESTA PLACA VA PRIMERA: es la que más rápido se reconoce y la única del bloque
donde se pierde plata, no tiempo. Si alguien asiente o se ríe acá, ya tenés el bloque.

Y PREPARA EL CASO 2 SIN ANUNCIARLO: cuando la auditoría encuentre pagos de legajos que no
existen y alumnos facturados dos veces, la sala ya va a saber de dónde sale ese desorden.`,
    el: (
      <Slide pad={false}>
        <Conciliacion />
      </Slide>
    ),
  },
  {
    title: "La doble carga",
    notes: `La misma asistencia, escrita dos veces. Señalá el papel, después la planilla, y callate dos segundos.

"El docente toma lista en papel, en la clase. Hasta ahí todo bien: el papel funciona, no se cuelga y no necesita señal."

(señalá la flecha)

"El problema es lo que pasa después. Alguien se sienta y lo pasa a la planilla. Fila por fila. Y lo que escribe la segunda vez es exactamente lo mismo que ya estaba escrito."

(pausá)

"Eso no es cargar datos. Es copiar."

(pausá)

"Y nada de lo que se escribió la segunda vez es nuevo."

OPCIONAL, si querés el remate: mirá la fila 7. En el papel está Delfina, que entró en agosto. En la planilla todavía no. "Y cuando la copia falla, la que no existe es la alumna."

OJO: no te burles del papel ni de la planilla. Los dos funcionan. Lo que no funciona es la persona en el medio.

Esta placa es el setup del primer caso que vas a mostrar: foto del papel, tabla del otro lado.`,
    el: (
      <Slide pad={false}>
        <DobleCarga />
      </Slide>
    ),
  },
  {
    title: "Las facturas",
    notes: `Dejala en pantalla y callate. El bucle se entiende solo: el formulario es idéntico, lo único amarillo es el nombre.

"Y después está esto. Ciento sesenta y cinco comprobantes, todos los meses, cargados de a uno."

(pausá)

"Fíjense que entre uno y el siguiente no cambia nada. Mismo tipo, mismo punto de venta, mismo período, mismo importe. Cambia el nombre."

(señalá la cuarta, la que queda cortada)

"Y esa sigue."

COMPROMISO — no lo saltees: esto es lo único del bloque que la IA NO va a resolver del todo. Lo pagás en el Caso 3, cuando muestres el archivo, con estas palabras o parecidas:

"¿Se acuerdan de las ciento sesenta y cinco facturas? Eso la IA no lo hace. No entra al portal ni emite por vos. Lo que hace es dejarte el archivo listo para importar, con los datos ya cruzados y sin los errores de la planilla. El botón lo seguís apretando vos."

Si no volvés, la sala se va pensando que esquivaste el caso más doloroso. Decir qué NO hace es lo que te da permiso para todo lo demás — y además te ordena con los sponsors, que venden sistemas.`,
    el: (
      <Slide pad={false}>
        <Facturas />
      </Slide>
    ),
  },
  {
    title: "La consulta",
    notes: `La última de las situaciones, y la que más pesa. Leé la consulta en voz alta, como si te la estuvieran haciendo por teléfono. Después callate y dejá que miren el desparramo.

"Esta te la hacen por teléfono, un martes, mientras estás haciendo otra cosa."

(pausá)

"La respuesta no está en ningún lado. Está repartida en cuatro: el reglamento dice cuántos días de aviso y qué pasa con la deuda, la planilla de pagos dice si debe, la de alumnos dice desde cuándo está — y el acuerdo que firmó la familia dice otra cosa que el reglamento."

(pausá)

"El reglamento dice treinta días. El acuerdo que firmaron dice quince. Las dos son de tu academia."

POR QUÉ VA ÚLTIMA: las anteriores son trabajo repetitivo — alguien hace de más. Esta es de otra especie: acá nadie hace de más, la academia directamente no tiene una respuesta. Es la escalada del bloque.

NO hables de automatizar todavía. La sala todavía no escuchó la palabra y "tres niveles" viene mucho después. La frase sobre automatizar reglas contradictorias va en la placa de Todo junto, sobre el final.

Si te queda tiempo, el dato que lo vuelve concreto: son cinco alumnos con promedio entre 7,83 y 9,17 y asistencia entre 71% y 73%. Según el reglamento recursan. Según el acuerdo que firmó la familia, promocionan.

COMPROMISO: igual que las facturas, esto tampoco lo resuelve la IA sola — lo resuelve la academia decidiendo cuál regla vale. Volvé a esto en "Lo que no hace", con el "No decide".`,
    el: (
      <Slide pad={false}>
        <Dispersas />
      </Slide>
    ),
  },
  {
    title: "Cierre del bloque",
    notes: `El bloque no cierra con un reto. Cierra reconociéndoles el trabajo.

"Todo esto ya lo resuelven. Sin sistema, sin IA y sin que se caiga nada. A mano, todos los meses."

(pausá)

"Lo que les quiero mostrar es lo que pasa cuando algo más puede leer todo eso."

De acá pasás a presentarte. Es el único respiro de la charla y va justo acá:
la sala acaba de ver que conocés su mundo, así que ahora le interesa quién sos.
No lo anuncies, simplemente pasá.`,
    el: (
      <Slide>
        <Statement>
          Todo esto ya lo resuelven.
          <br />
          <span className="text-muted-foreground/60">A mano, todos los meses.</span>
        </Statement>
      </Slide>
    ),
  },
  {
    title: "Vos",
    min: "45 seg",
    notes: `NO ES SOLO PRESENTARTE. Esta placa hace tres cosas y todas importan:

1. Te da el derecho a haber mostrado esas cuatro situaciones.
2. Nombra la IA por primera vez, pero como algo que hacés vos, no como tema.
3. Deja colgada la pregunta que contestan los sondeos.

---

"Soy Nicolás. Ingeniero de software."

"Hago dos cosas: NimboClass, que es software de gestión para academias de idiomas. Y NimboDesk, que son agentes de inteligencia artificial que atienden por WhatsApp."

(pausá, y bajá a la línea grande)

"Pero lo que vale para hoy es esto: el último año lo pasé adentro de academias, mirando cómo trabajan. Todo lo que les mostré recién no me lo inventé. Salió de ahí."

(pausá — esta frase te blinda: la sala deja de pensar que exageraste)

Y EL ENGANCHE, sin resolverlo:

"Y todo eso tiene algo en común."

(cortá y pasá — la placa siguiente lo revela)

POR QUÉ ASÍ Y NO DE OTRA FORMA: lo que encontraste en todas las academias es que la IA ya
está adentro, pero no en la gestión. Si lo decís vos, los sondeos quedan de adorno y la
sala escucha un dato tuyo. Si lo preguntás, la sala descubre el dato en sí misma —
levantando la mano y mirando alrededor. Es mucho más fuerte y es tu propia regla:
preguntar en vez de afirmar cuando el dato es sobre la realidad de ellos.

Además te deja mejor parado para el sondeo 2: cuando se bajen casi todas las manos,
podés decir "esto me pasa en todas", y suena a experiencia y no a golpe de efecto.

---

45 SEGUNDOS, no más. La guía de TED es explícita: no te enfoques demasiado en vos mismo.
Si te estirás a un minuto y medio, la sala se enfría justo cuando la tenías.

Y OJO CON EL TONO en lo de las dos empresas: se dice como dato, no como currículum.
Vos no viniste a vender: viniste porque estuviste adentro.`,
    el: (
      <Slide>
        <p className="font-heading text-[110px] font-bold leading-none tracking-[-0.03em] text-foreground">
          Nicolás Taboada
        </p>

        <p className="mt-[44px] text-[36px] leading-[1.6] text-muted-foreground/65">
          Ingeniero de software
          <br />
          Fundador de NimboClass — software de gestión para academias de idiomas
          <br />
          Fundador de NimboDesk — agentes de IA que atienden por WhatsApp
        </p>

        <div className="my-[46px] h-px w-[420px] bg-[hsla(0,0%,100%,0.16)]" />

        <p className="text-[46px] leading-[1.42] text-muted-foreground">
          El último año lo pasé adentro de academias, mirando cómo trabajan.
          <br />
          <span className="text-foreground">Todo lo que vieron recién salió de ahí.</span>
        </p>

        <p className="mt-[46px] font-heading text-[46px] font-bold leading-none tracking-[-0.02em] text-foreground">
          Y todo eso tiene algo en común.
        </p>
      </Slide>
    ),
  },
  {
    title: "La forma del trabajo",
    notes: `ESTA ES LA PLACA QUE JUSTIFICA QUE LA CHARLA SEA SOBRE IA. Sin ella, la IA aparece porque sí.

"Fíjense qué tienen en común las cuatro cosas que vimos."

(los cuatro verbos, despacio, señalando)

"Leer. La lista de papel, el reglamento, la planilla de pagos."
"Cruzar. Quién debe, qué nivel tiene, qué arancel le toca, qué descuento."
"Decidir. Según tu reglamento, no según lo que parece."
"Y producir algo. La factura, el mensaje, el informe."

(pausá)

"Ninguna de las cuatro es apretar botones. Todas son leer, cruzar, decidir y escribir."

(pausá — y ahora la frase que abre la charla entera)

"Eso, hasta hace poco, solo se hacía a mano. Ningún sistema lo hace por vos, salvo que alguien lo programe para tu caso en particular."

(pausá, y la última línea SIN dramatismo — como quien dice un dato)

"Hoy hay una herramienta que también puede. Y es la razón por la que estamos acá."

ACÁ SE NOMBRA LA IA POR PRIMERA VEZ COMO TEMA. Hasta este momento apareció una sola vez,
de costado, en tu bio. Nombrarla recién ahora, después de haber mostrado el trabajo, es
lo que hace que no suene a que viniste a hablar de tecnología.

NO DIGAS "AUTOMATIZAR". Nada de lo que vas a mostrar pasa solo. El verbo es sacarse
trabajo de encima, o dejar de hacerlo desde cero.

POR QUÉ ESTA PLACA IMPORTA: es el único argumento honesto para que aparezca la IA.
No traés una tecnología nueva: mostrás que el trabajo que ya tienen tiene una forma
particular, y que recién ahora hay algo que la hace. El orden es el correcto — primero
el trabajo, después la herramienta.

OJO: los mismos cuatro verbos vuelven más adelante, en "Lo que sabe hacer", ahora
describiendo la herramienta. Acá describen el trabajo de ellos. Esa rima es el argumento
entero y no hace falta señalarla: la sala la hace sola.

NO NOMBRES LA IA TODAVÍA. De acá pasás directo a los sondeos, y que la nombren ellos.`,
    el: (
      <Slide>
        <p className="mb-[52px] font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Lo que tienen en común
        </p>

        <ul className="space-y-[30px]">
          {[
            ["Leer", "la lista de papel, el reglamento, la planilla"],
            ["Cruzar", "quién debe, qué nivel tiene, qué arancel le toca"],
            ["Decidir", "según tus reglas, no según lo que parece"],
            ["Producir", "la factura, el mensaje, el informe"],
          ].map(([v, ej]) => (
            <li key={v} className="flex items-baseline gap-[40px]">
              <span className="w-[300px] shrink-0 font-heading text-[68px] font-bold leading-none tracking-[-0.03em] text-foreground">
                {v}
              </span>
              <span className="text-[36px] leading-tight text-muted-foreground">{ej}</span>
            </li>
          ))}
        </ul>

        <p className="mt-[54px] text-[38px] leading-snug text-muted-foreground/70">
          Hasta hace poco, eso solo se hacía a mano.
        </p>
        <p className="mt-[20px] font-heading text-[52px] font-bold leading-[1.2] tracking-[-0.02em] text-foreground">
          Hoy hay una herramienta que también puede:
          <br />
          la inteligencia artificial.
        </p>
      </Slide>
    ),
  },
  {
    title: "Sondeo 1",
    notes: `Pedí que levanten la mano. ESPERÁ. Mirá la sala y contala en voz alta: "casi todos".

No sigas hasta que las manos estén arriba. Si vos no esperás, ellos no levantan. Son cinco segundos de aguantar el silencio y es lo que más se falla.`,
    el: (
      <Slide>
        <Sondeo q="¿Quién usó alguna vez la IA para escribir algo de la academia?" />
      </Slide>
    ),
  },
  {
    title: "Sondeo 2",
    notes: `Acá se bajan casi todas. Dejá el contraste colgado dos segundos antes de hablar.

"Eso que acaba de pasar me pasa en todas las academias con las que trabajé. Todos la usan. Nadie la usa para gestionar. Y no es por falta de conocimientos técnicos."`,
    el: (
      <Slide>
        <Sondeo
          q="¿Y quién la usó para resolver algo de la gestión?"
          sub="No para escribir: para resolver."
        />
      </Slide>
    ),
  },
  {
    title: "La consulta que sale bien",
    notes: `PRIMERA DE LAS DOS. Va rápida: la sala se reconoce en un segundo y no hace falta explicarla.

"Esto es lo que hacen casi todos, y está perfecto."

(dejá cinco segundos, que lean el mail)

"Le pedís que escriba un mail avisando que la academia cierra por el feriado. Y lo escribe bien. Mejor de lo que lo escribirías vos apurado un martes."

(pausá)

"Esto sirve. Y es donde se levantaron todas las manos hace un minuto."

DETALLE QUE VALE LA PENA SEÑALAR: mirá el pedido. Está escrito rápido, con errores de
tipeo. No hizo falta escribirlo bien. Eso también es parte del punto: no hay que aprender
a hablarle raro.

De acá pasás a la segunda sin anunciar nada.`,
    el: (
      <Slide pad={false}>
        <Captura
          rotulo="Lo que casi todos le piden"
          archivo="00-mail-generico.png"
          espera="El pedido del mail por el feriado y el mail que devolvió, bien escrito."
          veredicto="Sirve. Lo mandás casi sin tocar."
        />
      </Slide>
    ),
  },
  {
    title: "El pedido",
    notes: `ESTA PLACA DEFENDE EL PEDIDO. Alguien en la sala va a pensar "preguntaste mal", y esto lo desarma antes de que lo formule.

"Ahora le pregunté algo de mi academia. Y miren cómo se lo pregunté."

(dejá que lo lean — no lo leas vos, es largo)

"Le dije cuántos alumnos tengo, cuándo termina el ciclo, qué comisión, en qué turno, cuándo se inscribió, qué cuota debe, cuándo venció, qué pagó, qué me pidieron."

(pausá)

"Todo lo que un director puede saber de ese caso. No le escondí nada."

Y CORTÁS. Pasás a la respuesta sin anticipar qué devolvió.`,
    el: (
      <Slide pad={false}>
        <Captura
          rotulo="Lo que casi nadie le pide"
          archivo="01a-pedido.png"
          espera="El caso de la baja contado con todo el detalle."
          veredicto="Todo lo que un director puede saber de ese caso."
        />
      </Slide>
    ),
  },
  {
    title: "La respuesta",
    notes: `EL REMATE, Y ES MEJOR QUE CUALQUIER COSA QUE HUBIÉRAMOS ESCRITO.

(dejá que lean — cinco segundos largos, callado)

"No me inventó nada."

(pausá)

"Me pidió tres cosas: cuánto vale la cuota, si cambia en noviembre y diciembre, y la cláusula del reglamento que firmó la familia."

(pausá, y señalá el punto 3)

"O sea: no le faltó inteligencia. Le faltaron mis papeles. Y me los nombró uno por uno."

POR QUÉ ESTA PLACA ES MEJOR ASÍ que si hubiera inventado: la IA queda bien parada, nadie
puede acusarte de haber elegido una respuesta mala a propósito, y el argumento se sostiene
igual de fuerte.

Y ACÁ ESTÁ EL REGALO: lo que te pide son EXACTAMENTE los archivos que vas a cargar en el
paso 2. La herramienta te está dictando el método. No lo digas todavía — que la sala lo
descubra cuando llegue a Enseñar.

De acá salís directo a la tesis.`,
    el: (
      <Slide pad={false}>
        <Captura
          mal
          rotulo="Lo que devolvió"
          archivo="01b-respuesta.png"
          espera="El remate de la respuesta: las tres cosas que te pide."
          veredicto="No puede. Y te pide tu reglamento y tus aranceles."
        />
      </Slide>
    ),
  },
  {
    title: "La tesis",
    notes: `LA FRASE DE LA CHARLA. Se dice tres veces en la hora: acá, al terminar de cargar Alborada, y en el cierre.

Decila y callate dos segundos.

QUÉ ESTÁ EXPLICANDO ESTA PLACA — es la respuesta al sondeo, nada más:
"Todos levantaron la mano para escribir. Casi nadie para gestionar. Y la razón es una sola."

(la frase)

"Escribir un mail es genérico: un mail es un mail. Pero tu reinscripción es tuya. Tus niveles, tus horarios, tus precios. Y de eso no tiene la menor idea."

NO DIGAS QUE ESTO IMPIDE AUTOMATIZAR. No es lo que dice y no hace falta. Esta charla no
va de automatizar — va de dejar de hacer las cosas a mano. Automatizar es el nivel tres y
se toca en el paso 4.

Si alguien te lo pregunta desde la sala, la respuesta es: "Que sepa de tu academia no
automatiza nada por sí solo. Pero sin eso no hay nada que automatizar: no vas a poner en
piloto automático algo que te devuelve una respuesta que hay que corregir entera."`,
    el: (
      <Slide>
        <Statement>
          No conoce ni tiene contexto
          <br />
          de tu academia.
        </Statement>
      </Slide>
    ),
  },
  {
    title: "Qué no conoce",
    notes: `Leé los cuatro despacio, señalándolos. Son las cuatro cosas que la sala necesita que sepa.

"No conoce tus cursos. No conoce tus aranceles. No conoce tus horarios. Y no conoce tu reglamento."

(pausá y bajá a la última línea)

"Y acá está lo peligroso: cuando no sabe, no te avisa. Lo inventa."

(pausá)

"Le preguntás cuánto sale tu curso de Teens 2 y te dice setenta y cinco mil. Redactado impecable. Y está mal."

ESTO LO VIVIERON TODOS. Es el momento en que la sala se acuerda de la vez que le pidió algo y le inventó un precio o una fecha con total seguridad. Si alguien se ríe o asiente, dejalo respirar dos segundos.

POR QUÉ IMPORTA MÁS QUE EL RESTO: es el error que no se ve. Si contestara un disparate lo descartás y listo; el problema es que contesta algo verosímil. Y ahí está el argumento del paso 2 entero — **no le enseñás para que sea más inteligente, le enseñás para que deje de inventar.**

(pausá)

ACÁ LA SALA ESTÁ EN EL PISO. Acabás de decirles que la herramienta que todos usan no
sirve para lo suyo. Es el punto más bajo de la charla y tiene que serlo: es lo que hace
que la placa siguiente valga.

No lo suavices ni lo apures. Dejá que se asiente y pasá.`,
    el: (
      <Slide>
        <Eyebrow>No conoce</Eyebrow>
        <ul className="space-y-[26px]">
          {["tus cursos", "tus aranceles", "tus horarios", "tu reglamento"].map((t) => (
            <li
              key={t}
              className="font-heading text-[92px] font-bold leading-none tracking-[-0.025em] text-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-[58px] text-[48px] leading-snug text-muted-foreground">
          Y cuando no sabe,{" "}
          <span className="text-foreground">lo inventa.</span>
        </p>
      </Slide>
    ),
  },
  {
    title: "Se le puede enseñar",
    notes: `LA BISAGRA DE LA CHARLA. Sin esta placa, todo lo que sigue queda colgado.

Venís de decir que no conoce nada de su academia. Si te quedás ahí, la sala concluye que la IA no les sirve y se desconecta. Esta frase da vuelta la hora entera.

"Pero no es un defecto. Es que nadie se lo dijo."

(pausá)

"Se le puede enseñar. Y no hace falta comprar nada ni programar nada."

LAS DOS OBJECIONES, adelantadas a propósito: la sala está pensando "esto debe costar plata" y "esto lo tiene que hacer un técnico". Contestalas antes de que las formulen.

De acá salís directo al método: si se le puede enseñar, la pregunta es cómo. Y son cuatro pasos.`,
    el: (
      <Slide>
        <Statement>Pero se le puede enseñar.</Statement>
        <p className="mt-[56px] text-[52px] leading-snug text-muted-foreground">
          Sin comprar nada y sin programar nada.
        </p>
      </Slide>
    ),
  },

  {
    title: "Lo probaron y no volvieron",
    notes: `LA ENTRADA AL MÉTODO. Sin esta placa el método aparece de la nada, como un framework que traés de afuera. Con ella, el método es el diagnóstico de ellos.

"Y sin embargo, cuando pregunté quién la usó para gestionar, se levantaron tres manos."

(pausá — señalá la placa)

"Muchos de ustedes lo probaron. Abrieron el chat, preguntaron algo de su academia, les contestó una generalidad, y no volvieron."

(pausá)

"No fue la herramienta."

LA BISAGRA — esta frase engancha la tesis con el método, y es la que faltaba:
"Le faltó saber de su academia. Pero si lo miramos despacio, no faltó una sola cosa. Faltaron cuatro."

Y de ahí pasás al método sin decir nada más.

POR QUÉ FUNCIONA: la tesis explica UN paso de los cuatro, el de Enseñar. Es el único que la sala puede sentir, porque es hasta donde llegaron. Los otros tres no los ven porque nunca pasaron de ahí. El método no es teoría: es la lista completa de lo que se saltearon.`,
    el: (
      <Slide>
        <Statement>
          Lo probaron una vez.
          <br />
          <span className="text-muted-foreground/60">Y no volvieron.</span>
        </Statement>
        <p className="mt-[56px] text-[50px] leading-snug text-muted-foreground">
          No fue la herramienta.
        </p>
      </Slide>
    ),
  },
  {
    title: "El método",
    notes: `ACÁ SE HACE VISIBLE LA ESTRUCTURA. De la mitad de la charla en adelante, la sala siempre sabe en qué paso está. Es a propósito: no vinieron a emocionarse, vinieron a poder hacerlo el lunes.

"Lo que queda de la hora son cuatro pasos. Y los cuatro los pueden aplicar a cualquier proceso de su academia, no solo a los que voy a mostrar."

(dejá que lean los cuatro — no los leas vos en voz alta)

Después señalá la barra del medio:

"Fíjense dónde entra la inteligencia artificial. Mapear lo hacen ustedes: nadie conoce su academia mejor. Sistematizar también: decidir quién ejecuta y cada cuánto es una decisión de gestión, no de software."

(pausá)

"Dos de los cuatro pasos no tienen nada de IA."

ES EL MOMENTO EN QUE LA CHARLA MUESTRA DE QUÉ ES. No lo digas como eslogan; la barra ya lo dice sola. Si querés rematarlo, alcanza con: "Por eso esto se parece más a ordenar la academia que a usar una herramienta."

Y SI ALGUIEN PREGUNTA POR AUTOMATIZAR — la respuesta honesta:
"Que sepa de tu academia no automatiza nada por sí solo. Son dos cosas distintas: qué sabe se arregla en el paso dos, quién lo dispara en el paso cuatro. Pero el orden importa: si lo que produce es genérico, no tenés nada que valga la pena repetir. Primero que valga, después que se repita."

NO desarrolles cada paso acá. Es el mapa, no el territorio: veinte segundos por paso como máximo.

Y arrancás el paso 1 sin anunciarlo: "Empecemos por el primero."`,
    el: (
      <Slide pad={false}>
        <Metodo />
      </Slide>
    ),
  },
  {
    title: "Paso 01 · Mapear",
    notes: `PORTADA DEL PASO 1. Quince segundos, no más. Es un cartel de ruta, no contenido.

"Paso uno. Mapear."

(pausá una respiración)

"Qué trabajo repetitivo se puede sacar de encima. Este lo hacen ustedes: nadie conoce su academia mejor."

Y PASÁS. No expliques el paso acá — las dos placas que siguen lo hacen.

FIJATE EN LA LÍNEA DE ARRIBA: la sala ve los cuatro nombres y cuál está encendido. Esa barrita es lo que hace que nadie se pierda en los próximos veinte minutos.`,
    el: (
      <Slide pad={false}>
        <PortadaPaso n="01" />
      </Slide>
    ),
  },
  {
    title: "Mapear · el trabajo que se repite",
    notes: `PRIMERA DEL PASO 1. Va rápida: no estás enseñando nada nuevo, estás poniéndole nombre a lo que ya vieron.

"Mapear es esto: listar el trabajo que se repite, y anotar cada cuánto."

(dejá que lean la lista)

"Los cuatro de arriba ya los vimos hace media hora: el extracto del banco, el papel de asistencia, las facturas y la consulta de la baja. No los llamé así, pero eso era mapear."

EL PUNTO QUE NO ES OBVIO — señalá la columna de la derecha:
"Fíjense que la reinscripción, que es la que más duele, pasa una vez al año. Y pasar la asistencia a la planilla, que no le duele a nadie, pasa cuarenta. Hagan la cuenta antes de elegir."

PREGUNTALES, no lo afirmes: "¿Qué agregarían a esta lista?" Si tirás dos o tres desde la sala, esta placa se vuelve de ellos y el paso 1 queda aprendido. Es el mejor momento de la hora para que hablen.

Y ES TU CALIBRACIÓN: según qué agreguen y qué no, sabés a quién le estás hablando. Si aparece mucho papel y cuaderno, alargá el caso de la consulta. Si todos tienen planillas y facturan mucho, alargá el de las facturas.`,
    el: (
      <Slide pad={false}>
        <Mapa />
      </Slide>
    ),
  },
  {
    title: "Mapear · el criterio",
    notes: `LA PLACA QUE HACE QUE EL MÉTODO SIRVA para procesos que no vas a mostrar hoy. Si se llevan una sola cosa aplicable, es esta.

"Y de todo lo que listaron, ¿por cuál empezar? Tres preguntas."

(una por una, sin apurar)

1. "¿Cuántas veces al año pasa? Doce veces cuesta más que una, aunque esa una duela más."
2. "¿Se hace siempre igual? Si cada caso se resuelve distinto, todavía no es candidato."
3. "¿Está escrito en algún lado? Y si la regla vive solo en tu cabeza, el primer paso no es la IA: es escribirla."

EL REMATE, que es contraintuitivo y por eso se acuerdan:
"Empiecen por el que diga que sí a los tres. Aunque sea el más chico. No por el que más les duele."

La tercera pregunta conecta sola con lo que sigue: si la respuesta es "no está escrito", el paso siguiente es Enseñar. No lo anuncies, ya se entiende.

NO les pidas todavía que elijan el suyo. Eso va al final, cuando hayan visto los casos y sepan qué forma tiene lo que están buscando.`,
    el: (
      <Slide pad={false}>
        <Criterio />
      </Slide>
    ),
  },
  {
    title: "Paso 02 · Enseñar",
    notes: `PORTADA DEL PASO 2. Quince segundos.

"Paso dos. Enseñar."

(pausá)

"Cargarle cómo funciona tu academia. Y este es el paso que casi nadie da — por eso a casi nadie le funciona."

Esa última frase es la única que agrega algo acá. El resto lo dicen las cuatro placas que siguen.`,
    el: (
      <Slide pad={false}>
        <PortadaPaso n="02" />
      </Slide>
    ),
  },
  {
    title: "Enseñar · todo junto",
    notes: `PRIMERA DEL PASO 2, y el corazón de la charla. Este es el paso que nadie da, y por eso a nadie le funciona.

Son las MISMAS doce tarjetas que mostraste desparramadas en la placa 08, hace media hora. Lo único que cambió es el orden.

QUE SE NOTE. Empezá por ahí: "¿Se acuerdan de esto?"

(dejá que las reconozcan — si hacen el gesto, el bloque ya está ganado)

"Es lo mismo. No agregué nada, no compré nada, no programé nada. Lo junté."

(pausá)

"Enseñarle no es configurarla ni entrenarla. Es juntar lo que ya tenés y ponerlo en un mismo lugar."

NO digas "segundo cerebro" ni ninguna metodología con nombre. La frase de la placa alcanza.`,
    el: (
      <Slide pad={false}>
        <Juntas />
      </Slide>
    ),
  },
  {
    title: "Enseñar · dónde lo ponés",
    notes: `LA PLACA QUE COPIAN. Es la más literal de la hora y tiene que serlo. Bajá la velocidad.

"Esto es un proyecto. Se crea en dos clics y adentro van los archivos de tu academia."

(señalá la lista)

"Tres planillas y cinco documentos. Los que ya tenés. Nadie armó nada nuevo."

(pausá)

"Y esto es lo importante: se cargan UNA vez. Todas las conversaciones que abras dentro de ese proyecto ya los tienen. No los volvés a subir nunca."

"Después solo actualizás lo que cambia. La grilla nueva en marzo, los aranceles cada trimestre. Diez minutos."

NO EXPLIQUES LOS PASOS EN PANTALLA. Cómo se crea un proyecto y cómo se suben archivos va en la guía que se llevan, no en una placa. Acá alcanza con que vean la forma de la cosa.

SI PREGUNTAN QUÉ HERRAMIENTA: nombrala sin vender. Cualquiera que permita cargar archivos sirve; lo que cambia el resultado es qué le cargás, no cuál elegís.`,
    el: (
      <Slide pad={false}>
        <Captura
          rotulo="Paso 02 · Enseñar"
          archivo="02-proyecto.png"
          espera="Un proyecto de ChatGPT llamado Alborada, con los ocho archivos cargados."
          veredicto=""
        />
      </Slide>
    ),
  },
  {
    title: "Enseñar · qué no subir",
    notes: `VA ACÁ Y NO AL FINAL. Es exactamente el momento en que la sala está pensando "¿y esto es seguro?". Contestarlo antes de que lo pregunten te compra todo el bloque.

"Y acá hay una pregunta que se están haciendo, así que la contesto yo."

(pausá)

"No sube todo. Sube lo que hace falta para trabajar, y no sube lo que identifica a una persona."

EL TRUCO PRÁCTICO, que es lo único que tienen que recordar:
"Se trabaja con legajo. La planilla que relaciona el legajo con el nombre y el teléfono se queda afuera. Cuando la IA te devuelve el trabajo, vos cruzás los legajos con los nombres al final, en tu planilla."

(la línea de abajo, despacio)

"No necesita saber cómo se llaman. Necesita saber qué les pasa."

SI SON MENORES, subrayalo: los nombres de chicos no salen de la academia. Es lo que más tranquiliza a una sala de directores.`,
    el: (
      <Slide pad={false}>
        <Datos />
      </Slide>
    ),
  },
  {
    title: "Enseñar · una tarde",
    notes: `CIERRE DEL PASO 2. Mata la objeción más frecuente antes de que aparezca: "no tengo tiempo para ponerme con esto".

"¿Cuánto lleva todo esto?"

(pausá — dejá que piensen "una semana")

"Una tarde."

(pausá)

"Y se hace una sola vez. Después vas agregando lo que cambia: la grilla nueva, los aranceles del trimestre. Diez minutos."

ES EL MOMENTO DE MAYOR DISPOSICIÓN DE LA HORA: acabás de decir que cuesta una tarde y todavía no mostraste lo que se gana. De acá salís directo a los casos.

"Eso es todo el paso dos. Ahora miren lo que se puede hacer con eso."`,
    el: (
      <Slide pad={false}>
        <div className="flex h-full flex-col justify-center px-[120px]">
          <EncabezadoPaso n="02" nombre="Enseñar" titulo="Cuánto lleva" />
          <Statement xl>Una tarde.</Statement>
          <p className="mt-[52px] text-[46px] leading-snug text-muted-foreground">
            Y se hace una sola vez.
          </p>
        </div>
      </Slide>
    ),
  },
  {
    title: "Paso 03 · Usar",
    notes: `PORTADA DEL PASO 3. Quince segundos, y con energía: acá arranca la mejor parte de la charla.

"Paso tres. Usar."

(pausá)

"Preguntarle, y pedirle trabajo terminado. Tres casos, todos sobre la misma academia que acabamos de cargar."

Y ARRANCÁS. Son diez minutos y es lo que vinieron a ver.`,
    el: (
      <Slide pad={false}>
        <PortadaPaso n="03" />
      </Slide>
    ),
  },
  {
    title: "Caso 1 · la pregunta",
    notes: `ES LA MISMA PREGUNTA DE LA PLACA 08. Decilo: "¿Se acuerdan de esta?"

Prometiste esto hace media hora, cuando mostraste las doce fuentes desparramadas. Es el momento de pagarlo.

"Cuatro documentos distintos. Vamos a ver qué contesta."`,
    el: (
      <Slide pad={false}>
        <Pregunta
          titulo="Caso 1 · La consulta"
          prompt="Una familia pide la baja el 20 de octubre y tiene una cuota impaga. ¿Qué corresponde?"
        />
      </Slide>
    ),
  },
  {
    title: "Caso 1 · el resultado",
    notes: `TRES COSAS, EN ESTE ORDEN. No las mezcles y no las apures.

1. ARRANCÁ POR EL NOMBRE:
"Lo primero: dice «Instituto Alborada». Sabe de qué academia le estoy hablando."

2. SEÑALÁ LOS CHIPS GRISES —son la prueba visual y no hay que explicarla—:
"¿Ven esas etiquetas? «Reglamento interno». «Acuerdo de inscripción». Te está diciendo de qué archivo sacó cada cosa. No dice 'creo que son treinta días': dice dónde lo leyó. Eso es lo que te deja chequearlo."

3. (bajá la voz) "Y ahora miren esto."
"El reglamento dice treinta días de aviso. Pero el acuerdo que firmó la familia dice quince."

(pausá larga)

"Eso nadie se lo pidió. Lo encontró porque tenía los dos documentos adelante al mismo tiempo. Algo que una persona no puede hacer."

ES EL MOMENTO MÁS IMPORTANTE DEL BLOQUE.

Y SI QUERÉS EL REMATE: "Esta contradicción está en los papeles de esa academia desde que se imprimieron. Nadie la había visto."`,
    el: (
      <Slide pad={false}>
        <Resultado
          titulo="Caso 1 · La consulta"
          archivo="c1-respuesta-reglamento.png"
          muestra="La respuesta con los artículos 4.1, 2.4 y 2.5 citados — y el aviso de que el acuerdo firmado dice 15 días y no 30."
        />
      </Slide>
    ),
  },
  {
    title: "Caso 1 · qué ganás",
    notes: `"Hoy esta pregunta tiene dos respuestas posibles, según quién esté en recepción."

(pausá)

"Lo que se gana acá no son minutos. Es que la academia tenga UNA respuesta."

Y EL LÍMITE, que conviene decir vos antes de que lo piensen ellos:
"Ojo: cuál de las dos reglas vale no lo decide esto. Te muestra que hay dos. Elegir es de ustedes."

Es la primera vez en la charla que declarás algo que NO hace. Decilo sin incomodidad: es lo que te da permiso para el resto.`,
    el: (
      <Slide pad={false}>
        <Ganancia
          titulo="Caso 1 · La consulta"
          principal={"La misma respuesta,\nla dé quien la dé."}
          detalle="Acá lo que ganás no es tiempo. Es que la academia tenga una sola respuesta."
          puntos={[
            "Viene con el artículo citado, así que se puede chequear.",
            "Recepción contesta sin interrumpir a nadie.",
            "Y te muestra dónde tus propios papeles se contradicen.",
          ]}
        />
      </Slide>
    ),
  },
  {
    title: "Caso 2 · la pregunta",
    notes: `ACÁ ESTÁ EL GOLPE DE LA CHARLA. Bajá el ritmo antes de largarlo.

"Esta es la que a mí más me impresionó la primera vez."

(pausá)

"Le pido que revise la planilla contra los pagos y contra el reglamento. Una sola instrucción."

NO ANTICIPES LOS HALLAZGOS. Todo el efecto depende de que aparezcan en pantalla sin aviso.`,
    el: (
      <Slide pad={false}>
        <Pregunta
          titulo="Caso 2 · La auditoría"
          prompt="Revisá la planilla de alumnos contra la de pagos y contra el reglamento. Decime todo lo que esté mal o no cierre."
        />
      </Slide>
    ),
  },
  {
    title: "Caso 2 · el resultado",
    notes: `SEÑALÁ SOLO DOS O TRES. La lista entera es larga y si los leés todos se diluye.

Primero dejá cinco segundos en silencio, que la vean completa. El volumen ya dice algo.

LOS QUE YO ELEGIRÍA, en este orden:

1. "Legajo 454. Está en dos comisiones y se le facturaron las dos. Ocho meses."
   (pausá — que hagan la cuenta solos)

2. "Doce alumnos rindieron debiendo dos cuotas o más. El reglamento de ellos mismos dice que con dos cuotas impagas no se rinde."
   (este es el mejor: no es un error de carga, es el reglamento incumplido sin que nadie se diera cuenta)

3. "Y estas comisiones tienen tres y cinco alumnos. El mínimo que fija su propio reglamento es seis."

EL REMATE: "Ninguno de estos errores los creó la IA. Ya estaban. Lo único que pasó es que alguien los miró."

---

VERIFICADO CONTRA LOS DATOS (29/09): los diez hallazgos son reales, ninguno inventado.
Los dos que parecen redondeados son exactos: son 14 alumnos con deuda pero 12 que rinden
—excluyó a los dos de cursos complementarios, que no se evalúan— y son 5 cuotas al 20%
exacto, excluyendo una sexta más barata que es la doble facturación y no un descuento.

Y encontró cosas que no estaban plantadas: los 9 con "Pago anual 10%" que igual pagan mes
a mes, y los 12 que rindieron con deuda. Si alguien te discute un número, están todos
chequeados.

ACÁ ENTRAN, SIN CASO APARTE, los dos temas que pide Jordan: alumnos que se están yendo y
comisiones que no cierran.`,
    el: (
      <Slide pad={false}>
        <Resultado
          titulo="Caso 2 · La auditoría"
          archivo="c2-hallazgos.png"
          muestra="El listado de hallazgos con legajo y motivo: la doble facturación, los legajos repetidos, el pago de un legajo que no existe, las comisiones por debajo del mínimo."
        />
      </Slide>
    ),
  },
  {
    title: "Caso 2 · qué ganás",
    notes: `LA PLACA QUE JUSTIFICA LA CHARLA ENTERA. Decila despacio.

"Acá el antes no es 'tardaba mucho'. Es que no se hace."

(pausá)

"Nadie revisa ciento setenta y tres filas contra mil trescientos pagos. No porque no quieran: porque no hay cuándo."

Y LA ACOTACIÓN OBLIGATORIA, que está anotada desde el principio:
"En una academia de cuarenta alumnos esto no les devuelve semanas. Les devuelve cosas que hoy no hacen."

Si te la salteás y alguien de una academia chica hace la cuenta, perdés credibilidad para todo lo que sigue.`,
    el: (
      <Slide pad={false}>
        <Ganancia
          titulo="Caso 2 · La auditoría"
          principal={"Plata, no tiempo."}
          detalle="Una alumna facturada dos veces durante ocho meses. Tres comisiones abiertas por debajo del mínimo del reglamento."
          puntos={[
            "Es trabajo que hoy no se hace: nadie revisa 173 filas contra 1.363 pagos.",
            "Los alumnos que se están yendo aparecen antes de que se vayan.",
            "Y sale con el legajo y el motivo, para poder ir a arreglarlo.",
          ]}
        />
      </Slide>
    ),
  },
  {
    title: "Caso 3 · la pregunta",
    notes: `EL ÚLTIMO CASO, y el que la sala está esperando desde el minuto seis. Es la situación que más duele de las cuatro que mostraste.

"Y llegamos a la que todos estaban esperando."

(pausá)

"Ciento sesenta y cinco comprobantes. Todos los meses. Uno por uno."

Leé el pedido despacio: le estás pidiendo que cruce dos planillas y arme un archivo, no que escriba un texto.

AVISÁ DE ENTRADA QUE ESTA ES DISTINTA. Es la única de las cuatro donde la IA no termina el trabajo, y es mejor que lo digas vos antes de que lo piensen ellos:

"Les adelanto algo: este es el único donde no llega hasta el final. Ya van a ver por qué."`,
    el: (
      <Slide pad={false}>
        <Pregunta
          titulo="Caso 3 · Las facturas"
          prompt="Con la planilla de alumnos y la de pagos, armame el detalle de los comprobantes de septiembre: legajo, importe, período y concepto, listo para importar."
        />
      </Slide>
    ),
  },
  {
    title: "Caso 3 · el resultado",
    notes: `Dejá cinco segundos en silencio. Y después señalá TRES cosas, en este orden.

1. EL ARCHIVO, que es lo que la diferencia de todo lo anterior:
"Abajo hay dos links. Un CSV y un Excel. No me escribió cómo hacerlo: me lo hizo."

(pausá)

"Esto es lo que quiero que se lleven de la palabra «producir». No es un texto que después tenés que armar. Es el archivo."

2. EL NÚMERO, que tiene truco y conviene que lo saques vos:
"Ciento cuarenta y cinco pagados, dieciocho pendientes. Ciento sesenta y tres."

(pausá)

"¿Y por qué ciento sesenta y tres, si la academia tiene ciento sesenta y cinco alumnos?"

(pausá — dejá que lo piensen)

"Porque hay dos que no tienen arancel cargado. Los mismos dos que encontró la auditoría hace cinco minutos."

ESE ES EL MEJOR MOMENTO DEL BLOQUE. Dos casos distintos, el mismo agujero. Y no lo
armaste vos: salió así.

3. Y LA ACLARACIÓN DE DATOS, obligatoria porque si no contradice la placa de qué no subir:
"Ojo: esto sale con el legajo. Los nombres y los CUIT los cruzo yo al final, en mi planilla."

---

VERIFICADO (29/09): son 163 cuotas de septiembre en la planilla —145 pagadas y 18
pendientes— contra 165 alumnos activos. Los dos que faltan son los legajos 0318 y 0385,
que están sin plan ni arancel. El número cierra.`,
    el: (
      <Slide pad={false}>
        <Resultado
          titulo="Caso 3 · Las facturas"
          archivo="c3-facturas.png"
          muestra="El detalle de comprobantes listo para importar: legajo, concepto, período e importe, con los descuentos ya aplicados."
        />
      </Slide>
    ),
  },
  {
    title: "Caso 3 · qué ganás",
    notes: `LA PLACA MÁS HONESTA DE LA CHARLA. No la suavices: decir qué NO hace es lo que te da permiso para todo lo demás.

"Ciento sesenta y cinco formularios contra un archivo."

(pausá)

"Pero quiero ser muy claro con esto, porque si no el lunes se chocan con la pared."

(y acá bajás el ritmo)

"La IA no entra al portal. No emite. No firma nada. Lo que hace es dejarte el archivo armado, con los datos cruzados y sin los errores de la planilla. El botón lo seguís apretando vos."

(pausá)

"Y aun así, lo que desaparece es tipear el mismo formulario ciento sesenta y cinco veces."

POR QUÉ CIERRA EL BLOQUE CON UNA LIMITACIÓN, y está bien que así sea: la sala acaba de ver tres casos seguidos funcionando. Si cerrás con una quinta maravilla, sonás a vendedor. Cerrando con "hasta acá llega" sonás a alguien que lo usa.

De acá salís al paso 4: "Y ahora la pregunta que decide si esto te sirve o no: ¿quién hace esto, y cuándo?"`,
    el: (
      <Slide pad={false}>
        <Ganancia
          titulo="Caso 3 · Las facturas"
          principal={"165 formularios\n→ un archivo."}
          detalle="La emisión sigue siendo tuya. Lo que desaparece es tipear el mismo formulario ciento sesenta y cinco veces."
          puntos={[
            "Sale con el legajo, el importe y el período ya cruzados, con los descuentos aplicados.",
            "La alumna facturada dos veces no se te vuelve a colar.",
            "Pero la IA no entra al portal ni emite: el botón lo apretás vos.",
          ]}
        />
      </Slide>
    ),
  },
  {
    title: "Paso 04 · Sistematizar",
    notes: `PORTADA DEL PASO 4. Quince segundos.

"Paso cuatro. Sistematizar."

(pausá)

"Convertirlo en rutina, con responsable. Y este, igual que el primero, lo hacen ustedes."

SEÑALÁ LA LÍNEA DE ARRIBA: "Fíjense que estamos en el último. Y que el primero y el último son los dos que no tienen IA."

Es la tercera vez que decís eso en la hora. La tercera es la que queda.`,
    el: (
      <Slide pad={false}>
        <PortadaPaso n="04" />
      </Slide>
    ),
  },
  {
    title: "Sistematizar · las tres preguntas",
    notes: `ARRANCA EL PASO 4, y es el paso que decide si todo lo anterior sirvió de algo.

"Y acá llegamos al paso que casi nadie da, y es por el que todo esto se cae."

(pausá)

"Porque lo que pasa habitualmente es esto: alguien prueba, funciona, todos se entusiasman — y no se vuelve a abrir nunca más."

MIRÁ LA SALA CUANDO LO DIGAS. Es lo que más se reconoce de toda la hora.

Después las tres preguntas, una por una:

1. "¿Quién lo ejecuta? Con nombre y apellido. Si la respuesta es 'alguien', no lo ejecuta nadie."
2. "¿Cada cuánto? Y atado a una fecha que ya exista en tu calendario, no a una que inventes para esto."
3. "¿Qué se hace con el resultado? Si nadie lo mira, no armaste una rutina: agregaste una tarea."

Y DESPUÉS DÁ LOS EJEMPLOS DE BOCA, que es donde suenan a experiencia y no a lámina:
"Cada consulta que entra, recepción le pregunta al proyecto antes de contestar. Antes del cierre de mes, coordinación revisa la planilla contra los pagos. El día uno, administración arma el detalle de comprobantes."

(pausá)

"Fíjense que son los mismos tres casos que acaban de ver. No agregué nada."

LA OBJECIÓN QUE HAY QUE MATAR ACÁ — es la que más frena:
"Y las fechas no las inventás. El cierre de mes ya existe. El día uno ya existe. No le estás agregando nada al calendario: le estás poniendo una herramienta al trabajo que ya estaba."

SIMETRÍA CON MAPEAR, y vale decirla: "Fíjense que el primero y el último paso son tres preguntas cada uno. Y ninguno de los dos tiene nada de inteligencia artificial."`,
    el: (
      <Slide pad={false}>
        <Preguntas />
      </Slide>
    ),
  },
  {
    title: "Sistematizar · dónde quedaste",
    notes: `CIERRA EL PASO 4 y prepara el bloque de límites. Es la placa que te blinda de la decepción.

"Y quiero ser claro con dónde quedaron parados."

(las tres, rápido — no te detengas en manual)

"Todo lo que vieron hoy es el del medio. Asistido. Lo sigue ejecutando una persona: lo dispara, lo revisa, lo corrige. Pero deja de hacerlo desde cero."

(pausá)

"El tercero existe. Que pase solo, sin que nadie lo dispare."

ACÁ ESTÁ EL PUENTE AL BLOQUE QUE SIGUE — no lo cierres todavía:
"Pero antes de hablar de eso, tengo que decirles qué NO hace esto. Porque si me quedo solo con lo bueno, el lunes se van a chocar con la pared y me van a putear."

NO PROMETAS EL NIVEL TRES. Se muestra que existe, no se enseña. Eso ya estaba decidido y conviene sostenerlo.`,
    el: (
      <Slide pad={false}>
        <Niveles />
      </Slide>
    ),
  },
  {
    title: "Antes de cerrar",
    notes: `PORTADA DEL ÚLTIMO BLOQUE. Quince segundos. Es un cartel de ruta: decís qué viene y pasás.

Venís de mostrar tres casos funcionando. La sala está arriba. Frenala.

"Antes de cerrar quiero decirles tres cosas. Y son las que menos les van a gustar."

(pausá — que se rían si se ríen)

"Hasta dónde llega esto. Qué riesgos tiene. Y qué sigue dependiendo de ustedes."

Y PASÁS. No expliques ninguna acá.

POR QUÉ ESTE BLOQUE EXISTE: si cerrás con las demos, sos un vendedor. Si seguís con esto,
sos alguien que lo usa. Es lo que te separa de todo lo que les van a ofrecer este año.`,
    el: (
      <Slide>
        <p className="mb-[52px] font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Antes de cerrar
        </p>

        <h2 className="font-heading text-[124px] font-bold leading-none tracking-[-0.035em] text-foreground">
          Hasta dónde llega
        </h2>

        <ul className="mt-[64px] space-y-[26px]">
          {[
            "Dónde sirve y dónde no",
            "Qué riesgos tiene",
            "Y qué sigue dependiendo de vos",
          ].map((t) => (
            <li key={t} className="flex items-baseline gap-[28px]">
              <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-[hsla(0,0%,100%,0.3)]" />
              <span className="text-[44px] leading-tight text-muted-foreground">{t}</span>
            </li>
          ))}
        </ul>
      </Slide>
    ),
  },
  {
    title: "Lo que no hace",
    notes: `ARRANCA EL BLOQUE MÁS IMPORTANTE PARA TU CREDIBILIDAD. La sala acaba de ver tres casos funcionando. Si cerrás ahí, sos un vendedor. Si seguís con esto, sos alguien que lo usa.

"Y ahora lo que no hace. Porque si me quedo solo con lo bueno, el lunes se chocan con la pared."

Las tres, una por una, sin apurar:

1. "No decide. Les muestra que el reglamento y el acuerdo dicen cosas distintas. Cuál de las dos vale, lo eligen ustedes."
2. "No sabe lo que no está escrito. Si la regla vive solo en tu cabeza, para ella no existe. Y esto es más común de lo que parece."
3. "Y no se hace cargo. Lo que sale con el nombre de tu academia lo firmás vos."

Y DESPUÉS DE LAS TRES, CERRÁ CON EL GIRO —es lo que hace que la placa no sea una lista de defectos—:

"Fíjense que las tres dicen lo mismo al revés. No decide, así que decidís vos. No se hace cargo, así que firmás vos. Cada cosa que no hace es una cosa que seguís haciendo ustedes."

DECILO SIN INCOMODIDAD. No es una disculpa: es lo que te separa de todo lo que les van a vender este año.`,
    el: (
      <Slide pad={false}>
        <NoHace />
      </Slide>
    ),
  },
  {
    title: "¿Entra o no entra?",
    notes: `LA PLACA QUE SE LLEVAN PARA DECIDIR SOLOS. Es el equivalente del criterio de Mapear, pero
para saber si un problema entra o no.

"¿Cómo saben si algo que se les ocurra entra o no entra?"

(dejá que lean las dos columnas — no las leas vos)

Y DESPUÉS EXPLICÁ LA COLUMNA DE LA DERECHA, que es la que no es obvia. Las cuatro PARECEN
preguntas de datos, y por eso son las peligrosas:

· "Por qué se te va una familia. La planilla te dice quién se fue. El porqué estaba en una
   conversación que capaz nadie tuvo."
· "Si a esta familia le hacés una excepción. Ve la regla. No sabe que la madre se quedó sin
   trabajo en julio."
· "Si un docente está funcionando. Las notas y la asistencia no te dicen qué pasa en el aula."
· "Cuánto aumentar en marzo. Eso es leer tu mercado, no hacer una cuenta."

(pausá, y el remate)

"De este lado la respuesta está en tus archivos. De este otro está en tu cabeza, o en una
conversación que todavía no tuviste."

SI ALGUIEN PREGUNTA POR UN CASO SUYO, usá el criterio en voz alta con su ejemplo. Es el
mejor momento de la hora para una pregunta de la sala, porque la respuesta la da la placa.`,
    el: (
      <Slide pad={false}>
        <CuandoSirve />
      </Slide>
    ),
  },
  {
    title: "Los riesgos",
    notes: `LOS TRES QUE IMPORTAN. Ninguno es técnico: los tres son de gestión.

1. LOS DATOS — acá va el porqué de lo que dijimos en el paso dos:

"Lo que subís queda en un servidor que no es tuyo. Y son datos de menores, con lo cual el responsable sos vos, no el proveedor."

(pausá)

"Por eso se trabaja con legajo. Y fíjense que no es un sacrificio: funciona exactamente igual. La IA no necesita saber que se llama Dante."

2. LO QUE SALE, LO FIRMÁS VOS:

"Todo lo que vieron hoy sale bien escrito. Y eso es justamente el riesgo: si está mal, también va a estar bien escrito."

"Si nadie lo lee antes de mandarlo, sale con el nombre de tu academia."

3. Y EL QUE MÁS ME IMPORTA — bajá la voz acá:

"A mano, cuando te equivocás, se equivoca con una familia."

(pausá)

"Con esto, se equivoca con las ciento quince de una."

ESE ES EL ARGUMENTO A FAVOR DE REVISAR, y es el que justifica el paso cuatro entero. No
lo digas como advertencia moral: decilo como un dato operativo.`,
    el: (
      <Slide>
        <p className="mb-[52px] font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Los riesgos
        </p>

        <ul className="space-y-[44px]">
          {[
            ["Los datos salen de tu academia", "Quedan en un servidor que no es tuyo, y el responsable sos vos. Por eso, legajo y no nombre."],
            ["Lo que sale, lo firmás vos", "Si está mal, también va a estar bien escrito."],
            ["Un error se multiplica", "A mano te equivocás con una familia. Acá, con las ciento quince."],
          ].map(([t, d]) => (
            <li key={t}>
              <p className="font-heading text-[56px] font-bold leading-none tracking-[-0.025em] text-foreground">
                {t}
              </p>
              <p className="mt-[16px] text-[33px] leading-snug text-muted-foreground/70">{d}</p>
            </li>
          ))}
        </ul>
      </Slide>
    ),
  },
  {
    title: "Lo que hace falta",
    notes: `LA PLACA QUE CONTESTA LO QUE NADIE PREGUNTA EN VOZ ALTA. Va rápida: noventa segundos.

Hasta acá les dijiste "sin comprar nada" varias veces, y es verdad del método. Pero la
herramienta sí se paga, y si no lo decís vos lo descubren el lunes y se sienten engañados.

"Dos cosas prácticas antes de terminar."

1. LA LICENCIA:

"Con la versión gratis pueden probar. Y se van a quedar cortos rápido: les limita cuántos
archivos suben y cuánto pueden pedirle por día."

(pausá)

"La paga ronda los veinte dólares por mes. Más lo que les sume la tarjeta."

(y el ancla, que es lo que lo vuelve chico)

"Es menos que una hora de secretaría."

NO RECOMIENDES UNA HERRAMIENTA. Si preguntan cuál, la respuesta es la misma de siempre:
cualquiera que permita cargar archivos sirve; lo que cambia el resultado es qué le cargás.

2. LOS ARCHIVOS — acá contestás a la mitad de la sala que no usa planillas:

"Si la gestión vive en planillas, ya tienen todo. Si usan un sistema, lo exportan."

(pausá)

"Que la IA se conecte sola a ese sistema también se puede. Pero eso ya es una integración,
y ahí sí necesitan a alguien técnico."

ES LA SEGUNDA VEZ QUE DECÍS ESTO en cinco minutos —la primera fue en "sola no emite"— y
está bien que se repita: es el borde del alcance, y es lo que te separa del que promete
que la IA hace todo.

Y DE ACÁ SALÍS AL LUNES: "Y ahora sí, lo único que tienen que hacer al salir."`,
    el: (
      <Slide>
        <HaceFalta />
      </Slide>
    ),
  },
  {
    title: "El lunes",
    notes: `LO ÚNICO QUE TIENEN QUE HACER AL SALIR. Cuatro pasos aplicados a un proceso solo.

"Y si se llevan una sola cosa de esta hora, que sea esta."

Los cuatro, rápido:

1. "Elijan uno. Uno solo, de la lista que hicimos. El que diga que sí a las tres preguntas."
2. "Junten los archivos. Los que ya tienen. Una tarde."
3. "Pruébenlo con un caso real. No con uno inventado: con el de esta semana."
4. "Y decidan quién lo ejecuta. Con nombre, y atado a una fecha que ya exista."

(pausá)

"Un proceso. Una tarde. Sin comprar nada."

NO AMPLÍES. Cuanto más chico suene el primer paso, más gente lo va a dar.`,
    el: (
      <Slide pad={false}>
        <Lunes />
      </Slide>
    ),
  },  {
    title: "El regalo",
    notes: `LA PLACA DEL REGALO. Va sola, antes de las preguntas, y es la única de la hora donde
les pedís algo a ellos.

"Antes de las preguntas, les dejo algo."

(pausá, y dejá que miren el QR — NO lo expliques, un QR no necesita instrucciones)

"Es la guía con los cuatro pasos y las tres consultas que usé hoy. Las consultas están
escritas tal cual, para que las copien y las peguen."

(pausá)

DECÍ LA URL EN VOZ ALTA UNA VEZ, para los que están lejos o no escanean.

Y ACÁ VIENE LO ÚNICO QUE IMPORTA DE ESTA PLACA — aguantá el silencio:

"Escanéenlo ahora, que después me olvido de volver a ponerlo."

(y CALLATE veinte segundos. Miralos sacar el teléfono. Es incómodo y es el precio de
los cuarenta mails.)

Si no aguantás ese silencio, la mitad de la sala piensa "después lo hago" y no lo hace.

LA AUDITORÍA es la línea chica de abajo y se dice al pasar, sin vender:
"Y si quieren, les miro un proceso de su academia sin cargo. Eso va en el mail."

Si te incomoda ofrecerla desde el escenario, saltéala: igual va en el mail del día cuatro.
Pero decirla acá duplica las respuestas, porque la escuchan de tu boca y no de un mail.

---

De acá pasás a preguntas, donde el QR sigue estando. La gente que no lo escaneó ahora lo
escanea mientras contestás.`,
    el: (
      <Slide pad={false}>
        <Regalo />
      </Slide>
    ),
  },
  {
    title: "Preguntas",
    notes: `LA ÚLTIMA. Y SE QUEDA EN PANTALLA TODAS LAS PREGUNTAS — ese es el truco: la gente saca el teléfono mientras vos contestás, no antes.

"Muchas gracias."

(pausá — dejá que aplaudan si aplauden, no lo cortes)

"Y ahora sí, preguntas."

EL MAIL ESTÁ ABAJO A LA IZQUIERDA. No lo leas en voz alta: queda proyectado los diez
minutos del Q&A y el que lo quiera lo saca con el teléfono. Decirlo suena a que estás
pidiendo que te escriban.

NO EXPLIQUES EL QR. Un QR en pantalla no necesita instrucciones.

DECÍ LA URL EN VOZ ALTA UNA VEZ, para los que no escanean o están lejos.

NO LA SAQUES HASTA QUE TE BAJEN DEL ESCENARIO. Cada minuto que esté proyectada es otro
teléfono que la escanea.

---

QUÉ TIENE QUE HABER DEL OTRO LADO:
· La guía en PDF, descargable sin fricción
· Un campo de mail, uno solo
· Y abajo, la auditoría: "miramos un proceso de tu academia, sin cargo"

La URL está en Cierre.tsx, en la constante URL. Cambiala por la definitiva.`,
    el: (
      <Slide pad={false}>
        <Cierre />
      </Slide>
    ),
  },
];
