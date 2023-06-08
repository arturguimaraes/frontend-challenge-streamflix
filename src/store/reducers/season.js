import { SeasonActions } from '../actions/season';

const initialState = { seasons: [], selected: 1 };

const seasonReducer = (state = initialState, action = null) => {
  // console.log('Reducer called - State:', state, 'Action:', action);
  switch (action.type) {
    case SeasonActions.SET_SEASONS:
      return { ...state, seasons: action.payload, selected: 1 };
    case SeasonActions.SELECT_SEASON:
      return { ...state, selected: action.payload };
    case SeasonActions.EMPTY_SEASONS:
      return { ...state, seasons: [], selected: 1 };
    default:
      return state;
  }
};

export default seasonReducer;
