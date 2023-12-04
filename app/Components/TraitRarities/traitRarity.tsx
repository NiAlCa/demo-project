import { TraitRaritiesPill } from "./pill.traitRarities";
import styles from "../../../styles/pages/rarity-chart.module.scss";
import { Rarity } from "../../../public/assets/images/traits/rarity.enum";
import Image from "next/image";
interface IProps {
  rarity: keyof typeof Rarity;
  label: string;
  imageUrl: any;
}
export const TraitRarity = ({ rarity, label, imageUrl }: IProps) => {
  return (
    <div className={styles["TRAIT__RARITY"]}>
      <Image src={imageUrl} alt="" className={styles.image} />
      <p>{label}</p>
      <TraitRaritiesPill rarity={rarity} />
    </div>
  );
};
