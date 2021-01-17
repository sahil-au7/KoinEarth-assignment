import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <ArrowBackIosIcon fontSize="small" className="header__titleButton" />
      </IconButton>
      <p className="header__title">Browse Products</p>
    </div>
  );
};

export default Header;
