import { useEffect, useRef, useState } from "react";

// Cuando tengas las imágenes, asigna la ruta en `image`.
const FEATURES = [
  { id: 1, label: "Característica única 1", image: null },
  { id: 2, label: "Característica única 2", image: null },
  { id: 3, label: "Característica única 3", image: null },
  { id: 4, label: "Característica única 4", image: null },
  { id: 5, label: "Característica única 5", image: null },
];

export default function UniqueCarousel() {
  const [active, setActive] = useState(0);
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const centerCard = (behavior) => {
      const card = cardRefs.current[active];
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const viewportRect = viewport.getBoundingClientRect();
      const delta =
        cardRect.left +
        cardRect.width / 2 -
        (viewportRect.left + viewportRect.width / 2);
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const target = viewport.scrollLeft + delta;

      viewport.scrollTo({
        left: Math.min(Math.max(0, target), Math.max(0, maxScroll)),
        behavior,
      });
    };

    centerCard("smooth");
    // Re-centra cuando termina la transición de los anchos.
    const timer = setTimeout(() => centerCard("smooth"), 560);
    const onResize = () => centerCard("auto");
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  return (
    <div className="unique">
      <h2 className="unique__title">Características únicas</h2>

      <div className="unique__viewport" ref={viewportRef}>
        <div className="unique__track">
          {FEATURES.map((feature, i) => (
            <button
              key={feature.id}
              type="button"
              ref={(element) => {
                cardRefs.current[i] = element;
              }}
              className={`unique-card${i === active ? " is-active" : ""}`}
              aria-label={feature.label}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              {feature.image ? (
                <img
                  className="unique-card__img"
                  src={feature.image}
                  alt={feature.label}
                />
              ) : (
                <span className="sr-only">{feature.label}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
