export const AuthenticationActions = {
    LOGIN_FAIL: 'LOGIN_FAIL',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
};

const authenticate = (username, password) => {
    if (password !== 'supersecret') return AuthenticationActions.LOGIN_FAIL;
    return AuthenticationActions.LOGIN_SUCCESS;
};

const authSlice = {
    login: (username, password) => ({
        payload: username,
        type: authenticate(username, password)
    }),
    logout: () => ({
        type: AuthenticationActions.LOGOUT
    }),
};

export const { login, logout } = authSlice;
