import "./TourFooter.sass";
import New_York from "../../../assets/images/New_York_City.jpg";

const TourFooter = () => {
  return (
    <div className="info_tours_main">
      <div className="Tours__footer">
        <p className="Tours__footer_title">Скачайте приложение</p>
      </div>

      <div className="Tours__info_div">
        <div className="Tours__info_div">
          <p>
            Общайтесь с местными жителями (Турмэйтами) всегда и везде!
            приложение, чтобы стать частью самого быстрорастущего местного
            туристического сообщества. Попросите Турмэйта персонализировать ваш
            тур в соответствии с вашими потребностями. Держите все свои заказы
            под рукой.
          </p>
        </div>
        <div className="Footer_Icons">
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
      <div className="Tours__Footer_Img">
        <img className="Footer__Img" src={New_York} />
      </div>
      <div className="Footer__button">
        <div className="Footer__Button_Text">
          <p>Нью - Йорк</p>
        </div>
        <button className="Footer__Buttons">
          <a className="Footer__Link" href="#">
            Посмотреть другие туры в этом городе
          </a>
        </button>
      </div>
    </div>
  );
};

export default TourFooter;
