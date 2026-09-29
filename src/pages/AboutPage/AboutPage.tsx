import { business } from "../../config/business";
import FaqAccordion from "./FaqAccordion";
import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page__intro" data-aos="fade-up">
        <p className="about-page__eyebrow">{business.coverage}</p>
        <h1 className="about-page__title">{business.aboutPage.introTitle}</h1>
        <p className="about-page__copy">{business.aboutPage.introCopy}</p>
      </section>

      <section
        className="about-page__services"
        aria-labelledby="about-services-title"
        data-aos="fade-up"
      >
        <div className="about-page__section-heading">
          <p className="about-page__eyebrow">
            {business.aboutPage.servicesEyebrow}
          </p>
          <h2 className="about-page__title" id="about-services-title">
            {business.aboutPage.servicesHeading}
          </h2>
        </div>

        <div className="about-page__service-grid">
          {business.services.map((service, index) => (
            <article
              className="about-page__service-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              key={service}
            >
              <span className="about-page__service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="about-page__service-title">{service}</h3>
              <p className="about-page__service-copy">
                {business.serviceDescriptions[service]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-page__approach"
        aria-labelledby="about-approach-title"
        data-aos="fade-up"
      >
        <div>
          <p className="about-page__eyebrow">
            {business.aboutPage.approachEyebrow}
          </p>
          <h2 className="about-page__title" id="about-approach-title">
            {business.approach.heading}
          </h2>
          <p className="about-page__copy">{business.approach.intro}</p>
        </div>

        <div>
          <p className="about-page__eyebrow">
            {business.aboutPage.approachTagline}
          </p>
          <ul className="about-page__benefits">
            {business.approach.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="about-page__faqs"
        aria-labelledby="about-faq-title"
        data-aos="fade-up"
      >
        <div className="about-page__section-heading">
          <p className="about-page__eyebrow">{business.aboutPage.faqEyebrow}</p>
          <h2 className="about-page__title" id="about-faq-title">
            {business.aboutPage.faqHeading}
          </h2>
        </div>
        <FaqAccordion />
      </section>

      <section
        className="about-page__area"
        aria-labelledby="about-area-title"
        data-aos="fade-up"
      >
        <div>
          <p className="about-page__eyebrow">
            {business.aboutPage.areaEyebrow}
          </p>
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
