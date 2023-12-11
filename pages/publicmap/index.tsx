import React from "react";
import BasePage from "../../app/Components/BasePage/BasePage";
import BaseSection from "../../app/Components/BaseSection/BaseSection";
import PublicMap from "../../app/Components/PublicMap/PublicMapComponent";






const Map = () => {
  return (
    <BasePage backgroundColor="--background-color">
      <BaseSection>
      
        <PublicMap/>

      
      </BaseSection>
    </BasePage>
  );
};

export default Map;
