import PropTypes from 'prop-types';

const EpisodeProps = {
    airdate: PropTypes.string,
    image: PropTypes.shape({
        medium: PropTypes.string,
        original: PropTypes.string,
    }),
    name: PropTypes.string,
    number: PropTypes.number,
    season: PropTypes.number,
    summary: PropTypes.string,
};

export default EpisodeProps;
