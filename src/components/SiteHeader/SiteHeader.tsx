import { business } from "../../config/business";
import "./SiteHeader.css";

function SiteHeader() {
  return (
    <header className="site-header">
      <a
        className="site-header__brand"
        href="/"
        aria-label={`${business.name} home`}
      >
        <img
          className="site-header__logo"
          src="/logo.svg"
          alt=""
          width="44"
          height="44"
        />
        <span className="site-header__name">{business.name}</span>
      </a>

      <p className="site-header__coverage">{business.coverage}</p>
    </header>
  );
}

export default SiteHeader;
