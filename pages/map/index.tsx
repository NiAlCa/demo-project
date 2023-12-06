import React from "react";
import MapComponent from "../../app/Components/MapComponent/MapComponent";
import BasePage from "../../app/Components/BasePage/BasePage";






const Map = () => {
  return (
    <BasePage backgroundColor="--background-color">
      <div>
        <h1>Map Page</h1>
        <MapComponent />
      </div>
    </BasePage>
  );
};

export default Map;
