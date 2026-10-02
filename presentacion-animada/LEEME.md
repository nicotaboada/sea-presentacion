# Deck animado

Copia de `presentacion/` con animaciones. **El original no se tocó**: si esto
falla el viernes, levantás `presentacion/` y seguís como si nada.

```bash
cd presentacion-animada
npm run dev      # queda en http://localhost:8099
```

Las 46 placas son las mismas y salen del mismo `slides.tsx`. Lo que cambia es
lo que las rodea y cómo entran.

## Teclas

| | |
|---|---|
| `←` `→` · espacio | pasar de placa |
| `N` | guion |
| `G` | vista general |
| `F` | modo limpio — oculta la barra de abajo. `Esc` vuelve |
| `R` | **apaga las animaciones** |
| `Home` `End` | primera / última |

`R` es el seguro. Si la máquina de la sala se traba con el desenfoque, lo
apretás y todo pasa a aparecer sin transición. Probalo apenas conectes el
proyector, así sabés que está ahí.

## Qué se agregó

**El marco** (`Marco.tsx`) — barra de arriba con el bloque y la numeración,
resplandor de fondo que cambia de temperatura en cada bloque, y la barra de
progreso de abajo: una marca por placa, con un hueco más ancho entre bloques.
De lejos se leen cuatro tramos; de cerca, cuántas placas faltan.

**La transición** — la placa que entra viene del lado hacia el que vas,
desenfocada y un poco más chica. El desenfoque es lo que evita que parezca
un carrusel.

**La cascada** (en `index.css`) — los bloques, las tarjetas de una grilla y los
ítems de una lista entran escalonados. No está en los componentes: se aplica por
posición en el DOM, así cualquier placa nueva anima sola sin tocarla.

**Tres placas con animación propia:**

- *Las facturas* — los comprobantes entran de a uno, lento, mientras un contador
  corre hasta 165. Cuatro formularios se vuelven una mañana entera.
- *La doble carga* — se copia **columna por columna**: se enciende la marca en el
  papel y aparece tipeada en la planilla, casillero por casillero, con un punto
  que cruza la flecha una vez por fecha. La séptima fila se enciende en el papel
  y **no aparece** del otro lado: ésa es Delfina.
- *La consulta* — las doce fuentes derivan sueltas, cada una con su duración y
  su fase. Nunca quedan quietas y nunca se mueven juntas.
- *La forma del trabajo* — los cuatro verbos entran de a uno, lento, al ritmo en
  que los enunciás, y el rombo de la derecha se completa con cada uno hasta
  cerrar en 4/4. Recién después llegan las dos líneas del final.

  **Es la única placa con un tiempo atado a cómo hablás.** Si al practicarla te
  queda corta o larga, tocá `PASO` en `FormaDelTrabajo.tsx` (hoy 2,2 segundos
  entre verbo y verbo): el contador, el rombo y el cierre se acomodan solos.

## Si algo hay que tocar

Los tiempos de la cascada y de las tres placas están todos en `src/index.css`,
al final, con los retardos escritos uno por uno. Los bloques de la charla y sus
límites están en `BLOQUES`, en `Marco.tsx`.

- *El método* — las cuatro tarjetas entran de a una cada 1,1 s, y la barra
  **"Acá entra la IA"** llega al final con un destello dorado y queda latiendo.
  El retardo de la barra viaja en `--t` desde `Metodo.tsx`, así que sigue el
  ritmo de las tarjetas aunque cambies `PASO_T`.
- *Qué no conoce* — los cuatro "tus…" entran rápido, de corrido, porque se
  nombran sin pausa.
- *Cuál elegir primero* — las tres preguntas, de a una cada 1,5 s.
- *Las portadas de los cuatro pasos* — cada una tiene su propio dibujo en bucle
  (`IconosPaso.tsx`): el marcador que baja por la lista y elige un proceso, los
  papeles de la academia entrando al modelo de a uno, el prompt que se escribe y
  vuelve con algo hecho, y el ciclo que gira alrededor de quien lo ejecuta.
- *Los tres casos* — el prompt entra como burbuja azul y abajo quedan los
  puntitos latiendo, que es donde arranca la placa del resultado.
- *Las tres conversaciones* (`Chats.tsx`) — el pedido entra como burbuja, aparecen
  los tres puntitos y después llega la respuesta por bloques.

## Pendiente de decidir

La placa de la doble carga dice **"Alguien lo tipea · fila por fila"**, pero la
animación ahora copia columna por columna. Si te molesta la contradicción, el
texto podría pasar a *"casillero por casillero"* o *"dato por dato"*. Está en
`DobleCarga.tsx`, al final.

## Las capturas reemplazadas

Las placas 12, 13 y 14 eran capturas reales (`public/resultados/00-mail-generico.png`,
`01a-pedido.png`, `01b-respuesta.png`). Ahora son chat animado en `Chats.tsx`, con el
**texto exacto** de esas capturas, errores de tipeo del pedido incluidos.

Los PNG siguen ahí. Si preferís volver a la captura real —se defiende mejor cuando
alguien pregunta si la respuesta fue elegida a medida— alcanza con reponer el
`<Captura …/>` que estaba en `slides.tsx`.
