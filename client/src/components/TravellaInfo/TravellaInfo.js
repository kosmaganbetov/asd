import React from "react";
import "./TravellaInfo.scss";
import Traveller_1 from "../../assets/images/Traveller_img1.jpg";
import Traveller_2 from "../../assets/images/Traveller_img2.jpg";
import Traveller_3 from "../../assets/images/Traveller_img3.jpg";

const TravellaInfo = () => {
  return (
    <>
      <div className="travella_title">
        <h1>Travella это</h1>
      </div>
      <div className="travella_container">
        <div className="travella_info">
          <div className="trav_info_text">
            <img className="travella_img" src={Traveller_1} alt="img"></img>
            <span className="text">1. Всегда персональный</span>
          </div>

          <div className="trav_info_text">
            <img className="travella_img" src={Traveller_2} alt="img"></img>
            <span className="text">2. С местным жителем</span>
          </div>

          <div className="trav_info_text">
            <img className="travella_img" src={Traveller_3} alt="img"></img>
            <span className="text">3. Без толпы</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravellaInfo;
