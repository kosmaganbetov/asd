import "./AboutTour.sass";
import Gallery1 from "../../../assets/images/photo1.jpg";
import Gallery2 from "../../../assets/images/photo2.jpg";
import Gallery3 from "../../../assets/images/photo3.jpg";
import Gallery4 from "../../../assets/images/photo4.jpg";
import Gallery5 from "../../../assets/images/photo5.jpg";

// eslint-disable-next-line react/prop-types
const AboutTour = ({ title, description }) => {
  return (
    <>
      <div className="tour_tourmate">
        <div className="tour_tourmate_text">
          <h2>
            {title}: {description}
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
          С самого детства мои учителя говорили мне, что я должен быть гидом,
          быть разносторонним и говорить на языках. Но когда пришло время время
          поступать в колледж, у меня было много интересов, поэтому я
          политологию. Это был отличный курс, но не для меня. После окончания
          колледжа я начал работать на разных работах, начиная с почты и
          заканчивая строительством и сбором платы за проезд. Однажды ни с того
          ни с сего ко мне пришла работа в сфере туризма, и я согласился,
          конечно.
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
    </>
  );
};

export default AboutTour;
