import PropTypes from 'prop-types';

export const ShowProps = {
  show: PropTypes.shape({
    genres: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.shape({
      medium: PropTypes.string,
      original: PropTypes.string,
    }),
    language: PropTypes.string,
    name: PropTypes.string,
    premiered: PropTypes.string,
    rating: PropTypes.shape({
      average: PropTypes.number,
    }),
    summary: PropTypes.string,
  }),
};

export const ShowDefaultProps = {
  show: PropTypes.shape({
    genres: null,
    image: null,
    language: null,
    name: 'Title',
    premiered: null,
    rating: null,
    summary: 'No summary',
  }),
};
