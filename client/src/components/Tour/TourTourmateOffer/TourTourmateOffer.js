/* eslint-disable react/prop-types */
import "./TourTourmateOffer.sass";
import { uploadsUrl } from "../../../constants";

const TourTourmateOffer = ({ image, name, surname }) => {
  return (
    <div className="tour_tourmate_offer">
      <img src={`${uploadsUrl}/${image}`} />
      <p>
        {name} {surname} может персонализировать ваш тур <br /> Дайте нам знать
        ваши предпочтения для <br /> персонализированного тура!
      </p>
      <button>Запросить индивидуальное предложение</button>
    </div>
  );
};

export default TourTourmateOffer;
