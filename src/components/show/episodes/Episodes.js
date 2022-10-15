import React from 'react';
import SeasonProps from '../../../types/Season';
import Episode from './Episode';
import classes from './Episodes.module.css';

function Episodes({ season }) {
  const { episodes } = season;

  return (
    <div className={classes.container}>
      <div className={classes.episodes}>
        { episodes.map((episode) => <Episode key={episode.id} episode={episode} />)}
      </div>
    </div>
  );
}

Episodes.propTypes = SeasonProps;

export default Episodes;
