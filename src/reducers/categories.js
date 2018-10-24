import { combineReducers } from 'redux';
import * as types from '../types/categories';

const defaultState = {
  1: {
    id: 1,
    name: 'Muebles',
  },
  2: {
    id: 2,
    name: 'Juegos',
  },
  3: {
    id: 3,
    name: 'Electróncos',
  },
};

const byId = (state = defaultState, action) => {
  switch (action.type) {
  case types.CATEGORTY_ADDED: {
    const { payload: { id } } = action;
    return {
      ...state,
      [id]: {
        ...action.payload,
      },
    };
  }
  case types.CATEGORTY_ADDITION_CONFIRMED: {
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
  case types.CATEGORIES_RECIVED: {
    return action.payload.categories;
  }
  default:
    return state;
  }
};

const defaultIds = [1, 2, 3];

const allIds = (state = defaultIds, action) => {
  switch (action.type) {
  case types.CATEGORTY_ADDED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.CATEGORIES_RECIVED: {
    const stateToBe = [];
    action.payload.categories.forEach((category) => {
      stateToBe.push(category.id);
    });
    return stateToBe;
  }
  default:
    return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});

export const getCategory = (state, id) => state.byId[id];
export const getCategories = state => (
  state.allIds.map(id => getCategory(id))
);
export const getCategoryIds = state => state.allIds;
