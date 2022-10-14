import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes, Redirect, findRoute } from '../../config/routes';
import Search from '../search/Search';
import logo from '../../assets/logo.svg';
import classes from './Layout.module.css';
import { useSelector } from 'react-redux';

function Layout({ children }) {
  const location = useLocation();
  
  const { data } = useSelector((state) => state.searchState);

  let title = '';
  if(location.pathname === "/title" && data !== null && data !== 'Not found') {   
    title = data.name;
  }
  else {
    const route = findRoute(location.pathname);
    title = route.title;
  }

  return (
    <div className={classes[`grid-container`]}>
      <div className={classes.menu}>
        <Link to="/"><img src={logo} alt="Logo" /></Link>
        <Search />
      </div>
      <div className={classes.header}>{title}</div>
      <div className={classes.left}>Left</div>
      <div className={classes.main}>
        <div className={classes.container}><Routes />
        <Redirect /></div>
      </div>
    </div>
  );
}

export default Layout;
