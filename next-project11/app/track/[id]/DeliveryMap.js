"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FitMap({ points }) {
  const map = useMap();

  useEffect(() => {
    if (points.length) {
      map.fitBounds(points, { padding: [36, 36], maxZoom: 15 });
    }
  }, [map, points]);

  return null;
}

export default function DeliveryMap({ courier, destination }) {
  const courierPosition = [courier.latitude, courier.longitude];
  const destinationPosition = [destination.latitude, destination.longitude];
  const points = [courierPosition, destinationPosition];

  return (
    <MapContainer
      center={courierPosition}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "360px", width: "100%", borderRadius: "14px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker
        center={courierPosition}
        radius={10}
        pathOptions={{ color: "#fff", fillColor: "#7c3aed", fillOpacity: 1, weight: 3 }}
      >
        <Popup>Courier: {courier.name}</Popup>
      </CircleMarker>
      <CircleMarker
        center={destinationPosition}
        radius={10}
        pathOptions={{ color: "#fff", fillColor: "#16a34a", fillOpacity: 1, weight: 3 }}
      >
        <Popup>Delivery destination</Popup>
      </CircleMarker>
      <FitMap points={points} />
    </MapContainer>
  );
}
