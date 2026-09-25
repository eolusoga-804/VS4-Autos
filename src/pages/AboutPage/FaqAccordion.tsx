import { useState } from "react";
import { business } from "../../config/business";

function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="about-page__faq-list">
      {business.faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        const answerId = `about-faq-answer-${index}`;

        return (
          <article className="about-page__faq-item" key={faq.question}>
            <h3 className="about-page__faq-question">
              <button
                className="about-page__faq-toggle"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="about-page__faq-mark" aria-hidden="true">
                  {isOpen ? "−" : "?"}
                </span>
              </button>
            </h3>

            {isOpen && (
              <p className="about-page__faq-answer" id={answerId}>
                {faq.answer}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
