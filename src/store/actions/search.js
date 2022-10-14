export const SearchTypes = {
  START_SEARCH_ERROR: 'START_SEARCH_ERROR',
  START_SEARCH_REQUEST: 'START_SEARCH_REQUEST',
  START_SEARCH_SUCCESS: 'START_SEARCH_SUCCESS',
  START_TYPING: 'START_TYPING',
};

const searchActions = {
  // Start Typing Action
  startTyping: () => ({
    type: SearchTypes.START_TYPING
  }),
};

// Start Search Async Actions
const searchAsyncActions = {
  startSearchError: (error) => ({
    payload: error,
    type: SearchTypes.START_SEARCH_ERROR
  }),
  startSearchRequest: () => ({
    type: SearchTypes.START_SEARCH_REQUEST
  }),
  startSearchSuccess: (data) => ({
    payload: data,
    type: SearchTypes.START_SEARCH_SUCCESS
  }),
};

// Fake timer to see loader, if not needed, just change startSearchWait for startSearch
// at components/search/Search.js
export const startSearchWait = (searchInput) => (dispatch) => {
  // Dispatch loading
  dispatch(startSearchRequest());
  // Waiting time
  const fakeWaitingTime = 1000;
  // console.log(`Waiting ${fakeWaitingTime / 1000} seconds...`);
  setTimeout(() => {
    dispatch(startSearch(searchInput));
  }, fakeWaitingTime);
};

// ENDPOINT
const endpoint = 'https://api.tvmaze.com/singlesearch';
// FORCE ERROR
// const endpoint = 'https://api.tvmaze.c124128410924012984098092134820942om/singlesearch';

export const startSearch = (searchInput) => async (dispatch) => {
  const url = `${endpoint}/shows?q=${encodeURI(searchInput)}`;
  // eslint-disable-next-line
  console.log('Searching:', url);
  // Dispatch loading
  dispatch(startSearchRequest());
  // Fetch data
  const { response, error } = await fetch(url)
  // eslint-disable-next-line
  .then((response) => ({ error: null, response }))
  // eslint-disable-next-line
  .catch((error) => ({ error, response: null }));
  // If error fetching data
  if (error || !response) {
    // eslint-disable-next-line
    console.log('Error:', error.message);
    dispatch(startSearchError(error));
    return;
  }
  const data = await response.json();
  // Title not found
  if (response.status !== 200 || data == null) {
    // eslint-disable-next-line
    console.log('Title not found');
    dispatch(startSearchSuccess('Not found'));
    return;
  }
  // Success
  // eslint-disable-next-line
  console.log('Title found:', data);
  dispatch(startSearchSuccess(data));
};

export const { startTyping } = searchActions;
export const { startSearchError, startSearchRequest, startSearchSuccess } = searchAsyncActions;
