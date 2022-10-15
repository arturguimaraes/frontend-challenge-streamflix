import { setSeasons, emptySeasons } from './season';

export const ShowActions = {
  START_TYPING: 'START_TYPING',
  // eslint-disable-next-line
  FETCH_SHOW_REQUEST: 'FETCH_SHOW_REQUEST',
  // eslint-disable-next-line
  FETCH_SHOW_SUCCESS: 'FETCH_SHOW_SUCCESS',
  // eslint-disable-next-line
  FETCH_SHOW_ERROR: 'FETCH_SHOW_ERROR',  
};

// ENDPOINT
const endpoint = 'https://api.tvmaze.com/singlesearch';
// FORCE ERROR
// const endpoint = 'https://api.tvmaze.c124128410924012984098092134820942om/singlesearch';

const showSlice = {
  // Start Typing Action
  startTyping: () => ({
    type: ShowActions.START_TYPING
  }),
  // Start Search Async Actions
  // eslint-disable-next-line
  fetchShowRequest: () => ({
    type: ShowActions.FETCH_SHOW_REQUEST
  }),
  // eslint-disable-next-line
  fetchShowSuccess: (show) => ({
    type: ShowActions.FETCH_SHOW_SUCCESS,
    // eslint-disable-next-line
    payload: show,
  }),
  // eslint-disable-next-line
  fetchShowError: (error) => ({
    type: ShowActions.FETCH_SHOW_ERROR,
    // eslint-disable-next-line
    payload: error,
  })
};

// Fake timer to see loader, if not needed, just change fetchShowWait
// for fetchShow at components/search/Search.js
export const fetchShowWait = (searchInput) => (dispatch) => {
  // Dispatch loading
  dispatch(fetchShowRequest());
  // Waiting time
  const fakeWaitingTime = 1000;
  // console.log(`Waiting ${fakeWaitingTime / 1000} seconds...`);
  setTimeout(() => {
    dispatch(fetchShow(searchInput));
  }, fakeWaitingTime);
};

export const fetchShow = (searchInput) => async (dispatch) => {
  // Dispatch loading
  dispatch(fetchShowRequest());

  // Fetch data
  const url = `${endpoint}/shows?q=${encodeURI(searchInput)}&embed=episodes`;
  const { response, error } = await fetch(url)
  // eslint-disable-next-line
  .then((response) => ({ error: null, response }))
  // eslint-disable-next-line
  .catch((error) => ({ error, response: null }));
  // If error fetching data
  if (error || !response) {
    // console.log('Error:', error.message);
    dispatch(fetchShowError(error));
    // Empty Seasons
    dispatch(emptySeasons());
    return;
  }

  // Converts StreamReader
  const show = await response.json();
  // Title not found
  if (response.status !== 200 || show == null) {
    // console.log('Title not found');
    dispatch(fetchShowSuccess('Not found'));
    // Empty Seasons
    dispatch(emptySeasons());
    return;
  }

  // Success, dispatch action
  dispatch(fetchShowSuccess(show));

  // Get episodes and organize seasons
  // eslint-disable-next-line
  const episodes = show['_embedded'].episodes;
  const seasons = [];
  episodes.forEach((episode) => {
    const { season } = episode;
    const index = season - 1;
    // If season not created, create new array
    if (!seasons[index]) {
      const formattedSeason = {
        name: `Season ${season}`,
        number: season,
        // eslint-disable-next-line
        episodes: [],
      };
      seasons[index] = formattedSeason;
    }
    seasons[index].episodes.push(episode);
  });
  // Dispatch Seasons and Episodes
  dispatch(setSeasons(seasons));
};

export const { startTyping, fetchShowRequest, fetchShowSuccess, fetchShowError } = showSlice;
