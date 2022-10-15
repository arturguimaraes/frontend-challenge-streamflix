export const AuthenticationActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
};

const authSlice = {
    login: (username, password) => ({
        type: AuthenticationActions.LOGIN,
        // eslint-disable-next-line
        payload: {
            username,
            // eslint-disable-next-line
            password,
        }
    }),
    logout: () => ({
      type: AuthenticationActions.LOGOUT,
    }),
};

export const { login, logout } = authSlice;
