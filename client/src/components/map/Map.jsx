import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center[0] !== 0 && center[1] !== 0) {
      map.setView(center, zoom);
    }
  }, [center, zoom]);

  return null; // Add a return statement for the component
};

const Map = ({ lat, lon }) => {
  const icon = L.icon({
    iconUrl: "https://img.icons8.com/ios-filled/50/FF0000/visit.png",
    iconSize: [30, 30]
  });

  return (
    <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=O3hyGb236OQ11l0lXp7d"
      />
      <Marker position={[lat, lon]} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ChangeView center={[lat, lon]} zoom={16} />
    </MapContainer>
  );
};
export default Map;
