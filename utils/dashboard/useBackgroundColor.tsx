import { useEffect } from "react";
import { INFT } from "../../app/Components/Nft/Nft.types";
import { useStoreActions } from "../../store";

export const useBackgroundColor = (nft: INFT | undefined) => {
  const { setBackgroundColor } = useStoreActions((actions) => actions.user);
  useEffect(() => {
    nft &&
      nft.attributes.forEach((attr) => {
        if (attr.trait_type === "background") {
          switch (attr.value) {
            case "bubblegum pink":
              setBackgroundColor("--bubblegum-pink");
              break;
            case "peppermint green":
              setBackgroundColor("--peppermint-green");
              break;
            case "ice grey":
              setBackgroundColor("--ice-gray");
              break;
            case "dusk blue":
              setBackgroundColor("--dusk-blue");
              break;
            case "grape purple":
              setBackgroundColor("--grape-purple");
              break;
            case "olive green":
              setBackgroundColor("--olive-green");
              break;
            case "ginger orange":
              setBackgroundColor("--ginger-orange");
              break;
            case "steel blue":
              setBackgroundColor("--steel-blue");
              break;
            case "wine red":
              setBackgroundColor("--wine-red");
              break;
            case "mustard yellow":
              setBackgroundColor("--mustard-yellow");
              break;
            case "moss green":
              setBackgroundColor("--moss-green");
              break;
            case "tea green":
              setBackgroundColor("--tea-green");
              break;
            case "airforce blue":
              setBackgroundColor("--airforce-blue");
              break;
          }
        }
      });
  }, [nft]);
};
