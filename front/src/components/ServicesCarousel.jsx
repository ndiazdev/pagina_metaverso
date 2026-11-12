import { useState } from "react";

// Cuando tengas las imágenes, asigna la ruta en `image`
// (por ejemplo: image: "/images/servicios/servicio-1.jpg").
const SLIDES = [
  { id: 1, label: "Servicio 1", image: null },
  { id: 2, label: "Servicio 2", image: null },
  { id: 3, label: "Servicio 3", image: null },
  { id: 4, label: "Servicio 4", image: null },
];

function Chevron({ direction = "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
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

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;

  const go = (direction) =>
    setIndex((current) => (current + direction + total) % total);

  return (
    <div className="services-carousel">
      <h2 className="services-carousel__title">Nuestros servicios</h2>

      <div className="services-carousel__stage">
        {SLIDES.map((slide, i) => {
          const offset = (i - index + total) % total;
          let position = "is-hidden";

          if (offset === 0) position = "is-active";
          else if (offset === 1) position = "is-next";
          else if (offset === total - 1) position = "is-prev";

          return (
            <div
              key={slide.id}
              className={`service-card ${position}`}
              aria-hidden={position === "is-hidden"}
              onClick={() => {
                if (position === "is-prev" || position === "is-next") {
                  setIndex(i);
                }
              }}
            >
              {slide.image ? (
                <img
                  className="service-card__img"
                  src={slide.image}
                  alt={slide.label}
                />
              ) : (
                <span className="sr-only">{slide.label}</span>
              )}
            </div>
          );
        })}

        <button
          type="button"
          className="services-carousel__arrow services-carousel__arrow--prev"
          aria-label="Servicio anterior"
          onClick={() => go(-1)}
        >
          <Chevron direction="left" />
        </button>
        <button
          type="button"
          className="services-carousel__arrow services-carousel__arrow--next"
          aria-label="Siguiente servicio"
          onClick={() => go(1)}
        >
          <Chevron direction="right" />
        </button>
      </div>

      <div
        className="services-carousel__dots"
        role="group"
        aria-label="Seleccionar servicio"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`services-carousel__dot${
              i === index ? " is-active" : ""
            }`}
            aria-label={`Ir al ${slide.label}`}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
