import React from "react";
import FooterMain from "../../components/MainPage/FooterMain/FooterMain";
import TourmateInfo from "../../components/MainPage/TourmateInfo/TourmateInfo";
import TravellaInfo from "../../components/MainPage/TravellaInfo/TravellaInfo";
import OnlineTours from "../../components/MainPage/OnlineTours/OnlineTours";

const MainPage = () => {
  return (
    <div className="MainPage">
      <TravellaInfo />
      <TourmateInfo />
      <OnlineTours />
      <FooterMain />
    </div>
  );
};

export default MainPage;
