import React from 'react';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div>
          <span className="hidden">Loader</span>
        </div>
        <div>
          <span className="hidden">Loader</span>
        </div>
        <div>
          <span className="hidden">Loader</span>
        </div>
        <div>
          <span className="hidden">Loader</span>
        </div>
        <div>
          <span className="hidden">Loader</span>
        </div>
        <div>
          <span className="hidden">Loader</span>
        </div>
        <div>
          <span className="hidden">Loader</span>
        </div>
        <div>
          <span className="hidden">Loader</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
