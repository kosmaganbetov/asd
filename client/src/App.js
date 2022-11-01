import React from "react";
import TravellaInfo from "./components/TravellaInfo/TravellaInfo";
import TourmateInfo from "./components/TourmateInfo/TourmateInfo";
import FooterMain from "./components/FooterMain/FooterMain";


function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <div className="TravellaTitle">
        <h1>Travella это</h1>
      </div>
      <div className="TravellaInfoBlock">
        <TravellaInfo img={require("./components/TravellaInfo/Assets/Traveller_img1.jpg")} text= "1. Всегда персональный"/>
        <TravellaInfo img={require("./components/TravellaInfo/Assets/Traveller_img2.jpg")} text= "2. С местным жителем"/>
        <TravellaInfo img={require("./components/TravellaInfo/Assets/Traveller_img3.jpg")} text= "3. Без толпы"/>
      </div>

      <div className="TourmateTitle">
        <h1>Наши турмэйты</h1>
      </div>
      <div className="TourmateInfoBlock">
        <TourmateInfo img={require("./components/TourmateInfo/Assets/Ronaldo.jpg")} title= "Криштиану Роналду" text= "Покажу достопримеча..."/>
        <TourmateInfo img={require("./components/TourmateInfo/Assets/Bill_Gates.jpg")} title= "Билл Гейтс" text= "Always ready"/>
        <TourmateInfo img={require("./components/TourmateInfo/Assets/Bezos.jpg")} title= "Джеф Безос" text= "Я всегда готов показать..."/>
        <TourmateInfo img={require("./components/TourmateInfo/Assets/Mask.jpg")} title= "Илон Маск" text= "Я Илон Маск покажу тебе..."/>
      </div>
      
        <FooterMain img={require("./components/FooterMain/Assets/phone_1.jpg")}/>
=======
      <p></p>
>>>>>>> e490236518b2b37409db08e03708feedf8c250be
    </div>
  );
}

export default App;
