import React, { useState } from "react";
import mapboxgl from "mapbox-gl";
import { useMapInitialization, useMapSearch } from "../../hooks/utils";
import styles from "../../../styles/pages/mapComponent.module.scss";

mapboxgl.accessToken =
  "pk.eyJ1Ijoid3MyMiIsImEiOiJjbHByajZnbHowY3ZxMmpxY3NvdGZuNWtrIn0.JMyy9rU1aVlztcrAxXzALg";

const Map: React.FC = () => {
  const [userLocations, setUserLocations] = useState<
    Array<{ id: number; user: string; coordinates: [number, number] }>
  >([]);
  const map = useMapInitialization(setUserLocations);
  useMapSearch({ map, setLocations: setUserLocations }); // Use the same setLocations function

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        <div
          id="map"
          style={{ width: "80vw", height: "80vh", alignSelf: "flex-start" }}
        ></div>
        <div
          id="geocoder-container"
          style={{
            right: "340px",
            top: "0",
            width: "17.3333%",
            fontSize: "15px",
            lineHeight: "20px",
            position: "absolute",
            maxWidth: "360px",
          }}
        ></div>
        <div className={styles.geocontainers}>
          <div className={styles.ubicaciones}>
            <h2>Ubicaciones guardadas:</h2>
            <ul>
              {userLocations.map((location) => (
                <li
                  key={location.id}
                >{`ID: ${location.id}, Usuario: ${location.user}, Latitud: ${location.coordinates[1]}, Longitud: ${location.coordinates[0]}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
