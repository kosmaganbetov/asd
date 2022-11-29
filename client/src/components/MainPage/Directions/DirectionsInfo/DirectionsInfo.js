/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DirectionsInfoCard from "../DirectionsInfoCard/DirectionsInfoCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./DirectionInfo.sass";
// eslint-disable-next-line react/prop-types
const DirectionsInfo = ({ directions }) => {
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
    <>
      <div className="DirectionInfo">
        <div className="DirectionInfo_container">
          <div className="DirectionInfo_title">Популярные направления</div>
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            className="DirectionInfo_list"
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
            {directions.map((direction) => {
              return (
                <DirectionsInfoCard
                  key={direction._id}
                  id={direction._id}
                  name={direction.name}
                  image={direction.image}
                  description={direction.description}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default DirectionsInfo;
