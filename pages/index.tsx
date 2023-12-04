import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import BasePage from "../app/Components/BasePage/BasePage";
import HomeImage from "../app/Components/HomeImage/HomeImage";
import wood from "../public/assets/images/home/wood.png";
import biker from "../public/assets/images/home/biker.png";
import gold from "../public/assets/images/home/gold.png";
import safari from "../public/assets/images/home/safari.png";
import stripes from "../public/assets/images/home/stripes.png";

const Home = () => {
  // const { t } = useTranslation("common");
  // console.log(t("welcome"));

  return (
    <BasePage backgroundColor={"--home-background-color"}>
      <div className="home-container">
        <HomeImage imageUrl={safari} position={"left"} />
        <HomeImage imageUrl={stripes} position={"mid-left"} />
        <HomeImage imageUrl={gold} position={"mid"} />
        <HomeImage imageUrl={wood} position={"mid-right"} />
        <HomeImage imageUrl={biker} position={"right"} />
      </div>
    </BasePage>
  );
};

export default Home;

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
  },
});
