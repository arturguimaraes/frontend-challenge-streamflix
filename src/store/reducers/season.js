import { SeasonActions } from '../actions/season';

const initialState = {
    selected: 1,
    // eslint-disable-next-line
    seasons: [],
};

const seasonReducer = (state = initialState, action = null) => {
    // console.log('Reducer called - State:', state, 'Action:', action);
    switch (action.type) {
        case SeasonActions.SET_SEASONS:
            return {
                ...state,
                selected: 1,
                // eslint-disable-next-line
                seasons: action.payload,
            };
        case SeasonActions.SELECT_SEASON:
            return {
                ...state,
                selected: action.payload,
            };
        case SeasonActions.EMPTY_SEASONS:
            return {
                ...state,
                selected: 1,
                // eslint-disable-next-line
                seasons: [],
            };
        // Return current state
        default:
            return state;
    }
};

export default seasonReducer;
