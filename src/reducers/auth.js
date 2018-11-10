import { combineReducers } from 'redux';
import * as types from '../types/auth';

const authInfo = (state = {}, action) => {
  switch (action.type) {
  case types.USER_AUTHENTICATION_CONFIRMED: {
    return action.payload.permission;
  }
  case types.SESSION_CLOSED: {
    return {};
  }
  default:
    return state;
  }
};

const loginFailed = (state = false, action) => {
  switch (action.type) {
  case types.USER_AUTHENTICATION_CONFIRMED: {
    return false;
  }
  case types.LOGGIN_FAILED: {
    return true;
  }
  default:
    return state;
  }
};

export default combineReducers({
  authInfo,
  loginFailed,
});

export const getToken = state => state.authInfo.token;
export const getLoggedUser = state => state.authInfo.user;
export const getLoginStatus = state => state.loginFailed;
