import React from "react";
import "./FooterMain.sass";
import Phone from "../../../assets/images/phone_1.jpg";
import Container from "../../UI/Container/Container";

const FooterMain = () => {
  return (
    <Container>
      <div className="footer_container">
        <div className="footer_info">
          <div className="footer_title">
            <h1>Скачайте приложения</h1>
          </div>
          <p className="footer_text">
            Общайтесь с местными жителями (Турмэйтами) всегда и везде. Получите
            приложение, чтобы стать частью самого быстрорастущего местного
            туристического сообщества. Попросите Турмэйта персонализировать ваш
            тур в соответствии с вашими потребностями. Держите все свои заказы
            под рукой.
          </p>
        </div>

        <div className="footer_img">
          <img className="footer_img_phone" src={Phone} alt="img"></img>
        </div>

        <div className="footer_icons">
          <a href="https://apps.apple.com/app/id1551353775">
            <img
              className="storeLink"
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
              alt="Download on the App Store"
            ></img>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.stagescycling.stages">
            <img
              className="storeLink"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            ></img>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default FooterMain;
