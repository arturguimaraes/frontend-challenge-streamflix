import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Routes, Redirect, findRoute } from '../../config/routes';
import Search from '../search/Search';
import LeftPanel from '../season/LeftPanel';
import Auth from '../auth/Auth';
import Logout from '../auth/Logout';
import logo from '../../assets/logo.svg';
import classes from './Layout.module.css';

function Layout() {
  const location = useLocation();
  const { show } = useSelector((state) => state.showState);
  const { seasons } = useSelector((state) => state.seasonState);
  const { authorized } = useSelector((state) => state.authState);

  let title = '';
  if (!authorized) {
    title = 'Login';
  } else if (location.pathname === '/title' && show !== null && show !== 'Not found') {
    // If on show page, change title to show's name
    title = show.name;
  } else {
    // Else, show route name
    const route = findRoute(location.pathname);
    title = route.title;
  }

  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <div className={classes.search}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {!authorized && <Auth />}
          {authorized && <Search />}
        </div>
        {authorized && seasons.length > 0 && <LeftPanel />}
      </div>
      <div className={classes.container}>
        {authorized && (
          <div className={classes.logoutContainer}>
            <Logout />
          </div>
        )}
        <div className={classes.header}>
          <h1>{title}</h1>
        </div>
        <div className={classes.content}>
          <Routes />
          <Redirect />
        </div>
      </div>
    </div>
  );
}

export default Layout;
