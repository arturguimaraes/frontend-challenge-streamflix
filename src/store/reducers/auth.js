import moment from 'moment';
import { AuthenticationActions } from '../actions/auth';

const initialState = {
    authorized: false,
    failed: false,
    username: '',
    // eslint-disable-next-line
    time: null,
};

const authReducer = (state = initialState, action = null) => {
    switch (action.type) {
        case AuthenticationActions.LOGIN:
            console.log('Reducer called - State:', state, 'Action:', action);
            // Error
            if (action.payload.password !== 'supersecret') {
                return {
                    ...state,
                    authorized: false,
                    failed: true,
                    username: action.payload.username,
                    // eslint-disable-next-line
                    time: null,
                };
            }
            // Success
            return {
                ...state,
                authorized: true,
                failed: false,
                username: action.payload.username,
                // eslint-disable-next-line
                time: moment(),
            };
        case AuthenticationActions.LOGOUT:
            console.log('Reducer called - State:', state, 'Action:', action);
            return {
                ...state,
                authorized: false,
                failed: false,
                user: '',
                // eslint-disable-next-line
                time: null,
            };
        // Return current state
        default:
            return state;
    }
};

export default authReducer;
