import { StaticImageData } from "next/image";
import { Rarity } from "./rarity.enum";
import { Trait } from "./trait.enum";

export interface ITrait {
    rarity: keyof typeof Rarity;
    trait: keyof typeof Trait;
    label: string;
    imageUrl: StaticImageData;
}