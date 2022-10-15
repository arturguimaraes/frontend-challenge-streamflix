import React from 'react';
import Detail from './Detail';
import classes from './Info.module.css';

// eslint-disable-next-line
function Info({ show }) {
  let image = null;
  if (show.image) image = show.image.medium || show.image.original;

  return (
    <div className={classes.info}>
      <div className={classes.imageContainer}>
        {!image && <p>No image</p>}
        {image && <img className={classes.image} src={image} alt={show.name} />}
      </div>
      <div className={classes.summary}>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        <Detail show={show} />
      </div>
    </div>
  );
}

export default Info;
