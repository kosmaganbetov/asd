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
import FindFriends from "../../components/MainPage/FindFriends/FindFriends";
import { fetchCities } from "../../store/actions/citiesActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const tourmates = useSelector((state) => state.tourmates.tourmates);
  const directions = useSelector((state) => state.directions.directions);
  const tours = useSelector((state) => state.tours.tours);
  const cities = useSelector((state) => state.cities.cities);
  console.log(cities);
  useEffect(() => {
    dispatch(fetchTourmates());
    dispatch(fetchDirections());
    dispatch(fetchTours());
    dispatch(fetchCities());
  }, []);
  return (
    <div className="MainPage">
      <FindFriends cities={cities} />
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
