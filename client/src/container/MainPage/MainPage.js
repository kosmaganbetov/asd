import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterMain from "../../components/MainPage/FooterMain/FooterMain";
import TourmateInfo from "../../components/MainPage/TourmateInfo/TourmateInfo";
import TravellaInfo from "../../components/MainPage/TravellaInfo/TravellaInfo";
import OnlineTours from "../../components/MainPage/OnlineTours/OnlineTours";
import { fetchTourmates } from "../../store/actions/tourmatesActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const tourmates = useSelector((state) => state.tourmates.tourmates);

  useEffect(() => {
    dispatch(fetchTourmates());
  }, []);

  return (
    <div className="MainPage">
      <TravellaInfo />
      <TourmateInfo tourmates={tourmates} />
      <OnlineTours />
      <FooterMain />
    </div>
  );
};

export default MainPage;
