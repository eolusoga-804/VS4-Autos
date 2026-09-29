import { MapContainer, TileLayer } from "react-leaflet";
import "./ContactMap.css";

const manchesterOverview: [number, number] = [53.4808, -2.2426];

function ContactMap() {
  return (
    <div
      className="contact-map"
      role="region"
      aria-label="Map showing the Manchester service area"
    >
      <MapContainer
        className="contact-map__canvas"
        center={manchesterOverview}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default ContactMap;
