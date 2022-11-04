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
        <div className="ronaldo">
          <img className="tourmate_card_img" src={Ronaldo} alt="img"></img>
          <h2 className="title_travel_ronaldo">Криштиану Роналду</h2>
          <h4 className="text_travel">Always Ready</h4>
        </div>
        <div className="bill">
          <img className="tourmate_card_img" src={Bill} alt="img"></img>
          <h2 className="title_travel_bill">Билл Гейтс</h2>
          <h4 className="text_travel">Покажу достопримеча...</h4>
        </div>

        <div className="bezos">
          <img className="tourmate_card_img" src={Bezos} alt="img"></img>
          <h2 className="title_travel_bezos">Джеф Безос</h2>
          <h4 className="text_travel">Я всегда готов показать...</h4>
        </div>

        <div className="mask">
          <img className="tourmate_card_img" src={Mask} alt="img"></img>
          <h2 className="title_travel_mask">Илон Маск</h2>
          <h4 className="text_travel">Я Илон, покажу тебе св...</h4>
        </div>
      </div>
      <div className="tormate_text"></div>
    </>
  );
};

export default TourmateInfo;
