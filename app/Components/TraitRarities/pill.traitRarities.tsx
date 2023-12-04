import { Rarity } from "../../../public/assets/images/traits/rarity.enum";
import styles from "../../../styles/pages/rarity-chart.module.scss";
interface IProps {
  rarity: keyof typeof Rarity;
}
export const TraitRaritiesPill = ({ rarity }: IProps) => {
  let backgroundColor = getBackgroundColor(rarity);

  return (
    <div
      className={styles["TRAIT__RARITIES__PILL"]}
      style={{ backgroundColor }}
    >
      <span>{rarity}</span>
    </div>
  );
};

const getBackgroundColor = (rarity: keyof typeof Rarity) => {
  switch (rarity) {
    case Rarity.common:
      return "#A3CFD9";
    case Rarity.uncommon:
      return "#A7D9A3";
    case Rarity.rare:
      return "#D9A3A3";
    case Rarity.epic:
      return "#B1A3D9";
    case Rarity.legendary:
      return "#D9CAA3";
    default:
      return "#000000";
  }
};
