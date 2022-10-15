import { SeasonActions } from '../actions/season';

const initialState = {
    selected: 1,
    // eslint-disable-next-line
    seasons: [],
    // eslint-disable-next-line
    episodes: [],
};

const seasonReducer = (state = initialState, action = null) => {
    switch (action.type) {
        case SeasonActions.SET_SEASONS:
            return {
                ...state,
                selected: 1,
                // eslint-disable-next-line
                seasons: action.payload.seasons,
                // eslint-disable-next-line
                episodes: action.payload.episodes,
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
                // eslint-disable-next-line
                episodes: [],
            };
        // Return current state
        default:
            return state;
    }
};

export default seasonReducer;
