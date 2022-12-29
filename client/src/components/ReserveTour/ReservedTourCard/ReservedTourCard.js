/* eslint-disable react/prop-types */
import React from "react";
import "./ReservedTourCard.sass";
import DateIcon from "../../../assets/icons/calendar.png";
import GroupIcon from "../../../assets/icons/group.png";
const ReservedTourCard = (props) => {
  return (
    <div className="ReservedTourCard">
      <div className="ReservedTourCard__header">
        <img
          className="ReservedTourCard__header_img"
          src={props.img ? props.img : null}
          alt="TourImg"
        />
        <img
          className="ReservedTourCard__header_tourmateimg"
          src={props.tourmateImg ? props.tourmateImg : null}
          alt="Tourmate Photo"
        />
      </div>
      <div className="ReservedTourCard__content">
        <h2 className="ReservedTourCard__title">{props.tourTitle}</h2>
        <p className="ReservedTourCard__tourmate">
          C {props.tourmateName} {props.tourmateSurname}
        </p>

        <div className="ReservedTourCard__tour_info">
          <div className="ReservedTourCard__tour_reserve">
            <div className="ReservedTourCard__tour_date">
              <img
                className="ReservedTourCard__tour_date_icon"
                src={DateIcon}
              />
              {props.tourDate}
            </div>
            <div className="ReservedTourCard__tourist_count">
              <img
                className="ReservedTourCard__tourist_count_icon"
                src={GroupIcon}
              />
              {props.touristNumber} человек
            </div>
          </div>
          <div className="ReservedTourCard__tour_prices">
            <div className="ReservedTourCard__tour_price">
              <div className="ReservedTourCard__tour_price_title">
                Стоимость тура
              </div>
              <div>{props.tourPrice}$</div>
            </div>
            {props.tourServices?.map((service) => {
              return (
                <div
                  key={service.title + service.price}
                  className="ReservedTourCard__tour_service"
                >
                  <div className="ReservedTourCard__tour_service_title">
                    {service.title}
                  </div>
                  <div className="ReservedTourCard__tour_service_price">
                    {service.price}$
                  </div>
                </div>
              );
            })}
            <div className="ReservedTourCard__tour_price _summ">
              <div className="ReservedTourCard__tour_price_title">
                Итого к оплате
              </div>
              <div>{props.tourFullPrice}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservedTourCard;
