import React from "react";
import FooterMain from "../../components/FooterMain/FooterMain";
import TourmateInfo from "../../components/TourmateInfo/TourmateInfo";
import TravellaInfo from "../../components/TravellaInfo/TravellaInfo";

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
