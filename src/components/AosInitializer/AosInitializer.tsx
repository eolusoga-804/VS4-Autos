import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

function AosInitializer() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 48,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => AOS.refreshHard());
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

export default AosInitializer;
