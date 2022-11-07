import React from "react";
import Container from "../../UI/Container/Container";
import TourmateInfoCard from "./ToumateInfoCard/TourmateInfoCard";
import "./TourmateInfo.sass";
import Ronaldo from "../../../assets/images/Ronaldo.jpg";
import BillGates from "../../../assets/images/Bill_Gates.jpg";
import Bezos from "../../../assets/images/Bezos.jpg";
import Elon from "../../../assets/images/Mask.jpg";

const TourmateInfo = () => {
  return (
    <>
      <div className="TourmateInfo">
        <Container>
          <div className="TourmateInfo_title">Наши турмейты</div>
          <div className="TourmateInfo_list">
            <TourmateInfoCard
              bgimg={Ronaldo}
              title="Криштиану Роналду"
              status="Покажу достопремичательности"
            />
            <TourmateInfoCard
              bgimg={BillGates}
              title="Бил Гейтс"
              status="Always ready"
            />
            <TourmateInfoCard
              bgimg={Bezos}
              title="Джеф Безос"
              status="Я Джеф, готов показать тебе все свои яхты"
            />
            <TourmateInfoCard
              bgimg={Elon}
              title="Криштиану Роналду"
              status="Я Илон покажу тебе свой огромный дом =)"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TourmateInfo;
