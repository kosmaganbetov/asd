/* eslint-disable react/prop-types */
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./Map.sass";
const MapBlock = (props) => {
  return (
    <div className="MapBlock">
      <YMaps>
        <Map defaultState={props.defaultState} width={"100%"} height={"350px"}>
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    </div>
  );
};
export default MapBlock;
