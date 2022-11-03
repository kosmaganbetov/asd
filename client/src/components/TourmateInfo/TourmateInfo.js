import React from "react";
import "./TourmateInfo.scss";
import Ronaldo from "../../assets/images/Ronaldo.jpg";
import Bill from "../../assets/images/Bill_Gates.jpg";
import Bezos from "../../assets/images/Bezos.jpg";
import Mask from "../../assets/images/Mask.jpg";

const TourmateInfo = () => {
  return (
    <>
      <div className="tourmate_title">
        <h1>Наши турмэйты</h1>
      </div>

      <div className="tourmate_card">
        <img className="tourmate_card_img" src={Ronaldo} alt="img"></img>
        <div className="title_travel">Криштиану Роналду</div>
        <div className="text_travel">Покажу достопримеча...</div>

        <img className="tourmate_card_img" src={Bill} alt="img"></img>
        <div className="title_travel">Билл Гейтс</div>
        <div className="text_travel">Always Ready</div>

        <img className="tourmate_card_img" src={Bezos} alt="img"></img>
        <div className="title_travel">Джеф Безос</div>
        <div className="text_travel">Я всегда готов показать...</div>

        <img className="tourmate_card_img" src={Mask} alt="img"></img>
        <div className="title_travel">Илон Маск</div>
        <div className="text_travel">Я Илон, покажу тебе св...</div>
      </div>
    </>
  );
};

export default TourmateInfo;
