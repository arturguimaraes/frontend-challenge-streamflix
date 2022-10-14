import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import classes from './Layout.module.css';

function Layout({ children }) {
  return (
    <main>
      <div className={classes.header}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={classes.titleContainer}>
          <h1>Page Title</h1>
        </div>
        <div className={classes.content}>
          { children }
        </div>
      </div>
    </main>
  );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
