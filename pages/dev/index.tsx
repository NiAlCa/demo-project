import React, { useState } from "react";
import BasePage from "../../app/Components/BasePage/BasePage";
import styles from "../../styles/pages/dev.module.scss";
import Button from "../../app/Components/Button/Button";
import { toast } from "react-toastify";
import { FavoriteSelect } from "../../app/Components/FavoriteSelect/FavoriteSelect";
const Dev = () => {

   type NFT = {
    name: string;
    description: string;
    image: string;
    assetId: string;
    collection: string;
    external_url: string;
  };

  const [selectedFavorites, setSelectedFavorites] = useState<NFT[]>([]);

  return (
    <BasePage backgroundColor="--background-color">
      <div className={styles.container}>
        <Button
          text={"Primary Normal"}
          onClick={() => toast.warn("Warning toast")}
          type={"primary"}
          size={"normal"}
        />
        <Button
          text={"Primary Large"}
          onClick={() => toast.warn("Warning toast")}
          type={"primary"}
          size={"large"}
        />
        <Button
          text={"Secondary Normal"}
          onClick={() => toast.success("success toast")}
          type={"secondary"}
          size={"normal"}
        />
        <Button
          text={"Secondary Large"}
          onClick={() => toast.success("Success toast")}
          type={"secondary"}
          size={"large"}
        />
        <Button
          text={"Orange Normal"}
          onClick={() => toast.info("Information toast")}
          type={"orange"}
          size={"normal"}
        />
        <Button
          text={"Orange Large"}
          onClick={() => toast.info("Information toast")}
          type={"orange"}
          size={"large"}
        />

<FavoriteSelect
        selectedFavorites={selectedFavorites}
        setSelectedFavorites={setSelectedFavorites}
      />


      </div>
    </BasePage>
  );
};

export default Dev;
