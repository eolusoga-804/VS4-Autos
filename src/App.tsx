import { business } from "./config/business";

import SiteHeader from "./components/SiteHeader/SiteHeader";

import "./App.css";

function App() {
  return (
    <main className="page">
      <SiteHeader />
      <p className="page__eyebrow">MOBILE MECHANIC · {business.coverage}</p>
      <h1 className="page__title">{business.name}</h1>
      <p className="page__intro">{business.tagline}</p>

      <ul className="page__services" aria-label="Services">
        {business.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
