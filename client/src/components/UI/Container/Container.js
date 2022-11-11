import React from "react";
import "./Container.sass";

const Container = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className="Container">{props.children}</div>;
};

export default Container;
