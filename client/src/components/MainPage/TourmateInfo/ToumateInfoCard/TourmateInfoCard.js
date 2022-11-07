/* eslint-disable react/prop-types */
import React from "react";
import "./TourmateInfoCard.sass";

const TourmateInfoCard = (props) => {
  return (
    <div className="TourmateInfoCard">
      <img className="TourmateInfoCard_bgimg" src={props.bgimg} />
      <div className="TourmateInfoCard_info_block">
        <h3 className="TourmateInfoCard_title">{props.title}</h3>
        <p className="TourmateInfoCard_status">{props.status}</p>
      </div>
    </div>
  );
};

export default TourmateInfoCard;
