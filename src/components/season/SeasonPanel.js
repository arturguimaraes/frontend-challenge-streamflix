import React from 'react';
import { useDispatch } from 'react-redux';
import { selectSeason } from '../../store/actions/season';
import SeasonProps from '../../types/Season';
import classes from './SeasonPanel.module.css';

function SeasonPanel({ season, hiddenMobile, selected }) {
  const { name, number } = season;
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!selected) {
      dispatch(selectSeason(number));
    }
  };

  return <button onClick={clickHandler} className={`${classes.clickable} ${selected && classes.selected} ${hiddenMobile && 'hidden-mobile'}`} type="button">{name}</button>;
}

SeasonPanel.propTypes = SeasonProps;

export default SeasonPanel;
