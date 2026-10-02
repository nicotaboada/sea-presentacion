/**
 * El dibujo de la portada: un robot trabajando sobre la planilla de la academia.
 *
 * Es literal a propósito. Los dos intentos anteriores eran abstractos —barras que
 * se encendían, una red de nodos— y había que interpretarlos. Esto se entiende sin
 * explicación: hay un robot, hay una planilla, y el robot la está tildando.
 *
 * Va abajo a la izquierda, contrapesando los datos del orador que van abajo a la
 * derecha. El título y la bajada se quedan arriba, solos.
 *
 * El ciclo dura cinco segundos y medio y nada se mueve rápido. La portada queda
 * proyectada durante los noventa segundos de la escena de apertura y ahí la sala
 * tiene que mirarlo a él, no a la pantalla. La tecla R lo apaga.
 */

const ORO = "#E8D36A";
const LINEA = "hsla(0,0%,100%,0.18)";
const RELLENO = "hsla(0,0%,100%,0.05)";

/** Una fila por tilde: cinco filas, seis segundos de vuelta. */
const FILAS = [0, 1, 2, 3, 4];
const PASO = 1.1;
const ANCHOS = [132, 104, 148, 92, 120];

const FondoPortada = () => (
  <div aria-hidden className="shrink-0">
    <svg width="470" height="235" viewBox="0 0 620 310">
      {/* ---------- la planilla ---------- */}
      <rect x="8" y="34" width="268" height="248" rx="16" fill={RELLENO} stroke={LINEA} strokeWidth="2" />
      <rect x="8" y="34" width="268" height="44" rx="16" fill="hsla(0,0%,100%,0.05)" />
      <rect x="28" y="50" width="96" height="12" rx="6" fill="hsla(0,0%,100%,0.28)" />

      {FILAS.map((i) => {
        const y = 104 + i * 36;
        return (
          <g key={i}>
            <rect x="30" y={y} width="22" height="22" rx="5" fill="none" stroke={LINEA} strokeWidth="2" />
            <path
              className="robot-tilde"
              style={{ animationDelay: `${i * PASO}s` }}
              d={`M35 ${y + 11.5} l5 5.5 l9 -11`}
              fill="none"
              stroke={ORO}
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              className="robot-fila"
              style={{ animationDelay: `${i * PASO}s` }}
              x="68"
              y={y + 6}
              width={ANCHOS[i]}
              height="11"
              rx="5.5"
            />
          </g>
        );
      })}

      {/* ---------- el robot ---------- */}
      <g>
        {/* antena */}
        <line x1="452" y1="66" x2="452" y2="32" stroke={LINEA} strokeWidth="3" strokeLinecap="round" />
        <circle className="robot-antena" cx="452" cy="22" r="11" fill={ORO} />

        {/* orejas */}
        <rect x="332" y="138" width="16" height="44" rx="8" fill="hsla(0,0%,100%,0.12)" />
        <rect x="556" y="138" width="16" height="44" rx="8" fill="hsla(0,0%,100%,0.12)" />

        {/* cabeza */}
        <rect x="344" y="66" width="216" height="184" rx="44" fill={RELLENO} stroke={LINEA} strokeWidth="2.5" />

        {/* visor */}
        <rect x="374" y="104" width="156" height="78" rx="28" fill="hsla(0,0%,0%,0.45)" stroke="hsla(0,0%,100%,0.10)" strokeWidth="1.5" />

        {/* ojos: miran la planilla cada vez que tilda una fila */}
        <g className="robot-ojos">
          <circle cx="414" cy="143" r="15" fill={ORO} />
          <circle cx="490" cy="143" r="15" fill={ORO} />
        </g>

        {/* boca */}
        <rect x="424" y="206" width="56" height="10" rx="5" fill="hsla(0,0%,100%,0.22)" />
      </g>
    </svg>
  </div>
);

export default FondoPortada;
