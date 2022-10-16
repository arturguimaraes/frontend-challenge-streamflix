import moment from 'moment';
import { AuthenticationActions } from '../actions/auth';
import { loadFromLocalStorage, saveToLocalStorage, deleteFromLocalStorage } from './localStorage';

const initialState = { authorized: loadFromLocalStorage('auth'), failed: false, time: null, username: '' };

const authReducer = (state = initialState, action = null) => {
    // console.log('Reducer called - State:', state, 'Action:', action);
    switch (action.type) {
        case AuthenticationActions.LOGIN_SUCCESS:
            // eslint-disable-next-line
            const newState = { ...state, authorized: true, failed: false, time: moment(), username: action.payload };
            saveToLocalStorage('auth', newState);
            return newState;
        case AuthenticationActions.LOGIN_FAIL:
            return { ...state, authorized: false, failed: true, username: action.payload };
        case AuthenticationActions.LOGOUT:
            deleteFromLocalStorage('auth');
            return { ...state, authorized: false, failed: false, time: null, user: '' };
        default:
            return state;
    }
};

export default authReducer;
