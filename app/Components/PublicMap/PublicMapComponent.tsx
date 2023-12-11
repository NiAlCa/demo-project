import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { MapMouseEvent } from 'mapbox-gl';
import React, { useState } from 'react';

interface MapProps {
  center: [number, number];
  zoom: [number];
  onClick: (map: mapboxgl.Map, event: MapMouseEvent) => void;
}

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoid3MyMiIsImEiOiJjbHByajZnbHowY3ZxMmpxY3NvdGZuNWtrIn0.JMyy9rU1aVlztcrAxXzALg',
});

const PublicMap: React.FC = () => {
  const [center, setCenter] = useState<[number, number]>([-74.01341675982262, 40.71992160719199]);
  const [zoom, setZoom] = useState<[number]>([5]);

  const pins = [
    { coordinates: [-74.01341675982262, 40.71992160719199], color: 'red' }, // Nueva York
    { coordinates: [-3.7038, 40.4168], color: 'blue' }, // España
    { coordinates: [127.7669, 35.9078], color: 'green' }, // Corea
  ];

  return (
    <Map
      style="mapbox://styles/mapbox/light-v10"
      containerStyle={{
        height: '80vh',
        width: '90vw',
      }}
      center={center}
      zoom={zoom}
    >
      {pins.map((pin, index) => (
        <Marker key={index} coordinates={pin.coordinates} anchor="bottom">
          <div style={{ width: '20px', height: '20px', background: pin.color }} />
        </Marker>
      ))}
    </Map>
  );
};

export default PublicMap;
