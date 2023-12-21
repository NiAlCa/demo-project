import ReactMapboxGl, { Marker, MapContext } from 'react-mapbox-gl';
import { NavigationControl } from 'mapbox-gl';
import React, { useState, useEffect, useContext } from 'react';
import styles from './publicMap.module.scss';

import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoid3MyMiIsImEiOiJjbHByajZnbHowY3ZxMmpxY3NvdGZuNWtrIn0.JMyy9rU1aVlztcrAxXzALg',
});

const NavigationControlWrapper: React.FC = () => {
  const map = useContext(MapContext);

  useEffect(() => {
    if (map) {
      const navControl = new NavigationControl();
      map.addControl(navControl, 'top-right');
    }
  }, [map]);

  return null;
};

const PublicMap: React.FC = () => {
  const [center, setCenter] = useState<[number, number]>([8.8072, 46.8182]);
  const [zoom, setZoom] = useState<number>(4);
  const [geoJSONData, setGeoJSONData] = useState<any>({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.3522, 48.8566], 
        },
        properties: {
          city: 'Paris',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-3.7038, 40.4168], 
        },
        properties: {
          city: 'Madrid',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [4.3517, 50.8503], 
        },
        properties: {
          city: 'Brussels',
        },
      },
    ],
  });

  const [dynamicMarkers, setDynamicMarkers] = useState<any[]>([]);

  const handleMapClick = (map: mapboxgl.Map, evt: mapboxgl.MapMouseEvent) => {
    const { lng, lat } = evt.lngLat;
    console.log('Nueva coordenada:', JSON.stringify([lng, lat]));
    const newMarker = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [lng, lat],
      },
      properties: {
        city: `Marker ${dynamicMarkers.length + 1}`,
        color: 'yellow',
      },
    };

    setDynamicMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setGeoJSONData((prevData: { type: string; features: any[] }) => ({
      type: 'FeatureCollection',
      features: [...prevData.features, newMarker],
    }));
  };

  const handleRemoveMarker = (index: number) => {
    const updatedMarkers = [...dynamicMarkers];
    updatedMarkers.splice(index, 1);
    setDynamicMarkers(updatedMarkers);

    const updatedGeoJSON = {
      type: 'FeatureCollection',
      features: geoJSONData.features.filter((_feature: any, i: number) => i !== index),
    };
    setGeoJSONData(updatedGeoJSON);
  };


  return (
    <div className={styles.mapContainer}>
      <Map
        style="mapbox://styles/mapbox/dark-v10"
        containerStyle={{
          height: '80vh',
          width: '90vw',
        }}
        center={center}
        zoom={[zoom]}
        onClick={handleMapClick as any}
        >
          <MapContext.Consumer>
            {() => <NavigationControlWrapper />}
          </MapContext.Consumer>
  
          {geoJSONData && (
            geoJSONData.features.map((feature: any, index: number) => (
              <Marker
              key={index}
              coordinates={feature.geometry.coordinates}
              anchor="bottom"
              className={`${styles.marker} ${styles[feature.properties.color]}`}
              onClick={() => {
                console.log('Marcador clickeado:', JSON.stringify(feature.geometry.coordinates));
                handleRemoveMarker(index);
              }}
            >
                <div className={styles.markerInner} />
              </Marker>
            ))
          )}
        </Map>
      </div>
    );
  };
  
  export default PublicMap;