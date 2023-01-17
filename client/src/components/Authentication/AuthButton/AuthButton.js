/* eslint-disable react/prop-types */
import React from "react";
import "./AuthButton.sass";

const AuthButton = (props) => {
  return (
    <button
      id="register-button"
      className="AuthButton"
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default AuthButton;
