import { useEffect, useState } from 'react';
import mapboxgl, { Map as MapboxMap, MapboxGeoJSONFeature } from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

interface MapSearchHookProps {
  map: MapboxMap | null;
  setLocations: (newLocations: [number, number][]) => void;
}

export const useMapInitialization = (setLocations: (newLocations: [number, number][]) => void) => {
  const [map, setMap] = useState<MapboxMap | null>(null);

  useEffect(() => {
    if (!map) {
      const setLocationsState = (newLocations: [number, number][]) => {
        setLocations([...newLocations] as [number, number][]);
      };

      const mapInstance = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [13.40, 52.52],
        zoom: 9,
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
              setLocationsState([[newCoordinate[0], newCoordinate[1]]] as [number, number][]);

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
  }, [map, setLocations]);

  return map;
};

export const useMapSearch = ({ map, setLocations }: MapSearchHookProps) => {
  const [lng, setLng] = useState<number>(13.40);
  const [lat, setLat] = useState<number>(52.52);
  const [zoom, setZoom] = useState<number>(9);

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
          setLocations([[coordinates[0], coordinates[1]]] as [number, number][]);
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
          setLocations([[center[0], center[1]]] as [number, number][]);
        });
      }
    };

    initializeGeocoder();
  }, [map, setLocations]);

  return { lng, lat, zoom };
};
