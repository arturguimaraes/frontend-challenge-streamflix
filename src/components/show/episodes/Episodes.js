import React from 'react';
import SeasonProps from '../../../types/Season';
import Episode from './Episode';
import classes from './Episodes.module.css';

function Episodes({ season }) {
  const { episodes } = season;

  // Ascending order
  episodes.sort((a, b) => a.number - b.number);

  return (
    <div className={classes.container}>
      { episodes.map((episode) => <Episode key={episode.id} episode={episode} />)}
    </div>
  );
}

Episodes.propTypes = SeasonProps;

export default Episodes;
