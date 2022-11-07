import React from "react";
import FooterMain from "../../components/MainPage/FooterMain/FooterMain";
import TourmateInfo from "../../components/MainPage/TourmateInfo/TourmateInfo";
import TravellaInfo from "../../components/MainPage/TravellaInfo/TravellaInfo";

const MainPage = () => {
  return (
    <div className="MainPage">
      <TravellaInfo />
      <TourmateInfo />
      <FooterMain />
    </div>
  );
};

export default MainPage;
