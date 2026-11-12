import { useEffect, useState } from "react";
import { METAVERSE_URL } from "../config.js";

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`navbar${scrolled ? " is-scrolled" : ""}${
        open ? " is-open" : ""
      }`}
    >
      <div className="navbar__inner container">
        <a
          className="navbar__brand"
          href="#inicio"
          onClick={() => setOpen(false)}
          aria-label="Campus Virtual Santo Tomás, ir al inicio"
        >
          <img
            src="/images/logo-campus.png"
            alt="Santo Tomás Campus Virtual"
          />
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="nav-menu" className="navbar__menu" aria-label="Navegación principal">
          <ul className="navbar__links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link${
                    activeSection === link.id ? " is-active" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="btn btn--accent navbar__cta"
            href={METAVERSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Comenzar
          </a>
        </nav>
      </div>
    </header>
  );
}
