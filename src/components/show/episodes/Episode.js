import moment from 'moment';
import React from 'react';
import EpisodeProps from '../../../types/Episode';
import classes from './Episode.module.css';

function Episode({ episode }) {
  const { name, image, summary, airdate, season, number } = episode;

  // eslint-disable-next-line
  const summaryHTML = <div className={classes.summaryElement} dangerouslySetInnerHTML={{ __html: summary }} />;

  // Gets image
  let imageSrc = null;
  if (image) imageSrc = image.medium || imageSrc.original;

  const date = moment(airdate).format('MMMM Do, YYYY');

  return (
    <div className={classes.episode}>
      <div className={classes.imageContainer}>
        {!imageSrc && <p>No image</p>}
        {imageSrc && <img className={classes.image} src={imageSrc} alt={name} />}
      </div>
      <div className={classes.summary}>
        <p className={classes.detail}>{`${date} - Season ${season}, Episode ${number}`}</p>
        <p className={classes.title}>{name}</p>
        {summaryHTML}
      </div>
    </div>
  );
}

Episode.propTypes = EpisodeProps;

export default Episode;
