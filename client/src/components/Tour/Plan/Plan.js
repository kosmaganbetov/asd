/* eslint-disable react/prop-types */
import React from "react";
import "./Plan.sass";
const Plan = (props) => {
  const maxLength = props.plan?.length;
  return (
    <div className="TourPlan">
      <h3 className="TourPlan__title">План тура</h3>
      <ul className="events"></ul>
      {props.plan?.map((elem, index) => {
        if (index !== maxLength - 1 && index !== 0) {
          return (
            <div key={elem.title + index} className="TourPlan__block">
              <div className="TourPlan__checkpoint"></div>
              <div className="TourPlan__block_content">
                <div className="TourPlan__block_title">{elem.title}</div>
                <div className="TourPlan__block_description">
                  {elem.description}
                </div>
              </div>
            </div>
          );
        } else if (index === maxLength - 1) {
          return (
            <div key={elem.title + index} className="TourPlan__block">
              <div className="TourPlan__checkpoint_last"></div>
              <div className="TourPlan__block_content">
                <div className="TourPlan__block_title">{elem.title}</div>
                <div className="TourPlan__block_description">
                  {elem.description}
                </div>
              </div>
            </div>
          );
        } else if (index === 0) {
          return (
            <div key={elem.title + index} className="TourPlan__block">
              <div className="TourPlan__checkpoint_first"></div>
              <div className="TourPlan__block_content">
                <div className="TourPlan__block_title">{elem.title}</div>
                <div className="TourPlan__block_description">
                  {elem.description}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Plan;
