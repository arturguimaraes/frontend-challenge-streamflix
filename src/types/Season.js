import PropTypes from 'prop-types';
import EpisodeProps from './Episode';

const SeasonProps = {
    episodes: PropTypes.arrayOf(EpisodeProps),
    name: PropTypes.string,
    number: PropTypes.number,
    selected: PropTypes.bool,
};

export default SeasonProps;
