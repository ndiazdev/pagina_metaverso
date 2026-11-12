import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ServicesCarousel from "./components/ServicesCarousel.jsx";
import UniqueCarousel from "./components/UniqueCarousel.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import Wave from "./components/Wave.jsx";

const SECTION_IDS = ["inicio", "servicios", "galeria", "contacto"];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) setActive(ids[ids.length - 1]);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />

        <section id="servicios" className="services">
          <div className="container">
            <ServicesCarousel />
            <UniqueCarousel />
          </div>
          <Wave fill="#0b2f70" className="services__wave" />
        </section>

        <Gallery />
      </main>
      <Footer />
    </>
  );
}
