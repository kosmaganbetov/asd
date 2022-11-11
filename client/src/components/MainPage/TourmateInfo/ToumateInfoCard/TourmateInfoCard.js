/* eslint-disable react/prop-types */
import React from "react";
import { uploadsUrl } from "../../../../constants";
import "./TourmateInfoCard.sass";
import { useNavigate } from "react-router-dom";

const TourmateInfoCard = ({ id, name, image, surname, status }) => {
  const navigate = useNavigate();

  const redirectToTourmate = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="TourmateInfoCard" onClick={redirectToTourmate}>
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
