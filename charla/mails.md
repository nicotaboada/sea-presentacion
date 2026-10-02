# Los mails de la automatización

Dos mails, una sola automatización en beehiiv.

**Trigger:** Signed up
**Condición:** `UTM source` · equals · `sea`

| Paso | Qué |
|---|---|
| 1 | Send email · **La guía** (sin espera, sale al toque) |
| 2 | Wait · 4 días |
| 3 | Send email · **La auditoría** |

El QR del deck lleva a `https://nicolas-taboada.beehiiv.com/products/guia?utm_source=sea`.
El `utm_source=sea` es lo que hace que estos dos mails salgan y el de devs no.

---

## Mail 1 · La guía

Sale apenas se registran. Es el que importa: si este no llega, el QR fue decorativo.

**Asunto:** Tu guía del Congreso SEA

**Preheader:** Los cuatro pasos y las tres consultas, tal cual las mostré.

---

Hola,

Gracias por escanear el QR.

Acá está la guía: los cuatro pasos y las tres consultas exactas que usé en la charla, para que las copies y las pegues tal cual.

**[ Descargar la guía (PDF) ]**  ← botón, apunta a la URL del PDF

Una sola cosa antes de que la cierres: elegí **un** proceso. No todos. El que se repita más veces al año, se haga siempre igual, y esté escrito en algún lado.

Si te trabás, respondeme este mail. Lo leo yo.

Nicolás Taboada
NimboClass

---

## Mail 2 · La auditoría

Cuatro días después. La charla es viernes, así que este cae el martes: el fin de semana no sirve para nadie y el martes la guía todavía está fresca.

**Asunto:** ¿Querés que mire los números de tu academia?

**Preheader:** Lo mismo que hice con la academia de la charla, con tus planillas.

---

Hola,

¿Llegaste a abrir la guía?

Si llegaste y no supiste por cuál empezar, te propongo algo más directo.

En la charla mostré una auditoría: cruzar la planilla de alumnos contra la de pagos y contra el reglamento, y ver qué no cierra. Alumnos facturados dos veces, legajos duplicados, pagos de legajos que no existen, comisiones por debajo del mínimo que fija tu propio reglamento.

Eso mismo lo puedo hacer con tus planillas, gratis, una vez.

Vos me mandás lo que ya tenés —sin nombres de alumnos, sin DNI, sin teléfonos: con legajo alcanza— y te devuelvo el listado de lo que encontré.

No hay nada que comprar después. Si querés avanzar, hablamos; si no, te quedás con el listado igual.

Respondeme este mail y te digo qué necesito.

Nicolás Taboada
NimboClass

---

## Para probar la automatización ahora

Todavía no tenés la URL del PDF. No esperes: poné cualquier link en el botón
(`https://example.com`) y probá el circuito completo con un mail nuevo.

Lo que estás probando es si beehiiv guarda el `utm_source`, que es lo único
que puede fallar. El link se cambia en treinta segundos después.

Tres cosas a verificar en la bandeja de prueba:

1. Llegó el Mail 1.
2. **No** llegó el de bienvenida de devs.
3. En el detalle del suscriptor, el campo UTM source dice `sea`.

Si el 3 está vacío, beehiiv no propaga el UTM por el flujo de productos:
apagá la automatización de devs hasta después de la charla y mandá la guía a mano.

## Dónde subir el PDF

beehiiv no hostea archivos para los mails. El PDF va afuera:

- **Drive** — arrastrás `guia-nimboclass-sea.pdf`, botón derecho → Compartir →
  "Cualquier persona con el enlace" → Lector → Copiar vínculo.
- **Dropbox** — cambiá el final del link de `?dl=0` a `?dl=1`.
- **Tu dominio** — `nimboclass.com/guia.pdf`. Lo mejor, pero después de la charla.
