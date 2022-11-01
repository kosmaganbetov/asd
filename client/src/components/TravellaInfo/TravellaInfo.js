import React from "react";
import './TravellaInfo.scss';


const TravellaInfo = (props) => {
    
    return (
        <div>    
            <div className="TravellaInfo">

                <div className="TravInfoImg">
                  <a href="#"><img className="TravellaImg" src={props.img} alt ="img"></img></a>  
                </div>
                <div className="TravInfoText">
                    <p className="text">{props.text}</p>
                </div>
                

            </div>
        </div>

            

        
        
    )
}

export default TravellaInfo;