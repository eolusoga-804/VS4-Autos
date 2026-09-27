import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { business } from "../../config/business";
import "./SiteHeader.css";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <span
          className="site-header__orb site-header__orb--sky"
          aria-hidden="true"
        />
        <span
          className="site-header__orb site-header__orb--blue"
          aria-hidden="true"
        />
        <span
          className="site-header__orb site-header__orb--violet"
          aria-hidden="true"
        />
        <Link
          className="site-header__brand"
          to="/"
          aria-label={`${business.name} home`}
        >
          <img className="site-header__logo" src="/logo.svg" alt="" />
          <span className="site-header__name">{business.name}</span>
        </Link>

        <nav
          className="site-header__nav site-header__nav--desktop"
          aria-label="Main navigation"
        >
          {business.navigation.map((item) => (
            <Link className="site-header__link" to={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="site-header__coverage">{business.coverage}</p>

        <button
          className="site-header__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-header__menu-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </header>

      <div className="site-header__spacer" aria-hidden="true" />

      {isMenuOpen && (
        <>
          <button
            className="site-header__backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          />

          <aside
            className="site-header__sidebar"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            <p className="site-header__sidebar-label">{business.coverage}</p>

            <nav className="site-header__sidebar-nav">
              {business.navigation.map((item) => (
                <Link
                  className="site-header__sidebar-link"
                  to={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              className="site-header__sidebar-contact"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact VS4 Autos
            </Link>
          </aside>
        </>
      )}
    </>
  );
}

export default SiteHeader;
