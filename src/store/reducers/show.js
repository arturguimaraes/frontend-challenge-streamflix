import { ShowActions } from '../actions/show';

const initialState = {
  loading: false,
  typing: false,
  // eslint-disable-next-line
  show: null,
  // eslint-disable-next-line
  error: null,
};

const showReducer = (state = initialState, action = null) => {
  // console.log('Reducer called - State:', state, 'Action:', action);
  switch (action.type) {
    // Start Typing Action
    case ShowActions.START_TYPING:
      return {
        ...state,
        loading: false,
        typing: true,
        // eslint-disable-next-line
        show: null,
        // eslint-disable-next-line
        error: null,
      };
    // Start Search Actions
    case ShowActions.FETCH_SHOW_REQUEST:
      return {
        ...state,
        loading: true,
        typing: false,
        // eslint-disable-next-line
        show: null,
        // eslint-disable-next-line
        error: null,
      };
    case ShowActions.FETCH_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        typing: false,
        // eslint-disable-next-line
        show: action.payload,
        // eslint-disable-next-line
        error: null,
      };
    case ShowActions.FETCH_SHOW_ERROR:
      return {
        ...state,
        loading: false,
        typing: false,
        // eslint-disable-next-line
        show: null,
        // eslint-disable-next-line
        error: action.payload,
      };
    // Return current state
    default:
      return state;
  }
};

export default showReducer;
