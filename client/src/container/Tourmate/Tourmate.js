/* eslint-disable react/prop-types */
import BillGates from "../../assets/image/billgates.png";
import Location from "../../assets/image/location.png";
import Web from "../../assets/image/web.png";
import Verified from "../../assets/image/verified.png";
import Clock from "../../assets/image/clock.png";
import Walk from "../../assets/image/walk.png";
import Share from "../../assets/image/share.png";
import Gallery1 from "../../assets/image/photo1.jpg";
import Gallery2 from "../../assets/image/photo2.jpg";
import Gallery3 from "../../assets/image/photo3.jpg";
import Gallery4 from "../../assets/image/photo4.jpg";
import Gallery5 from "../../assets/image/photo5.jpg";
import "./Tourmate.sass";

const Tourmate = (props) => {
  return (
    <div className="tourmate">
      <div className="tourmate_card">
        <div className="tourmate_card_info">
          <div className="tourmate_card_info_image">
            <img src={BillGates} />
          </div>
          <div className="tourmate_card_info_text">
            <h2 className="tourmate_card_info_text_title">{props.name}</h2>
            <p className="tourmate_card_info_text_p">
              Америкадағы <br /> қарапайым жігіт
            </p>
          </div>
        </div>
        <div className="tourmate_card_rating">
          <p className="tourmate_card_rating_text">★★★★☆ 46 отзывов</p>
        </div>
        <div className="tourmate_card_items">
          <div className="tourmate_card_items_item">
            <img src={Location} />
            <p>{props.city}</p>
          </div>
          <div className="tourmate_card_items_item">
            <img src={Web} />
            <p>
              {props.languages.map((language) => {
                return (
                  <span key={language}> {language} </span>
                  // eslint-disable-next-line semi
                );
              })}
              ;
            </p>
          </div>
          <div className="tourmate_card_items_item">
            <img src={Verified} />
            {props.verified ? <p>Верифицирован</p> : <p> Не верифицирован</p>}
          </div>
          <div className="tourmate_card_items_item">
            <img src={Clock} />
            <p>Время отклика: {props.timeToAnswer} часов</p>
          </div>
          <div className="tourmate_card_items_item">
            <img src={Walk} />
            <p>{props.tours} туров</p>
          </div>
        </div>
        <div className="tourmate_card_buttons">
          <button className="tourmate_card_buttons_contact">Связаться</button>
        </div>
        <div className="tourmate_card_buttons">
          <a className="tourmate_card_buttons_share">
            <img src={Share} /> <span>Поделиться</span>
          </a>
        </div>
      </div>

      <div className="tourmate_profile">
        <div className="tourmate_profile_title">
          <h3>Привет, добро пожаловать в мой профиль!</h3>
        </div>
        <div className="tourmate_profile_video">
          <video
            controls
            width="100%"
            height="367"
            poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
          >
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="tourmate_text">
          <p>
            С самого детства мои учителя говорили мне, что я должен быть гидом,
            быть разносторонним и говорить на языках. Но когда пришло время
            поступать в колледж, у меня было много интересов, поэтому я выбрал
            политологию. Это был отличный курс, но не для меня. После окончания
            колледжа я начал работать на разных работах, начиная с почты и
            заканчивая строительством и сбором платы за проезд.Однажды ни с того
            ни с сего ко мне пришла работа в сфере туризма,и я согласился,
            конечно.
          </p>
          <p>
            Я прошел курсы и занятия с одним из лучших официальных гидов
            Португалии и начал совершать туры по всей стране.
          </p>
          <p>
            Сейчас, спустя 6 лет,у меня есть свой бизнес, мои клиенты, и я
            работаю в других странах.
          </p>
        </div>
      </div>

      <div className="tourmate_gallery">
        <div className="tourmate_gallery_title">
          <h3>Фотографий</h3>
        </div>
        <div className="tourmate_gallery_images">
          <div className="tourmate_gallery_images_top">
            <img src={Gallery1} />
            <img src={Gallery2} />
          </div>
          <div className="tourmate_gallery_images_bottom">
            <img src={Gallery3} />
            <img
              className="tourmate_gallery_images_bottom_second"
              src={Gallery4}
            />
            <img src={Gallery5} />
          </div>
          <div className="tourmate_gallery_link">
            <a>Посмотреть все фотографии</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tourmate;
