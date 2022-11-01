import React from "react";
import "./TourmateInfo.scss";

const TourmateInfo = (props) => {
    
    return(
        <div className="TourmateCard">

            <a href="#"><img className="TourmateCardImg" src={props.img} alt ="img"></img></a>
            <span  className="titleTravel">{props.title}</span>
            <span  className="textTravel">{props.text}</span>
           
        </div>
    )
   
}

export default TourmateInfo;