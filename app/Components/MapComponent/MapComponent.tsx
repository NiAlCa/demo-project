import React from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';

const MapComponent: React.FC = () => {
  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: '100%',
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      {/* Puedes agregar marcadores, polígonos u otros elementos aquí */}
      <div style={{ position: 'absolute', right: 0 }}>
        <NavigationControl />
      </div>
    </ReactMapGL>
  );
};

export default MapComponent;
