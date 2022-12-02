/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ToursInfoCard from "../ToursInfoCard/ToursInfoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ToursInfo.sass";
const ToursInfo = ({ tours }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="ToursInfo">
      <div className="ToursInfo_container">
        <div className="ToursInfo_title">Популярные туры</div>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          className="ToursInfo_list"
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          {Object.keys(tours).map((tour) => {
            return (
              <ToursInfoCard
                key={tours[tour]._id}
                id={tours[tour]._id}
                title={tours[tour].title}
                image={tours[tour].image}
                tourmateImage={tours[tour].tourmateID?.image}
                torumateName={tours[tour].tourmateID?.name}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default ToursInfo;
