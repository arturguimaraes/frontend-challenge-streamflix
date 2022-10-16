import { ShowActions } from '../actions/show';

const initialState = { error: null, loading: false, show: null, typing: false };

const showReducer = (state = initialState, action = null) => {
  // console.log('Reducer called - State:', state, 'Action:', action);
  switch (action.type) {
    case ShowActions.START_TYPING:
      return { ...state, error: null, loading: false, show: null, typing: true };
    case ShowActions.FETCH_SHOW_REQUEST:
      return { ...state, error: null, loading: true, show: null, typing: false };
    case ShowActions.FETCH_SHOW_SUCCESS:
      return { ...state, error: null, loading: false, show: action.payload, typing: false };
    case ShowActions.FETCH_SHOW_ERROR:
      return { ...state, error: action.payload, loading: false, show: null, typing: false };
    default:
      return state;
  }
};

export default showReducer;
