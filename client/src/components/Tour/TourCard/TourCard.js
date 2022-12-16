import { uploadsUrl } from "../../../constants";
import "./TourCard.sass";
import Share from "../../../assets/images/share.png";

// eslint-disable-next-line react/prop-types
const TourCard = ({ price, image, name, surname, description, navigate }) => {
  return (
    <div className="tour_card">
      <div className="tour_card_container">
        <div className="tour_card_price">
          <h3>{price}$ на одного человека</h3>
          <p>★★★★☆ 46 отзывов</p>
        </div>
        <div className="tour_card_inputs">
          <input type="date" />
          <select>
            <option>1 взрослый</option>
          </select>
        </div>
        <div className="tour_card_tourmate">
          <img src={`${uploadsUrl}/${image}`} />
          <div className="tour_card_tourmate_text">
            <h4>
              {name} {surname}
            </h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="tourmate_card_buttons">
          <button
            className="tourmate_card_buttons_contact"
            onClick={() => {
              navigate("/reservation");
            }}
          >
            Забронировать
          </button>
        </div>
        <div className="tourmate_card_buttons">
          <a className="tourmate_card_buttons_share">
            <img src={Share} /> <span>Поделиться</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
