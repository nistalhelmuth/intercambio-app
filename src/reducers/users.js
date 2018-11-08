import { combineReducers } from 'redux';
import * as types from '../types/users';

const defaultState = {
  0: {
    age: 99,
    email: 'email@email.com',
    firstName: 'firstName',
    id: 0,
    img: 'data:image/jpeg;base64,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',
    lastName: 'lastName',
    password: 'password',
    phone: '123123123',
    username: 'username',
  },
  1: {
    age: 99,
    email: 'email@email.com',
    firstName: 'firstName',
    id: 1,
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
    lastName: 'lastName',
    password: 'password',
    phone: '123123123',
    username: 'username',
  },
  2: {
    age: 99,
    email: 'email@email.com',
    firstName: 'firstName',
    id: 2,
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
    lastName: 'lastName',
    password: 'password',
    phone: '123123123',
    username: 'username',
  },
};

const byId = (state = defaultState, action) => {
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

const defaultIds = [0, 1, 2];

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
