import "./TourMap.sass";
import MapBlock from "../../Map/Map";

// eslint-disable-next-line react/prop-types
const TourMap = ({ defaultState }) => {
  return (
    <div className="Tour__map">
      <h3 className="Tour__map_title">Где встретимся?</h3>
      <p className="Tour__map_location">
        Ваш турмэйт будет вас ждать по адресу: {"Москва, ул. Любинская 61"}
      </p>
      <MapBlock defaultState={defaultState} />
    </div>
  );
};

export default TourMap;
