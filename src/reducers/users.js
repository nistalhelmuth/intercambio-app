import { combineReducers } from 'redux';
import * as types from '../types/users';

const byId = (state = {}, action) => {
  switch (action.type) {
  case types.USER_CREATED: {
    const { payload: { id } } = action;
    return {
      ...state,
      [id]: {
        ...action.payload,
      },
    };
  }
  case types.USER_CREATION_CONFIRMED: {
    const { newId, oldId } = action.payload;
    const newState = { ...state };
    const { id, ...rest } = newState[oldId];
    const newItem = {
      id: newId,
      ...rest,
    };
    delete newState[oldId];
    return {
      ...newState,
      [newId]: newItem,
    };
  }
  case types.USERS_RECIVED: {
    return action.payload.users;
  }
  case types.USER_DELETION_CONFIRMED: {
    const newState = { ...state };
    delete newState[action.payload.id];
    return newState;
  }
  default:
    return state;
  }
};

const defaultIds = [1, 2, 3];

const allIds = (state = defaultIds, action) => {
  switch (action.type) {
  case types.USER_CREATED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.USER_CREATION_CONFIRMED: {
    return [
      ...state.filter(id => id !== action.payload.id),
      action.payload.id,
    ];
  }
  case types.USERS_RECIVED: {
    const stateToBe = [];
    action.payload.users.forEach((user) => {
      stateToBe.push(user.id);
    });
    return stateToBe;
  }
  case types.USER_DELETION_CONFIRMED: {
    return state.filter(id => id !== action.payload.id);
  }
  default:
    return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});

export const getUser = (state, id) => state.byId[id];
export const getUsers = state => (
  state.allIds.map(id => getUser(state, id))
);