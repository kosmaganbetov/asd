/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../../store/reducers/userReducer";
import "./UserMenu.sass";
const UserMenu = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div onClick={toggleDropdown} className="UserMenu">
      <div className="UserMenu__control">{`${props.user?.lastname} ${props.user.name}`}</div>
      {showDropDown ? (
        <div className="UserMenu__dropdown">
          <div
            className="UserMenu__dropdown_item"
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            Выйти
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default UserMenu;
