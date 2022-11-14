import React from "react";
import { uploadsUrl } from "../../../../constants";
import "./DirectionsInfoCard.sass";
// eslint-disable-next-line react/prop-types
const DirectionsInfoCard = ({ name, description, image }) => {
  return (
    <div className="DirectionsInfoCard">
      <div className="DirectionsInfoCard_bgimg">
        <img src={`${uploadsUrl}/${image}`} />
      </div>
      <div className="DirectionsInfoCard_text">
        <h3 className="DirectionsInfoCard_text_title">{name}</h3>
        <p className="DirectionsInfoCard_text_description">{description}</p>
      </div>
    </div>
  );
};

export default DirectionsInfoCard;
