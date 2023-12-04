import React, { useEffect } from "react";
import { IHomeImageProps } from "./HomeImage.types";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./HomeImage.module.scss";
import { useAnimate } from "framer-motion";
const cx = classNames.bind(styles);

const HomeImage = ({ imageUrl, position }: IHomeImageProps) => {
  const [scope, animate] = useAnimate();

  const className = cx({
    image: true,
    left: position === "left" && true,
    midLeft: position === "mid-left" && true,
    mid: position === "mid" && true,
    midRight: position === "mid-right" && true,
    right: position === "right" && true,
  });

  useEffect(() => {
    switch (position) {
      case "left":
        animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.3 });
        break;
      case "mid-left":
        animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
        break;
      case "mid":
        animate(scope.current, { opacity: 1 }, { duration: 0.5 });
        break;
      case "mid-right":
        animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
        break;
      case "right":
        animate(scope.current, { opacity: 1 }, { duration: 0.5, delay: 0.3 });
        break;
    }
  }, [animate, position, scope]);
  return <Image ref={scope} src={imageUrl} alt="" className={className} />;
};

export default HomeImage;
