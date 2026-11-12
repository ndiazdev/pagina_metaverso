const SOCIALS = [
  {
    id: "facebook",
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z",
  },
  {
    id: "instagram",
    label: "Instagram",
    path: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.07 1.07 0 1 1-2.15 0 1.07 1.07 0 0 1 2.15 0zM20.8 8.8c-.07-1.48-.41-2.79-1.49-3.87-1.08-1.08-2.39-1.42-3.87-1.49C13.92 3.36 10.08 3.36 8.56 3.44c-1.48.07-2.79.41-3.87 1.49C3.61 6.01 3.27 7.32 3.2 8.8c-.08 1.52-.08 5.36 0 6.88.07 1.48.41 2.79 1.49 3.87 1.08 1.08 2.39 1.42 3.87 1.49 1.52.08 5.36.08 6.88 0 1.48-.07 2.79-.41 3.87-1.49 1.08-1.08 1.42-2.39 1.49-3.87.08-1.52.08-5.36 0-6.88zm-1.94 8.49a3.04 3.04 0 0 1-1.71 1.71c-1.18.47-3.99.36-5.3.36-1.31 0-4.12.1-5.3-.36a3.04 3.04 0 0 1-1.71-1.71c-.47-1.18-.36-3.99-.36-5.3 0-1.31-.1-4.12.36-5.3a3.04 3.04 0 0 1 1.71-1.71c1.18-.47 3.99-.36 5.3-.36 1.31 0 4.12-.1 5.3.36a3.04 3.04 0 0 1 1.71 1.71c.47 1.18.36 3.99.36 5.3 0 1.31.11 4.12-.36 5.3z",
  },
  {
    id: "youtube",
    label: "YouTube",
    path: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81zM10 15.5v-7l6 3.5-6 3.5z",
  },
];

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer__inner">
        <img
          className="footer__logo"
          src="/images/logo-campus.png"
          alt="Santo Tomás Campus Virtual"
        />

        <div className="footer__social">
          {SOCIALS.map((social) => (
            <a
              key={social.id}
              href="#contacto"
              aria-label={social.label}
              onClick={(event) => event.preventDefault()}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d={social.path} fill="currentColor" />
              </svg>
            </a>
          ))}
        </div>

        <p className="footer__legal">
          Institución de Educación Superior, reconocida mediante Resolución
          3645 del 06 de agosto de 1965 expedida por el Ministerio de Justicia.
          <br />
          Institución sujeta a inspección y vigilancia por el Ministerio de
          Educación Nacional - SNIES 1732.
          <br />
          Todos los derechos reservados.
          <br />
          Políticas y condiciones de uso.
        </p>
      </div>
    </footer>
  );
}
