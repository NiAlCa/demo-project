import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMapInitialization, useMapSearch } from '../../hooks/utils';
import styles from '../../../styles/pages/mapComponent.module.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoid3MyMiIsImEiOiJjbHByajZnbHowY3ZxMmpxY3NvdGZuNWtrIn0.JMyy9rU1aVlztcrAxXzALg';

const Map: React.FC = () => {
  const [locations, setLocations] = useState<Array<[number, number]>>([]);
  const map = useMapInitialization(setLocations);
  useMapSearch({ map, setLocations });

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <div id="map" style={{ width: '80vw', height: '85vh', alignSelf: 'flex-start' }}></div>
        <div id="geocoder-container"></div>
      </div>
      <div className={styles.geocontainers}>
        <div className={styles.ubicaciones}>
          <h2>Ubicaciones guardadas:</h2>
          <ul>
            {locations.map((location, index) => (
              <li key={index}>{`Latitud: ${location[1]}, Longitud: ${location[0]}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Map;