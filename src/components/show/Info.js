import React from 'react';
import Detail from './Detail';
import { ShowProps, ShowDefaultProps } from '../../types/Show';
import classes from './Info.module.css';

function Info({ show }) {
  const { name, summary, image } = show;

  // Gets image
  let imageSrc = null;
  if (image) imageSrc = image.medium || imageSrc.original;

  // eslint-disable-next-line
  const summaryHTML = <div className={classes.summaryElement} dangerouslySetInnerHTML={{ __html: summary }} />;

  return (
    <div className={classes.info}>
      <div className={classes.imageContainer}>
        {!imageSrc && <p>No image</p>}
        {imageSrc && <img className={classes.image} src={imageSrc} alt={name} />}
      </div>
      <div className={classes.summary}>
        {summaryHTML}
        <Detail show={show} />
      </div>
    </div>
  );
}

Info.propTypes = ShowProps;
Info.defaultProps = ShowDefaultProps;

export default Info;
