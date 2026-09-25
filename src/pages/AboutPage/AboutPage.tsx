import { business } from "../../config/business";

import FaqAccordion from "./FaqAccordion";
import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page__intro">
        <p className="about-page__eyebrow">{business.coverage}</p>
        <h1 className="about-page__title">
          Practical vehicle care, brought to you
        </h1>
        <p className="about-page__copy">
          {business.name} provides mobile mechanic support at your home or
          workplace, helping you care for your vehicle without arranging a
          garage drop-off.
        </p>
      </section>

      <section
        className="about-page__services"
        aria-labelledby="about-services-title"
      >
        <div className="about-page__section-heading">
          <p className="about-page__eyebrow">What we do</p>
          <h2 className="about-page__title" id="about-services-title">
            Services for everyday motoring
          </h2>
        </div>

        <div className="about-page__service-grid">
          {business.services.map((service, index) => (
            <article className="about-page__service-card" key={service}>
              <span className="about-page__service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="about-page__service-title">{service}</h3>
              <p className="about-page__service-copy">
                {service.toLowerCase().includes("servic")
                  ? business.serviceDescriptions.servicing
                  : service.toLowerCase().includes("brake")
                    ? business.serviceDescriptions.brakes
                    : service.toLowerCase().includes("diagnostic")
                      ? business.serviceDescriptions.diagnostics
                      : "Contact VS4 Autos to discuss your vehicle and request a quote."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-page__approach"
        aria-labelledby="about-approach-title"
      >
        <div>
          <p className="about-page__eyebrow">The VS4 Autos approach</p>
          <h2 className="about-page__title" id="about-approach-title">
            {business.approach.heading}
          </h2>
          <p className="about-page__copy">{business.approach.intro}</p>
        </div>

        <ul className="about-page__benefits">
          {business.approach.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="about-page__faqs" aria-labelledby="about-faq-title">
        <div className="about-page__section-heading">
          <p className="about-page__eyebrow">Common questions</p>
          <h2 className="about-page__title" id="about-faq-title">
            Before you book
          </h2>
        </div>
        <FaqAccordion />
      </section>

      <section className="about-page__area" aria-labelledby="about-area-title">
        <div>
          <p className="about-page__eyebrow">Local mobile support</p>
          <h2 className="about-page__title" id="about-area-title">
            {business.serviceArea.heading}
          </h2>
          <p className="about-page__copy">{business.serviceArea.intro}</p>
        </div>

        <ul className="about-page__area-list">
          {business.serviceArea.areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default AboutPage;
