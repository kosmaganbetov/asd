import { Link } from "react-router-dom";
import "./AppToolbar.sass";
const AppTollbar = () => {
  return (
    <div className="header">
      <div className="header_title">
        <h1>Travella</h1>
      </div>
      <div className="header_links">
        <Link className="header_links_link">Стать Турмэйтом</Link>
        <Link className="header_links_link">Каз/KZT</Link>
        <Link to="/login" className="header_links_link">
          Войти
        </Link>
        <Link to="/register" className="header_links_register">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};
export default AppTollbar;
