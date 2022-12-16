/* eslint-disable react/prop-types */
import "./TourTourmateCard.sass";
import { uploadsUrl } from "../../../constants";

const TourTourmateCard = ({ image, name }) => {
  return (
    <>
      <div className="tour_contact_tourmate">
        <div className="tour_contact_tourmate_image">
          <img src={`${uploadsUrl}/${image}`} />
        </div>
        <div className="tour_contact_tourmate_text">
          <p>Все еще остались вопросы?Напиши мне</p>
          <button>Связаться с турмэйтом</button>
        </div>
      </div>
      <div className="tour_contact_checkout">
        <div className="tour_contact_checkout_image">
          <img src={`${uploadsUrl}/${image}`} />
        </div>
        <div className="tour_contact_checkout_text">
          <p>
            Также, у {name} вы можете заказать себе дополнительные <br />{" "}
            услуги, такие как: Ночлег, фотосессия, Планирование поездки
          </p>
          <button>Go to checkout</button>
        </div>
      </div>
    </>
  );
};

export default TourTourmateCard;
