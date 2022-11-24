/* eslint-disable react/prop-types */
import React from "react";
import "./FormInput.sass";

const FormInput = (props) => {
  return (
    <input
      className="FormInput"
      value={props.value}
      type={props.type ? props.type : "text"}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default FormInput;
