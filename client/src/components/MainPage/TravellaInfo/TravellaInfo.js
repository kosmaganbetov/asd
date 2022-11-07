import React from "react";
import "./TravellaInfo.sass";
import Traveller_1 from "../../../assets/images/Traveller_img1.jpg";
import Traveller_2 from "../../../assets/images/Traveller_img2.jpg";
import Traveller_3 from "../../../assets/images/Traveller_img3.jpg";
import Container from "../../UI/Container/Container";

const TravellaInfo = () => {
  return (
    <Container>
      <div className="TravellaInfo_title">
        <h1>Travella это</h1>
      </div>
      <div className="TravellaInfo_container">
        <div className="TravellaInfo_info_card">
          <img className="TravellaInfo_img" src={Traveller_1} alt="img"></img>
          <span className="TravellaInfo_info_card_text">
            1. Всегда персональный
          </span>
        </div>
        <div className="TravellaInfo_info_card">
          <img className="TravellaInfo_img" src={Traveller_2} alt="img"></img>
          <span className="TravellaInfo_info_card_text">
            2. С местным жителем
          </span>
        </div>
        <div className="TravellaInfo_info_card">
          <img className="TravellaInfo_img" src={Traveller_3} alt="img"></img>
          <span className="TravellaInfo_info_card_text">3. Без толпы</span>
        </div>
      </div>
    </Container>
  );
};

export default TravellaInfo;
