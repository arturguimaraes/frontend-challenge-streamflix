import moment from 'moment';
import { AuthenticationActions } from '../actions/auth';

const loadFromLocalStorage = () => {
    try {
      const serializedStore = window.localStorage.getItem('auth');
      if (serializedStore === null) return false;
      const data = JSON.parse(serializedStore);
      if (!data.authorized) return false;
      return data.authorized;
    } catch (e) {
      // console.log('Error loading from local storage:', e);
      return false;
    }
};

const initialState = {
    authorized: loadFromLocalStorage(),
    failed: false,
    username: '',
    // eslint-disable-next-line
    time: null,
};

const authReducer = (state = initialState, action = null) => {
    // console.log('Reducer called - State:', state, 'Action:', action);
    switch (action.type) {
        case AuthenticationActions.LOGIN:
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
            // eslint-disable-next-line
            const newState = {
                ...state,
                authorized: true,
                failed: false,
                username: action.payload.username,
                // eslint-disable-next-line
                time: moment(),
            };
            // Set to local storage
            window.localStorage.setItem('auth', JSON.stringify(newState));
            return newState;
        case AuthenticationActions.LOGOUT:
            window.localStorage.removeItem('auth');
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
