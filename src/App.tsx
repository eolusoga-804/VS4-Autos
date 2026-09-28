import { Link, Outlet, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";
import AmbientOrbs from "./components/AmbientOrbs/AmbientOrbs";
import AosInitializer from "./components/AosInitializer/AosInitializer";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { business } from "./config/business";
import "./App.css";

function HomePage() {
  return (
    <>
      <main className="page">
        <section
          className="page__hero"
          aria-labelledby="home-title"
          data-aos="fade"
        >
          <div className="page__hero-copy" data-aos="fade-left">
            <p className="page__eyebrow">
              MOBILE MECHANIC · {business.coverage}
            </p>
            <h1 className="page__title" id="home-title">
              {business.name}
            </h1>
            <p className="page__intro">{business.tagline}</p>
          </div>

          <div className="page__hero-media" data-aos="fade-right">
            <HomeCarousel />
          </div>
        </section>

        <section
          className="page__services-section"
          aria-labelledby="services-heading"
          data-aos="flip-up"
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

        <section
          className="page__benefits"
          aria-label="Mobile service benefits"
          data-aos="fade-up"
        >
          {business.benefits.map((benefit) => (
            <p className="page__benefit" key={benefit}>
              <span className="page__benefit-mark" aria-hidden="true">
                ✓
              </span>
              {benefit}
            </p>
          ))}
        </section>

        <section
          className="page__offer"
          aria-labelledby="offer-heading"
          data-aos="zoom-in"
        >
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

        <section
          className="page__contact"
          aria-labelledby="home-contact-heading"
          data-aos="fade-right"
        >
          <div>
            <h2 className="page__contact-heading" id="home-contact-heading">
              {business.homeContact.heading}
            </h2>
            <p className="page__contact-message">
              {business.homeContact.message}
            </p>
          </div>
          <Link className="page__contact-link" to="/contact">
            {business.homeContact.buttonLabel}
          </Link>
        </section>
      </main>
    </>
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
    <>
      <AmbientOrbs />
      <div className="app-routes">
        <AosInitializer />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
