import React from 'react'
import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import icon from "leaflet"
const Map = () => {
    const iconn = icon.icon({
        iconUrl: "https://img.icons8.com/ios-filled/50/FF0000/visit.png",
        iconSize: [30, 30]
        })
  return (
    <div>              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "100%"}} >
    <TileLayer 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=O3hyGb236OQ11l0lXp7d"
    />
    <Marker position={[51.505, -0.09]} icon={iconn}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer></div>
  )
}

export default Map