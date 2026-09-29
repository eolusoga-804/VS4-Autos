import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { BuildingLocation } from "../../services/geocoding";
import "./ContactMap.css";

type ContactMapProps = {
  location: BuildingLocation | null;
  mapLabel: string;
};

type MapViewportProps = {
  location: BuildingLocation | null;
};

const ukOverview: [number, number] = [54.5, -3];

const buildingPin = L.divIcon({
  className: "contact-map__pin",
  html: "",
  iconSize: [22, 22],
  iconAnchor: [11, 22],
});

function MapViewport({ location }: MapViewportProps) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo([location.latitude, location.longitude], 18, {
        duration: 0.8,
      });
    }
  }, [location, map]);

  return null;
}

function ContactMap({ location, mapLabel }: ContactMapProps) {
  return (
    <div className="contact-map" role="region" aria-label={mapLabel}>
      <MapContainer
        className="contact-map__canvas"
        center={ukOverview}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapViewport location={location} />

        {location && (
          <Marker
            position={[location.latitude, location.longitude]}
            icon={buildingPin}
          >
            <Popup>{location.formattedAddress}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default ContactMap;
