import React from 'react';
import { useDispatch } from 'react-redux';
import { selectSeason } from '../../store/actions/season';
import SeasonProps from '../../types/Season';
import classes from './SeasonPanel.module.css';

function SeasonPanel({ season }) {
    const { name, number, selected } = season;
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (!selected) {
            dispatch(selectSeason(number));
        }
    };

    return <button type="button" onClick={clickHandler} className={`clickable ${selected ? classes.selected : ''}`}>{name}</button>;
}

SeasonPanel.propTypes = SeasonProps;

export default SeasonPanel;
