import { Outlet, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { business } from "./config/business";
import "./App.css";

function HomePage() {
  return (
    <main className="page">
      <p className="page__eyebrow">MOBILE MECHANIC · {business.coverage}</p>
      <h1 className="page__title">{business.name}</h1>
      <p className="page__intro">{business.tagline}</p>

      <section
        className="page__services-section"
        aria-labelledby="services-heading"
      >
        <h2 className="page__services-heading" id="services-heading">
          Mobile mechanic services
        </h2>
        <ul className="page__services">
          {business.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="page__benefits" aria-label="Mobile service benefits">
        {business.benefits.map((benefit) => (
          <p className="page__benefit" key={benefit}>
            <span className="page__benefit-mark" aria-hidden="true">
              ✓
            </span>
            {benefit}
          </p>
        ))}
      </section>

      <section className="page__offer" aria-labelledby="offer-heading">
        <div>
          <p className="page__offer-label">New customer offer</p>
          <h2 className="page__offer-heading" id="offer-heading">
            {business.offer.firstFullServiceDiscount} your first full service
          </h2>
          <p className="page__offer-note">{business.offer.note}</p>
        </div>
        <p className="page__offer-price">
          Full service from <strong>{business.offer.fullServiceFrom}</strong>
        </p>
      </section>

      <section className="page__contact" aria-labelledby="home-contact-heading">
        <div>
          <h2 className="page__contact-heading" id="home-contact-heading">
            {business.homeContact.heading}
          </h2>
          <p className="page__contact-message">
            {business.homeContact.message}
          </p>
        </div>
        <a className="page__contact-link" href="/contact">
          {business.homeContact.buttonLabel}
        </a>
      </section>
    </main>
  );
}

function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
