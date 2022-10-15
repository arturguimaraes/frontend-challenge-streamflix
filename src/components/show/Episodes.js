import React from 'react';
import classes from './Episodes.module.css';

function Episodes({ show }) {
    return (
      <div className={classes.info}>
        {show.name}
      </div>
    );
}

export default Episodes;
