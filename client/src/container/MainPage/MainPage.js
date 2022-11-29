import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterMain from "../../components/MainPage/FooterMain/FooterMain";
import TourmateInfo from "../../components/MainPage/TourmateInfo/TourmateInfo";
import TravellaInfo from "../../components/MainPage/TravellaInfo/TravellaInfo";
import OnlineTours from "../../components/MainPage/OnlineTours/OnlineTours";
import { fetchTourmates } from "../../store/actions/tourmatesActions";
import { fetchDirections } from "../../store/actions/directionsAction";
import DirectionsInfo from "../../components/MainPage/Directions/DirectionsInfo/DirectionsInfo";
import ToursInfo from "../../components/MainPage/Tours/ToursInfo/ToursInfo";
import { fetchTours } from "../../store/actions/toursActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const tourmates = useSelector((state) => state.tourmates.tourmates);
  const directions = useSelector((state) => state.directions.directions);
  const tours = useSelector((state) => state.tours.tours);
  useEffect(() => {
    dispatch(fetchTourmates());
    dispatch(fetchDirections());
    dispatch(fetchTours());
  }, []);
  return (
    <div className="MainPage">
      <TravellaInfo />
      <TourmateInfo tourmates={tourmates} />
      <DirectionsInfo directions={directions} />
      <ToursInfo tours={tours} />
      <OnlineTours />
      <FooterMain />
    </div>
  );
};

export default MainPage;
