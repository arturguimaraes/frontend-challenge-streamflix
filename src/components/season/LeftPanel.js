import React from 'react';
import { useSelector } from 'react-redux';
import SeasonPanel from './SeasonPanel';
import classes from './LeftPanel.module.css';

function LeftPanel() {
    const { selected, seasons } = useSelector((state) => state.seasonState);
    const hasSeasons = seasons.length > 0;
    if (!hasSeasons) return <p>No seasons available</p>;

    const formattedSeasons = [];
    // eslint-disable-next-line
    for (let i = 1; i <= seasons.length; i++) {
        const season = {
            name: `Season ${i}`,
            number: i,
            // eslint-disable-next-line
            episodes: seasons[i],
            selected: i === selected,
        };
        formattedSeasons.push(season);
    }

    // Ascending order
    formattedSeasons.sort((a, b) => a.number - b.number);

    return (
      <div className={classes.container}>
        {formattedSeasons.map((season) => <SeasonPanel key={season.number} season={season} />)}
      </div>
    );
}

export default LeftPanel;
