/* eslint-disable react/prop-types */
import React from "react";
import { uploadsUrl } from "../../../../constants";
import "./TourmateInfoCard.sass";

const TourmateInfoCard = ({ name, image, surname, status }) => {
  let imageSrc;
  if (image) {
    imageSrc = `${uploadsUrl}/${image}`;
  } else {
    imageSrc =
      "https://protkd.com/wp-content/uploads/2017/04/default-image.jpg";
    console.log(imageSrc);
  }

  return (
    <div className="TourmateInfoCard">
      <img className="TourmateInfoCard_bgimg" src={`${uploadsUrl}/${image}`} />
      <div className="TourmateInfoCard_info_block">
        <h3 className="TourmateInfoCard_title">
          {name} {surname}
        </h3>
        <p className="TourmateInfoCard_status">{status}</p>
      </div>
    </div>
  );
};

export default TourmateInfoCard;
