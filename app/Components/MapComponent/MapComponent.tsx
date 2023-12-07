import React, { useState, useEffect } from 'react';
import mapboxgl, { Map as MapboxMap, MapboxGeoJSONFeature } from 'mapbox-gl';
import styles from "../../../styles/pages/mapComponent.module.scss";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoid3MyMiIsImEiOiJjbHByajZnbHowY3ZxMmpxY3NvdGZuNWtrIn0.JMyy9rU1aVlztcrAxXzALg';

const Map: React.FC = () => {
  const [lng, setLng] = useState<number>(13.40);
  const [lat, setLat] = useState<number>(52.52);
  const [zoom, setZoom] = useState<number>(9);
  const [map, setMap] = useState<MapboxMap | null>(null);

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

  return (
    <div className={styles.container}>
      <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
    </div>
  );
};

export default Map;
