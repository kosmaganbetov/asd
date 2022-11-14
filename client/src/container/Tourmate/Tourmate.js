// import BillGates from "../../assets/images/billgates.png";
import Location from "../../assets/images/location.png";
import Web from "../../assets/images/web.png";
import Verified from "../../assets/images/verified.png";
import Clock from "../../assets/images/clock.png";
import Walk from "../../assets/images/walk.png";
import Share from "../../assets/images/share.png";
import Gallery1 from "../../assets/images/photo1.jpg";
import Gallery2 from "../../assets/images/photo2.jpg";
import Gallery3 from "../../assets/images/photo3.jpg";
import Gallery4 from "../../assets/images/photo4.jpg";
import Gallery5 from "../../assets/images/photo5.jpg";
import "./Tourmate.sass";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTourmate } from "../../store/actions/tourmatesActions";
import { useDispatch, useSelector } from "react-redux";
import { uploadsUrl } from "../../constants";

const Tourmate = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tourmate = useSelector((state) => state.tourmates.tourmate);
  console.log(tourmate);
  useEffect(() => {
    dispatch(fetchTourmate(params.id));
  }, []);

  console.log(tourmate);

  return (
    <div className="tourmate">
      <div className="tourmate_card">
        <div className="tourmate_card_info">
          <div className="tourmate_card_info_image">
            <img src={`${uploadsUrl}/${tourmate?.image}`} />
          </div>
          <div className="tourmate_card_info_text">
            <h2 className="tourmate_card_info_text_title">
              {tourmate.name} {tourmate.surname}
            </h2>
            <p className="tourmate_card_info_text_p">{tourmate.description}</p>
          </div>
        </div>
        <div className="tourmate_card_rating">
          <p className="tourmate_card_rating_text">★★★★☆ 46 отзывов</p>
        </div>
        <div className="tourmate_card_items">
          <div className="tourmate_card_items_item">
            <img src={Location} />
            <p>{tourmate.location}</p>
          </div>
          <div className="tourmate_card_items_item">
            <img src={Web} />
            <p>
              {tourmate?.languages?.map((language) => {
                return <span key={language}>{language}, </span>;
              })}
            </p>
          </div>
          <div className="tourmate_card_items_item">
            <img src={Verified} />
            <p>{tourmate.verificate ? "Верифицирован" : "Не верифицирован"}</p>
          </div>
          <div className="tourmate_card_items_item">
            <img src={Clock} />
            <p>Время отклика менее 12 часов</p>
          </div>
          <div className="tourmate_card_items_item">
            <img src={Walk} />
            <p>7 туров</p>
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
          <p>{tourmate.text}</p>
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
