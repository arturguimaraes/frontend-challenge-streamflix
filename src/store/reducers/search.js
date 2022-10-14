import { SearchTypes } from '../actions/search';

const initialState = {
  data: null,
  error: null,
  loading: false,
  typing: false
};

const searchReducer = (state = initialState, action = null) => {
  // console.log('Reducer called:', state, action);
  switch (action.type) {
    // Start Typing Action
    case SearchTypes.START_TYPING:
      return {
        ...state,
        data: null,
        error: null,
        loading: false,
        typing: true
      };
    // Start Search Actions
    case SearchTypes.START_SEARCH_REQUEST:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
        typing: false
      };
    case SearchTypes.START_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
        typing: false
      };
    case SearchTypes.START_SEARCH_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload,
        loading: false,
        typing: false
      };
    // Return current state
    default:
      return state;
  }
};

export default searchReducer;
