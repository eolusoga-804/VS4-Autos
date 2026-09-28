import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHouse,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { business } from "../../config/business";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();

  function handleGoBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate("/");
    }
  }

  return (
    <main className="not-found">
      <section
        className="not-found__card"
        aria-labelledby="not-found-title"
        data-aos="zoom-in"
      >
        <div className="not-found__icon" aria-hidden="true">
          <FontAwesomeIcon icon={faCompass} />
        </div>

        <p className="not-found__eyebrow">{business.notFound.eyebrow}</p>
        <h1 className="not-found__title" id="not-found-title">
          {business.notFound.title}
        </h1>
        <p className="not-found__copy">{business.notFound.message}</p>

        <div className="not-found__actions">
          <button
            className="not-found__link"
            type="button"
            onClick={handleGoBack}
          >
            {business.notFound.backButton}
          </button>
          <Link className="not-found__link" to="/about">
            <FontAwesomeIcon icon={faWrench} aria-hidden="true" />
            <span>{business.notFound.servicesButton}</span>
          </Link>
          <Link className="not-found__link not-found__link--primary" to="/">
            <FontAwesomeIcon icon={faHouse} aria-hidden="true" />
            <span>{business.notFound.homeButton}</span>
          </Link>
        </div>

        <p className="not-found__note">
          {business.notFound.note} {business.coverage}?
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;
