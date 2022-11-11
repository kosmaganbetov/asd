import React from "react";
import Container from "../../UI/Container/Container";
import "./OnlineTours.sass";
import OnlineToursIMG from "../../../assets/images/onlineTours.png";
const OnlineTours = () => {
  return (
    <Container>
      <div className="OnlineTours">
        <div className="OnlineTours_content">
          <h3 className="OnlineTours_title">Смотреть онлайн туры</h3>
          <p className="OnlineTours_text">
            Гуляйте по миру не вставая с дивана :) <br />
            Пригласите своих близких на прогулки с нашими Турмэйтами
          </p>
          <button className="OnlineTours_button">Перейти на онлайн тур</button>
        </div>
        <img
          className="OnlineTours_img"
          src={OnlineToursIMG}
          alt="OnlineTours"
        />
      </div>
    </Container>
  );
};

export default OnlineTours;
