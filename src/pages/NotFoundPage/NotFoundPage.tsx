import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHouse,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { business } from "../../config/business";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="not-found">
      <section className="not-found__card" aria-labelledby="not-found-title">
        <div className="not-found__icon" aria-hidden="true">
          <FontAwesomeIcon icon={faCompass} />
        </div>

        <p className="not-found__eyebrow">404 · ROUTE NOT FOUND</p>
        <h1 className="not-found__title" id="not-found-title">
          This page has taken a wrong turn.
        </h1>
        <p className="not-found__copy">
          The address may be incorrect, or the page may have moved. You can head
          back to the VS4 Autos home page or explore our services.
        </p>

        <div className="not-found__actions">
          <Link className="not-found__link not-found__link--primary" to="/">
            <FontAwesomeIcon icon={faHouse} aria-hidden="true" />
            <span>Go to home</span>
          </Link>
          <Link className="not-found__link" to="/about">
            <FontAwesomeIcon icon={faWrench} aria-hidden="true" />
            <span>Explore services</span>
          </Link>
        </div>

        <p className="not-found__note">
          Looking for mobile mechanic support in {business.coverage}?
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;
