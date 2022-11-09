/* eslint-disable react/prop-types */
import React from "react";
import Container from "../../UI/Container/Container";
import TourmateInfoCard from "./ToumateInfoCard/TourmateInfoCard";
import "./TourmateInfo.sass";

const TourmateInfo = ({ tourmates }) => {
  return (
    <>
      <div className="TourmateInfo">
        <Container>
          <div className="TourmateInfo_title">Наши турмейты</div>
          <div className="TourmateInfo_list">
            {tourmates.map((tourmate) => {
              return (
                <TourmateInfoCard
                  key={tourmate._id}
                  name={tourmate.name}
                  surname={tourmate.surname}
                  image={tourmate.image}
                  status={tourmate.status}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default TourmateInfo;
