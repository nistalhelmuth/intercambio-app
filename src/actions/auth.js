import * as types from '../types/auth';

export const authenticateUser = (
  username,
  password,
) => ({
  type: types.USER_AUTHENTICATED,
  payload: {
    username,
    password,
  },
});

export const confirmUserAuthentication = permission => ({
  type: types.USER_AUTHENTICATION_CONFIRMED,
  payload: {
    permission,
  },
});

export const failLoggin = () => ({
  type: types.LOGGIN_FAILED,
});

export const closeSession = () => ({
  type: types.SESSION_CLOSED,
});
