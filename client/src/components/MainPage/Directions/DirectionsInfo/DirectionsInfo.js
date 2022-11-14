/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DirectionsInfoCard from "../DirectionsInfoCard/DirectionsInfoCard";
import "./DirectionInfo.sass";
// eslint-disable-next-line react/prop-types
const DirectionsInfo = ({ directions }) => {
  return (
    <>
      <div className="DirectionInfo">
        <div className="DirectionInfo_container">
          <div className="DirectionInfo_title">Популярные направления</div>
          <div className="DirectionInfo_list">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectionsInfo;
