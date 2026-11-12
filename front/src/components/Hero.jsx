import { METAVERSE_URL } from "../config.js";
import Wave from "./Wave.jsx";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <h1>
            Docente tomasino/a <br />
            bienvenido/a al futuro de la educación.
          </h1>
          <p>
            Revoluciona tus clases universitarias con experiencias inmersivas
            en el metaverso. Conecta con tus estudiantes en entornos virtuales
            innovadores y transforma la manera de enseñar con tecnología de
            vanguardia.
          </p>
          <a
            className="btn btn--accent btn--lg"
            href={METAVERSE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda tu clase en el metaverso
          </a>
        </div>

        <div className="hero__art">
          <span className="hero__glow" aria-hidden="true" />
          <img
            src="/images/inicio.png"
            alt="Docente con gafas de realidad virtual flotando en el metaverso"
          />
        </div>
      </div>
      <Wave fill="#04142f" className="hero__wave" />
    </section>
  );
}
