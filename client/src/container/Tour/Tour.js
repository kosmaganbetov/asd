import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadsUrl } from "../../constants";
import { fetchTour } from "../../store/actions/toursActions";
import Gallery1 from "../../assets/images/photo1.jpg";
import Gallery2 from "../../assets/images/photo2.jpg";
import Gallery3 from "../../assets/images/photo3.jpg";
import Gallery4 from "../../assets/images/photo4.jpg";
import Gallery5 from "../../assets/images/photo5.jpg";
import Share from "../../assets/images/share.png";
import New_York from "../../assets/images/New_York_City.jpg";
import "./Tour.sass";
import MapBlock from "../../components/Map/Map";
import Plan from "../../components/Tour/Plan/Plan";

const Tour = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.tours.tour);
  const defaultState = {
    center: [55.684758, 37.738521],
    zoom: 13,
  };
  console.log(tour);
  useEffect(() => {
    dispatch(fetchTour(params.id));
  }, []);

  return (
    <div className="tour">
      <div className="tour_container">
        <div className="column">
          <div className="tour_card">
            <div className="tour_card_container">
              <div className="tour_card_price">
                <h3>{tour.price}$ на одного человека</h3>
                <p>★★★★☆ 46 отзывов</p>
              </div>
              <div className="tour_card_inputs">
                <input type="date" />
                <select>
                  <option>1 взрослый</option>
                </select>
              </div>
              <div className="tour_card_tourmate">
                <img src={`${uploadsUrl}/${tour?.tourmateID?.image}`} />
                <div className="tour_card_tourmate_text">
                  <h4>
                    {tour?.tourmateID?.name} {tour?.tourmateID?.surname}
                  </h4>
                  <p>{tour?.tourmateID?.description}</p>
                </div>
              </div>
              <div className="tourmate_card_buttons">
                <button className="tourmate_card_buttons_contact">
                  Забронировать
                </button>
              </div>
              <div className="tourmate_card_buttons">
                <a className="tourmate_card_buttons_share">
                  <img src={Share} /> <span>Поделиться</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="tour_tourmate">
            <div className="tour_tourmate_text">
              <h2>
                {tour.title}:{tour.description}
              </h2>
            </div>
            <div className="tour_tourmate_images">
              <div className="tour_tourmate_images_top">
                <img src={Gallery1} />
                <img src={Gallery2} />
              </div>
              <div className="tour_tourmate_images_bottom">
                <img src={Gallery3} />
                <img src={Gallery4} />
                <img src={Gallery5} />
              </div>
            </div>
          </div>
          <div className="tour_text">
            <p>
              С самого детства мои учителя говорили мне, что я должен быть
              гидом, быть разносторонним и говорить на языках. Но когда пришло
              время поступать в колледж, у меня было много интересов, поэтому я
              выбрал политологию. Это был отличный курс, но не для меня. После
              окончания колледжа я начал работать на разных работах, начиная с
              почты и заканчивая строительством и сбором платы за проезд.
              Однажды ни с того ни с сего ко мне пришла работа в сфере туризма,
              и я согласился, конечно.
            </p>
            <p>
              Я прошел курсы и занятия с одним из лучших официальных гидов
              Португалии и начал совершать туры по всей стране.
            </p>
            <p>
              Сейчас, спустя 6 лет, у меня есть свой бизнес, мои клиенты, и я
              работаю в других странах.
            </p>
          </div>

          <Plan plan={tour.plan} />
          <div className="tour_tourmate_offer">
            <img src={`${uploadsUrl}/${tour?.tourmateID?.image}`} />
            <p>
              {tour?.tourmateID?.name} {tour?.tourmateID?.surname} может
              персонализировать ваш тур <br /> Дайте нам знать ваши предпочтения
              для <br /> персонализированного тура!
            </p>
            <button>Запросить индивидуальное предложение</button>
          </div>
          <div className="Tour__map">
            <h3 className="Tour__map_title">Где встретимся?</h3>
            <p className="Tour__map_location">
              Ваш турмэйт будет вас ждать по адресу:{" "}
              {"Москва, ул. Любинская 61"}
            </p>
            <MapBlock defaultState={defaultState} />
          </div>
          <div className="tour_good_to_know">
            <h3>Good to know</h3>
            <div className="tour_good_to_know_subtitle">
              <span>Что входит в тур</span>
              {tour?.program?.included.map((item) => {
                return (
                  <div className="tour_good_to_know_yes" key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="tour_good_to_know_subtitle">
              <span>Что не входит в тур</span>
              {tour?.program?.notincluded.map((item) => {
                return (
                  <div className="tour_good_to_know_no" key={item}>
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="tour_contact_tourmate">
              <div className="tour_contact_tourmate_image">
                <img src={`${uploadsUrl}/${tour?.tourmateID?.image}`} />
              </div>
              <div className="tour_contact_tourmate_text">
                <p>Все еще остались вопросы?Напиши мне</p>
                <button>Связаться с турмэйтом</button>
              </div>
            </div>
            <div className="tour_contact_checkout">
              <div className="tour_contact_checkout_image">
                <img src={`${uploadsUrl}/${tour?.tourmateID?.image}`} />
              </div>
              <div className="tour_contact_checkout_text">
                <p>
                  Также, у {tour?.tourmateID?.name} вы можете заказать себе
                  дополнительные <br /> услуги, такие как: Ночлег, фотосессия,
                  Планирование поездки
                </p>
                <button>Go to checkout</button>
              </div>
            </div>
          </div>
          <div className="info_tours_main">
            <div className="Tours__footer">
              <h3 className="Tours__footer_title">Скачайте приложение</h3>
            </div>

            <div className="Tours__info_div">
              <div className="Tours__info_div">
                <p>
                  Общайтесь с местными жителями (Турмэйтами) всегда и везде!
                  Получите приложение, чтобы стать частью самого быстрорастущего
                  местного туристического сообщества. Попросите Турмэйта
                  персонализировать ваш тур в соответствии с вашими
                  потребностями. Держите все свои заказы под рукой.
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
              <button className="Footer__Button">
                <a className="Footer__Link" href="#">
                  Посмотреть другие туры в этом городе
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tour;
