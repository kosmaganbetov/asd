/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./AuthForm.sass";
const AuthForm = (props) => {
  return (
    <div className="AuthForm__wrapper">
      <h2 className="AuthForm__title">{props.title}</h2>
      <p className="AuthForm__info">{props.info}</p>
      <form className="AuthForm" onSubmit={props.onSubmit}>
        {props.children}
      </form>
      <p className="AuthForm__redirect">
        {props.redirectText}
        <Link to={props.redirectLinkPath} className="AuthForm__redirect_link">
          {props.redirectLink}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
