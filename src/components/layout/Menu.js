import React from 'react';
import { Link } from 'react-router-dom';
import { getRoutes } from '../../config/routes';
import classes from './Menu.module.css';

function Menu() {
  const routes = getRoutes();

  return (
    <ul className={classes.menu}>
      {routes.map((route) => {
        if (!route.path) return null;
        return (
          <li key={route.id}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
