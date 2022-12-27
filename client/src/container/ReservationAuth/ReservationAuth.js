import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Payment from "../../components/Payment/Payment";
import ReservedTourCard from "../../components/ReserveTour/ReservedTourCard/ReservedTourCard";
import Container from "../../components/UI/Container/Container";
import { fetchTour } from "../../store/actions/toursActions";
import "./ReservationAuth.sass";
const ReservationAuth = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.tours.tour);
  useEffect(() => {
    dispatch(fetchTour(params.id));
  }, []);
  return (
    <Container>
      <div className="ReservationAuth">
        <Payment />
        <ReservedTourCard
          tourmateImg={
            "http://localhost:8000/uploads/" + tour?.tourmateID?.image
          }
          img={"http://localhost:8000/uploads/" + tour?.image}
          tourTitle={tour.title}
          tourmateName={tour?.tourmateID?.name}
          tourmateSurname={tour?.tourmateID?.surname}
          tourDate="1 ноября"
          touristNumber={1}
          tourPrice={tour?.price}
          tourServices={tour.moreservices}
          tourFullPrice={tour?.price}
        />
      </div>
    </Container>
  );
};
export default ReservationAuth;
