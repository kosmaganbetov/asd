/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./AppToolbar.sass";
import AnonymousMenu from "./Menus/AnonymousMenu/Anonymous";
import UserMenu from "./Menus/UserMenu/UserMenu";
const AppTollbar = (props) => {
  return (
    <div className="header">
      <div className="header_title">
        <Link className="header_title" to="/">
          Travella
        </Link>
      </div>
      <div className="header_links">
        <Link className="header_links_link">Стать Турмэйтом</Link>
        <Link className="header_links_link">Каз/KZT</Link>
        {props.user ? <UserMenu user={props.user} /> : <AnonymousMenu />}
      </div>
    </div>
  );
};
export default AppTollbar;
