import { useState } from "react";

// Cuando tengas las imágenes reales, asigna la ruta en `image`
// (por ejemplo: image: "/images/galeria/aula-1.jpg").
const ITEMS = [
  {
    id: 1,
    title: "Aula inmersiva",
    image: null,
    gradient: "linear-gradient(135deg, #2f67b8 0%, #14376f 55%, #081f45 100%)",
  },
  {
    id: 2,
    title: "Auditorio virtual",
    image: null,
    gradient: "linear-gradient(135deg, #3a5c9e 0%, #1b3a74 55%, #0a1f45 100%)",
  },
  {
    id: 3,
    title: "Laboratorio interactivo",
    image: null,
    gradient: "linear-gradient(135deg, #2a6da6 0%, #123c74 55%, #071c3f 100%)",
  },
  {
    id: 4,
    title: "Campus abierto",
    image: null,
    gradient: "linear-gradient(135deg, #3f6bb5 0%, #1c4482 55%, #0a2248 100%)",
  },
  {
    id: 5,
    title: "Sala de exposiciones",
    image: null,
    gradient: "linear-gradient(135deg, #255e96 0%, #103567 55%, #061834 100%)",
  },
];

function Arrow({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const total = ITEMS.length;

  const go = (direction) =>
    setActive((current) => (current + direction + total) % total);

  return (
    <section id="galeria" className="gallery-section">
      <div className="container">
        <div className="gallery">
          {ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`gallery__layer${i === active ? " is-active" : ""}`}
              style={
                item.image
                  ? { backgroundImage: `url(${item.image})` }
                  : { background: item.gradient }
              }
              aria-hidden="true"
            />
          ))}

          <div className="gallery__grid" aria-hidden="true" />
          <div className="gallery__shade" aria-hidden="true" />

          <div className="gallery__content">
            <h2 className="gallery__title">
              Experiencias en el
              <span>Metaverso</span>
            </h2>
          </div>

          <button
            type="button"
            className="gallery__arrow gallery__arrow--prev"
            aria-label="Experiencia anterior"
            onClick={() => go(-1)}
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            className="gallery__arrow gallery__arrow--next"
            aria-label="Siguiente experiencia"
            onClick={() => go(1)}
          >
            <Arrow direction="right" />
          </button>

          <div
            className="gallery__thumbs"
            role="group"
            aria-label="Experiencias del metaverso"
          >
            {ITEMS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`gallery__thumb${
                  i === active ? " is-active" : ""
                }`}
                aria-label={`Ver ${item.title}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                {item.image ? (
                  <img src={item.image} alt="" />
                ) : (
                  <span style={{ background: item.gradient }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
