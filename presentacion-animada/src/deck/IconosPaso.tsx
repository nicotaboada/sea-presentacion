/**
 * Un dibujo animado para la portada de cada paso. Van en bucle: la portada se
 * queda quince segundos en pantalla y tiene que seguir viva todo ese rato.
 *
 * Ninguno explica nada por sí solo —el paso lo explica el título— pero cada uno
 * muestra el gesto: elegir de una lista, cargarle los papeles, escribirle, y que
 * eso vuelva a pasar solo todos los meses.
 *
 * Los tiempos están en `index.css`, al final.
 */

const ORO = "#E8D36A";
const TENUE = "hsla(0,0%,100%,0.07)";
const LINEA = "hsla(0,0%,100%,0.16)";

const Marco = ({ children }: { children: React.ReactNode }) => (
  <svg width="360" height="360" viewBox="0 0 360 360" aria-hidden className="shrink-0">
    {children}
  </svg>
);

/* ------------------------------------------------- 01 · Mapear
   Una lista de procesos. El marcador baja y se queda en uno. */

export const IcoMapear = () => (
  <Marco>
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i} transform={`translate(30 ${56 + i * 56})`}>
        <rect
          className={i === 2 ? "ico-fila-elegida" : undefined}
          width="206"
          height="38"
          rx="8"
          fill={TENUE}
        />
        {/* los puntitos de la derecha son la frecuencia: cuántas veces al año pasa */}
        {Array.from({ length: [2, 1, 5, 3, 1][i] }, (_, k) => (
          <circle key={k} cx={228 + k * 18} cy="19" r="5" fill="hsla(0,0%,100%,0.22)" />
        ))}
      </g>
    ))}

    <rect
      className="ico-marcador"
      x="20"
      y="48"
      width="320"
      height="54"
      rx="12"
      fill="none"
      stroke={ORO}
      strokeWidth="2.5"
    />
  </Marco>
);

/* ------------------------------------------------- 02 · Enseñar
   Los papeles que ya tenés entran, de a uno, al modelo. */

const PAPELES = ["Alumnos", "Pagos", "Reglamento", "Grilla"];

export const IcoEnsenar = () => (
  <Marco>
    {/* el modelo: un núcleo con nodos alrededor, latiendo */}
    <g className="ico-modelo">
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <line
            key={a}
            x1="180"
            y1="268"
            x2={180 + 52 * Math.cos(r)}
            y2={268 + 52 * Math.sin(r)}
            stroke={ORO}
            strokeOpacity="0.4"
            strokeWidth="2"
          />
        );
      })}
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <circle
            key={a}
            cx={180 + 52 * Math.cos(r)}
            cy={268 + 52 * Math.sin(r)}
            r="7"
            fill={ORO}
            fillOpacity="0.7"
          />
        );
      })}
      <circle cx="180" cy="268" r="26" fill={ORO} fillOpacity="0.18" stroke={ORO} strokeWidth="2.5" />
      <circle className="ico-nucleo" cx="180" cy="268" r="11" fill={ORO} />
    </g>

    {/* los documentos, de a uno, cayendo adentro */}
    {PAPELES.map((nom, i) => (
      <g key={nom} className="ico-papel" style={{ animationDelay: `${i * 1.5}s` }}>
        <rect x="118" y="44" width="124" height="86" rx="10" fill="hsla(0,0%,100%,0.13)" stroke={LINEA} strokeWidth="1.5" />
        <rect x="134" y="64" width="62" height="5" rx="2.5" fill="hsla(0,0%,100%,0.4)" />
        <rect x="134" y="76" width="92" height="5" rx="2.5" fill="hsla(0,0%,100%,0.28)" />
        <text x="180" y="112" textAnchor="middle" fill="hsla(0,0%,100%,0.82)" fontSize="19" fontFamily="DM Sans, sans-serif" fontWeight="500">
          {nom}
        </text>
      </g>
    ))}
  </Marco>
);

/* ------------------------------------------------- 03 · Usar
   Se escribe, se manda, y devuelve trabajo hecho. */

export const IcoUsar = () => (
  <Marco>
    <rect x="36" y="112" width="288" height="72" rx="18" fill={TENUE} stroke={LINEA} strokeWidth="2" />
    <rect className="ico-tipeo" x="60" y="143" height="10" rx="5" fill="hsla(0,0%,100%,0.5)" />
    <rect className="ico-cursor" x="60" y="136" width="3" height="24" fill={ORO} />
    <circle className="ico-enviar" cx="292" cy="148" r="18" fill={ORO} />
    <path className="ico-enviar" d="M285 148h13M293 143l5 5-5 5" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    <g className="ico-respuesta">
      <rect x="36" y="212" width="288" height="110" rx="16" fill="hsla(0,0%,100%,0.045)" stroke={LINEA} strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="60"
          y={240 + i * 26}
          width={[240, 206, 150][i]}
          height="8"
          rx="4"
          fill="hsla(0,0%,100%,0.3)"
        />
      ))}
    </g>
  </Marco>
);

/* ------------------------------------------------- 04 · Sistematizar
   Vuelve a pasar, y siempre lo ejecuta alguien. */

export const IcoSistematizar = () => (
  <Marco>
    <circle cx="180" cy="180" r="116" fill="none" stroke={LINEA} strokeWidth="2" strokeDasharray="8 10" />

    {/* las cuatro marcas del recorrido: el mes que se repite */}
    {[0, 90, 180, 270].map((a, i) => (
      <circle
        key={a}
        className="ico-hito"
        style={{ animationDelay: `${i}s` }}
        cx={180 + 116 * Math.cos(((a - 90) * Math.PI) / 180)}
        cy={180 + 116 * Math.sin(((a - 90) * Math.PI) / 180)}
        r="8"
        fill={ORO}
      />
    ))}

    <g className="ico-orbita">
      <circle cx="180" cy="64" r="13" fill={ORO} />
    </g>

    {/* en el centro, quien lo ejecuta */}
    <circle cx="180" cy="180" r="54" fill="hsla(0,0%,100%,0.05)" stroke={LINEA} strokeWidth="2" />
    <circle cx="180" cy="166" r="16" fill="hsla(0,0%,100%,0.38)" />
    <path d="M154 212a26 26 0 0 1 52 0z" fill="hsla(0,0%,100%,0.38)" />
  </Marco>
);

export const ICONOS = {
  "01": IcoMapear,
  "02": IcoEnsenar,
  "03": IcoUsar,
  "04": IcoSistematizar,
} as const;
