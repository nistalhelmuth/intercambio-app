import * as types from '../types/auth';

const authReducer = (state = {}, action) => {
  switch (action.type) {
  case types.USER_AUTHENTICATION_CONFIRMED: {
    return action.payload.permission;
  }
  default:
    return state;
  }
};

export default authReducer;

export const getToken = state => state.token;
export const getLoggedUser = state => state.user;
