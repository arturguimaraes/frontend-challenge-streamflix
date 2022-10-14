import React from "react";
import Search from "../search/Search";
import Menu from "./Menu";
import { useLocation } from "react-router-dom"; 
import { findRoute } from "../../config/routes";
import logo from "../../assets/logo.svg";
import classes from "./Layout.module.css";

function Layout({ children }) {
  const location = useLocation();
  const route = findRoute(location.pathname);

  return (
    <div className={classes[`grid-container`]}>
      <div className={classes[`menu`]}>
        <img src={logo} alt="Logo" />
        <Search />
      </div>
      <div className={classes[`header`]}>
        <Menu />
        {route.title}
      </div>
      <div className={classes[`left`]}>Left</div>
      <div className={classes[`main`]}>{children}</div>
    </div>
  );
}

export default Layout;
