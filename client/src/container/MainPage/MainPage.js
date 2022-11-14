import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterMain from "../../components/MainPage/FooterMain/FooterMain";
import TourmateInfo from "../../components/MainPage/TourmateInfo/TourmateInfo";
import TravellaInfo from "../../components/MainPage/TravellaInfo/TravellaInfo";
import OnlineTours from "../../components/MainPage/OnlineTours/OnlineTours";
import { fetchTourmates } from "../../store/actions/tourmatesActions";
import { fetchDirections } from "../../store/actions/directionsAction";
import DirectionsInfo from "../../components/MainPage/Directions/DirectionsInfo/DirectionsInfo";

const MainPage = () => {
  const dispatch = useDispatch();
  const tourmates = useSelector((state) => state.tourmates.tourmates);
  const directions = useSelector((state) => state.directions.directions);

  useEffect(() => {
    dispatch(fetchTourmates());
    dispatch(fetchDirections());
  }, []);
  return (
    <div className="MainPage">
      <TravellaInfo />
      <TourmateInfo tourmates={tourmates} />
      <DirectionsInfo directions={directions} />
      <OnlineTours />
      <FooterMain />
    </div>
  );
};

export default MainPage;
