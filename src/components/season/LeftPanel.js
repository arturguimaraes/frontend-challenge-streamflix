import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SeasonPanel from './SeasonPanel';
import classes from './LeftPanel.module.css';

function LeftPanel() {
    // This config applies only to mobile visualization
    const [hiddenMobile, setHiddenMobile] = useState(true);

    // Check if there are seasons
    const { seasons, selected } = useSelector((state) => state.seasonState);
    const hasSeasons = seasons.length > 0;
    if (!hasSeasons) return <p>No seasons available</p>;

    // Ascending order
    seasons.sort((a, b) => a.number - b.number);

    // Only for mobile
    const clickHandler = () => {
      setHiddenMobile(!hiddenMobile);
    };

    return (
      <div className={classes.container}>
        {hiddenMobile && <button onClick={clickHandler} className={classes.clickableMobile} type="button">Show Seasons</button>}
        {
          // eslint-disable-next-line
          seasons.map((season) => {
            return (
              <SeasonPanel
                key={season.number}
                season={season}
                hiddenMobile={hiddenMobile}
                selected={selected === season.number}
              />
            );
          })
        }
        {!hiddenMobile && <button onClick={clickHandler} className={classes.clickableMobile} type="button">Hide Seasons</button>}
      </div>
    );
}

export default LeftPanel;
