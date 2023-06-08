import React from 'react';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div className={`${classes.inner} ${classes.one}`} />
        <div className={`${classes.inner} ${classes.two}`} />
      </div>
    </div>
  );
}

export default Loader;
