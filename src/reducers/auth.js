import { combineReducers } from 'redux';
import * as types from '../types/auth';

const authInfo = (state = {}, action) => {
  switch (action.type) {
  case types.USER_AUTHENTICATION_CONFIRMED: {
    return action.payload.permission;
  }
  default:
    return state;
  }
};

const logginFailed = (state = false, action) => {
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
  logginFailed,
});

export const getToken = state => state.authInfo.token;
export const getLoggedUser = state => state.authInfo.user;
export const getLogginFailStatus = state => state.logginFailed;
