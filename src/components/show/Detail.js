import React from 'react';
import moment from 'moment/moment';
import { ShowProps, ShowDefaultProps } from '../../types/Show';
import classes from './Detail.module.css';

function Detail({ show }) {
    const { premiered, language, rating, genres } = show;
    return (
      <div className={classes.detail}>
        {premiered && (
        <span className={classes.detailInfo}>
          <b>Year:</b>
          {moment(premiered).format('YYYY')}
        </span>
        )}
        {language && (
        <span className={classes.detailInfo}>
          <b>Language:</b>
          {language}
        </span>
        )}
        {rating && rating.average && (
        <span className={classes.detailInfo}>
          <b>Rating:</b>
          {rating.average}
        </span>
        )}
        {genres && genres.length > 0 && (
        <span className={classes.detailInfo}>
          <b>Genres:</b>
          {genres.join(', ')}
        </span>
        )}
      </div>
    );
}

Detail.propTypes = ShowProps;
Detail.defaultProps = ShowDefaultProps;

export default Detail;
