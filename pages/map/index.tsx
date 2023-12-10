import React from "react";
import MapComponent from "../../app/Components/MapComponent/MapComponent";
import BasePage from "../../app/Components/BasePage/BasePage";
import BaseSection from "../../app/Components/BaseSection/BaseSection";






const Map = () => {
  return (
    <BasePage backgroundColor="--background-color">
      <BaseSection>
      
        <MapComponent />

      
      </BaseSection>
    </BasePage>
  );
};

export default Map;
