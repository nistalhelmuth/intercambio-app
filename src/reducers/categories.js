import { combineReducers } from 'redux';
import * as types from '../types/categories';

const byId = (state = {}, action) => {
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
    const stateToBe = {};
    action.payload.categories.forEach((category) => {
      stateToBe[category.id] = category;
    });
    return stateToBe;
  }
  default:
    return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case types.CATEGORTY_ADDED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.CATEGORTY_ADDITION_CONFIRMED: {
    return [
      ...state.filter(id => id !== action.payload.oldId),
      action.payload.newId,
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
  state.allIds.map(id => getCategory(state, id))
);
export const getCategoryIds = state => state.allIds;
