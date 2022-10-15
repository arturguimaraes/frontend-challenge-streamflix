import React from 'react';
import moment from 'moment/moment';
import classes from './Detail.module.css';

function Detail({ show }) {
    return (
      <div className={classes.detail}>
        {show.premiered && (
        <span className={classes.detailInfo}>
          <b>Year:</b>
          {moment(show.premiered).format('YYYY')}
        </span>
        )}
        {show.language && (
        <span className={classes.detailInfo}>
          <b>Language:</b>
          {show.language}
        </span>
        )}
        {show.rating && show.rating.average && (
        <span className={classes.detailInfo}>
          <b>Rating:</b>
          {show.rating.average}
        </span>
        )}
        {show.genres && show.genres.length > 0 && (
        <span className={classes.detailInfo}>
          <b>Genres:</b>
          {show.genres.join(', ')}
        </span>
        )}
      </div>
    );
}

export default Detail;
