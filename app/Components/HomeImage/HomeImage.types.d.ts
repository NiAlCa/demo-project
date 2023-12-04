import { StaticImageData } from "next/image";

export interface IHomeImageProps {
  imageUrl: StaticImageData;
  position: "left" | "mid-left" | "mid" | "mid-right" | "right";
}
