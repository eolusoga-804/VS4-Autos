import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { business } from "../../config/business";
import "./SiteFooter.css";

const socialIcons = {
  facebook: faFacebookF,
  instagram: faInstagram,
  whatsapp: faWhatsapp,
} as const;

type SocialName = keyof typeof socialIcons;

function SiteFooter() {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  function toggleGroup(index: number) {
    if (window.matchMedia("(min-width: 701px)").matches) return;
    setActiveGroup((current) => (current === index ? null : index));
  }

  const socials = Object.entries(business.footer.socials).filter(([, href]) =>
    Boolean(href),
  ) as [SocialName, string][];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <a className="site-footer__name" href="/">
            {business.name}
          </a>
          <p className="site-footer__summary">{business.footer.summary}</p>
          <p className="site-footer__coverage">{business.coverage}</p>

          {socials.length > 0 && (
            <nav className="site-footer__socials" aria-label="Social media">
              {socials.map(([name, href]) => (
                <a
                  className={`site-footer__social site-footer__social--${name}`}
                  href={href}
                  key={name}
                  aria-label={`Visit ${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={socialIcons[name]} />
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="site-footer__groups">
          {business.footer.groups.map((group, index) => {
            const isOpen = activeGroup === index;

            const links =
              group.title === "Services"
                ? business.services.map((service) => ({
                    label: service,
                    href: "/about",
                  }))
                : group.links;

            return (
              <section className="site-footer__group" key={group.title}>
                <h2 className="site-footer__heading">
                  <button
                    className="site-footer__toggle"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleGroup(index)}
                  >
                    {group.title}
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h2>

                <ul
                  className={`site-footer__links${isOpen ? " site-footer__links--open" : ""}`}
                >
                  {links
                    .filter((link) => link.href)
                    .map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} {business.name}
        </span>
        <span>{business.footer.copyright}</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
