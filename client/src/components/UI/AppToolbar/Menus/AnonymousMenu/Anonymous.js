import React from "react";
import { Link } from "react-router-dom";
const AnonymousMenu = () => {
  return (
    <div className="Anonymous__menu">
      <Link to="/login" className="header_links_link">
        Войти
      </Link>
      <Link to="/register" className="header_links_register">
        Зарегистрироваться
      </Link>
    </div>
  );
};

export default AnonymousMenu;
