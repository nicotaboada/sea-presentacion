/**
 * Después de Sistematizar: hasta dónde llega esto.
 *
 * Va entero después de las cuatro demos a propósito. Decir qué NO hace, cuando la sala
 * ya vio que funciona, es lo que te separa del que vino a vender. Jordan fue explícito:
 * "keep the limitation in, it makes you more credible".
 */

const Eyebrow = ({ children }: { children: string }) => (
  <p className="mb-[50px] font-heading text-[27px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
    {children}
  </p>
);

/* ---------------- lo que no hace ---------------- */

const NO_HACE: [string, string][] = [
  ["No decide", "Te muestra que el reglamento y el acuerdo dicen cosas distintas. Cuál vale, lo elegís vos."],
  ["No sabe lo que no está escrito", "Si la regla vive solo en tu cabeza, para ella no existe."],
  ["No se hace cargo", "Lo que sale con el nombre de tu academia lo firmás vos."],
];

export const NoHace = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <Eyebrow>Lo que no hace</Eyebrow>

    <ul className="space-y-[36px]">
      {NO_HACE.map(([t, d]) => (
        <li key={t}>
          <p className="font-heading text-[54px] font-bold leading-none tracking-[-0.025em] text-foreground">
            {t}
          </p>
          <p className="mt-[14px] text-[32px] leading-snug text-muted-foreground/70">{d}</p>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------- cuándo sirve y cuándo no ---------------- */

const SIRVE = [
  "Cruzar planillas y documentos",
  "Buscar qué dice tu reglamento",
  "Revisar datos contra tus reglas",
  "Redactar con los datos de cada familia",
  "Armar archivos a partir de lo que ya tenés",
];

/**
 * No son decisiones estratégicas —nadie le pregunta a una IA si abrir una sede—.
 * Son las cuatro que PARECEN de datos y no lo son: la planilla tiene el quién,
 * no el porqué. Esas son las que te van a pedir, y las que te van a hacer quedar
 * mal si las contestás con lo que devuelve.
 */
const NO_SIRVE = [
  "Por qué se te va una familia",
  "Si a esta familia le hacés una excepción",
  "Si un docente está funcionando",
  "Cuánto aumentar en marzo",
];

export const CuandoSirve = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <Eyebrow>¿Entra o no entra?</Eyebrow>

    <div className="grid grid-cols-2 gap-[46px]">
      <div className="rounded-[16px] border border-[hsla(0,0%,100%,0.16)] bg-[hsla(0,0%,100%,0.04)] px-[46px] pb-[42px] pt-[34px]">
        <p className="mb-[28px] font-heading text-[30px] font-bold uppercase tracking-[0.16em] text-foreground">
          Sirve
        </p>
        <ul className="space-y-[20px]">
          {SIRVE.map((t) => (
            <li key={t} className="text-[33px] leading-tight text-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[16px] border border-[#C0392B]/35 bg-[#1e1212]/60 px-[46px] pb-[42px] pt-[34px]">
        <p className="mb-[28px] font-heading text-[30px] font-bold uppercase tracking-[0.16em] text-[#E08B80]">
          No sirve
        </p>
        <ul className="space-y-[20px]">
          {NO_SIRVE.map((t) => (
            <li key={t} className="text-[33px] leading-tight text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

/* ---------------- lo que hace falta para arrancar ---------------- */

/**
 * Las dos preguntas prácticas que nadie hace en voz alta pero todos se hacen:
 * cuánto sale, y si esto sirve cuando la gestión no vive en planillas.
 *
 * Va antes de "El lunes" a propósito: es el requisito para actuar, así que tiene
 * que estar antes de decirles qué hacer.
 */
const HACE_FALTA: [string, string][] = [
  [
    "Una licencia paga",
    "Con la versión gratis probás, y te quedás corto rápido: te limita cuántos archivos subís y cuánto podés pedirle por día. La paga ronda los 20 dólares por mes —más lo que te sume la tarjeta— y es menos que una hora de secretaría.",
  ],
  [
    "Tus archivos, estén donde estén",
    "Si la gestión vive en planillas, ya los tenés. Si usás un sistema, los exportás. Que la IA se conecte sola a ese sistema también se puede, pero eso ya es una integración y ahí sí necesitás a alguien técnico.",
  ],
];

export const HaceFalta = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <Eyebrow>Lo que hace falta</Eyebrow>

    <ul className="space-y-[58px]">
      {HACE_FALTA.map(([t, d]) => (
        <li key={t}>
          <p className="font-heading text-[58px] font-bold leading-none tracking-[-0.025em] text-foreground">
            {t}
          </p>
          <p className="mt-[20px] max-w-[46ch] text-[33px] leading-[1.42] text-muted-foreground/75">
            {d}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------- el primer paso del lunes ---------------- */

/**
 * "Proceso" y "caso" no son lo mismo, y acá se decide si la sala lo entiende:
 * el proceso es el trabajo que se repite, el caso es una vez que ese trabajo
 * ocurre. Se elige UN proceso y se prueba con UN caso de ese proceso.
 */
const LUNES: [string, string][] = [
  ["Elegí un proceso", "De la lista que hicimos. El que diga que sí a las tres preguntas."],
  ["Juntá los archivos", "Los que ya tenés. Una tarde, y una sola vez."],
  ["Probalo con un caso real", "Un caso de ese proceso, de esta semana. No uno inventado."],
  ["Decidí quién lo ejecuta", "Con nombre, y atado a algo que ya pasa: el cierre de mes, o cada consulta que entra."],
];

export const Lunes = () => (
  <div className="flex h-full flex-col justify-center px-[120px]">
    <Eyebrow>El lunes</Eyebrow>

    <ul className="space-y-[32px]">
      {LUNES.map(([t, d], k) => (
        <li key={t} className="flex items-baseline gap-[32px]">
          <span className="font-heading text-[32px] font-bold leading-none text-muted-foreground/35">
            {k + 1}
          </span>
          <div>
            <p className="font-heading text-[52px] font-bold leading-none tracking-[-0.025em] text-foreground">
              {t}
            </p>
            <p className="mt-[14px] text-[31px] leading-snug text-muted-foreground/70">{d}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
