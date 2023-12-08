import React, { useState, useEffect } from 'react';
import mapboxgl, { Map as MapboxMap, MapboxGeoJSONFeature } from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import styles from "../../../styles/pages/mapComponent.module.scss";

mapboxgl.accessToken = 'pk.eyJ1Ijoid3MyMiIsImEiOiJjbHByajZnbHowY3ZxMmpxY3NvdGZuNWtrIn0.JMyy9rU1aVlztcrAxXzALg';

const Map: React.FC = () => {
  const [lng, setLng] = useState<number>(13.40);
  const [lat, setLat] = useState<number>(52.52);
  const [zoom, setZoom] = useState<number>(9);
  const [map, setMap] = useState<MapboxMap | null>(null);
  const [locations, setLocations] = useState<Array<[number, number]>>([]);

  useEffect(() => {
    if (!map) {
      const mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [lng, lat],
        zoom: zoom,
      });
      mapInstance.addControl(new mapboxgl.NavigationControl());

      mapInstance.on('load', () => {
        mapInstance.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png', (error, image) => {
          if (error) throw error;
          if (image) {
            mapInstance.addImage('custom-marker', image);

            mapInstance.addSource('points', {
              'type': 'geojson',
              'data': {
                'type': 'FeatureCollection',
                'features': [] as MapboxGeoJSONFeature[],
              },
            });

            mapInstance.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': 'points',
              'layout': {
                'icon-image': 'custom-marker',
                'icon-size': 0.50,
              },
            });

            mapInstance.on('click', (e) => {
              const newCoordinate = [e.lngLat.lng, e.lngLat.lat];
              setLocations((prevLocations: [number, number][]) => [...prevLocations, newCoordinate] as [number, number][]);

              const geojson: MapboxGeoJSONFeature = {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': newCoordinate,
                },
                'properties': {},
                'layer': {
                  'id': 'points',
                  'type': 'symbol',
                  'source': 'points',
                },
                'source': 'points',
                'sourceLayer': 'points',
                'state': {},
              };

              const source = mapInstance.getSource('points') as mapboxgl.GeoJSONSource;
              if (source) {
                source.setData({ type: 'FeatureCollection', features: [geojson] });
              }

              console.log(newCoordinate);
            });
          }
        });
      });

      setMap(mapInstance);
    }
  }, [map, lng, lat, zoom]);

  useEffect(() => {
    const handleSearch = async (query: string) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`
        );

        const data = await response.json();

        if (data.features && data.features.length > 0) {
          const coordinates = data.features[0].center;
          setLng(coordinates[0]);
          setLat(coordinates[1]);
          setZoom(12);
        } else {
          console.log('No se encontraron resultados para la búsqueda.');
        }
      } catch (error) {
        console.error('Error en la búsqueda:', error);
      }
    };

    const initializeGeocoder = () => {
      if (map) {
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          placeholder: 'Buscar por país, ciudad, barrio, zona...',
        });

        document.getElementById('geocoder-container')?.appendChild(geocoder.onAdd(map));

        geocoder.on('result', (event) => {
          const { center } = event.result.geometry;
          setLng(center[0]);
          setLat(center[1]);
          setZoom(12);
        });
      }
    };

    initializeGeocoder();
  }, [map]);

  return (
    <div className={styles.container}>
      <div id="map" style={{ width: '80vw', height: '85vh', alignSelf: 'flex-start' }}></div>
      <div className={styles.geocontainers}>
      <div id="geocoder-container"></div>
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
