import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTour } from "../../store/actions/toursActions";
import "./Tour.sass";
import Plan from "../../components/Tour/Plan/Plan";
import TourCard from "../../components/Tour/TourCard/TourCard";
import AboutTour from "../../components/Tour/AboutTour/AboutTour";
import TourMap from "../../components/Tour/TourMap/TourMap";
import TourFooter from "../../components/Tour/TourFooter/TourFooter";
import TourGoodToKnow from "../../components/Tour/TourGoodToKnow/TourGoodToKnow";
import TourTourmateOffer from "../../components/Tour/TourTourmateOffer/TourTourmateOffer";
import TourTourmateCard from "../../components/Tour/TourTourmateCard/TourTourmateCard";

const Tour = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.tours.tour);
  const defaultState = {
    center: [55.684758, 37.738521],
    zoom: 13,
  };

  useEffect(() => {
    dispatch(fetchTour(params.id));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="tour">
      <div className="tour_container">
        <div className="column">
          <TourCard
            price={tour?.price}
            image={tour?.tourmateID?.image}
            name={tour?.tourmateID?.name}
            surname={tour?.tourmateID?.surname}
            description={tour?.tourmateID?.description}
          />
        </div>
        <div className="column">
          <AboutTour title={tour.title} description={tour.description} />
          <Plan plan={tour.plan} />
          <TourTourmateOffer
            image={tour?.tourmateID?.image}
            name={tour?.tourmateID?.name}
            surname={tour?.tourmateID?.surname}
          />
          <TourMap defaultState={defaultState} />
          <TourGoodToKnow
            included={tour?.program?.included}
            notincluded={tour?.program?.notincluded}
          />
          <TourTourmateCard
            name={tour?.tourmateID?.name}
            image={tour?.tourmateID?.image}
          />
          <TourFooter />
        </div>
      </div>
    </div>
  );
};
export default Tour;
