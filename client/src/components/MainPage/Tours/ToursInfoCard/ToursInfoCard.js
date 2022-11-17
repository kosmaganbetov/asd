import React from "react";
import { uploadsUrl } from "../../../../constants";
import "./ToursInfoCard.sass";
// eslint-disable-next-line react/prop-types
const ToursInfoCard = ({ title, image, tourmateImage, torumateName }) => {
  return (
    <div className="ToursInfoCard">
      <div className="ToursInfoCard_bgimg">
        <img src={`${uploadsUrl}/${image}`} />
      </div>
      <div className="ToursInfoCard_text">
        <h1 className="ToursInfoCard_text_title">{title}</h1>
      </div>
      <div className="ToursInfoCard_tourmate">
        <div className="ToursInfoCard_tourmate_image">
          <img src={`${uploadsUrl}/${tourmateImage}`} />
        </div>
        <div className="ToursInfoCard_tourmate_text">
          <p className="ToursInfoCard_tourmate_text_title">{torumateName}</p>
          <p className="ToursInfoCard_tourmate_text_rating">357 прогулок</p>
          <p className="ToursInfoCard_tourmate_text_rating">рейтинг 4.5 из 5</p>
        </div>
      </div>
    </div>
  );
};

export default ToursInfoCard;
