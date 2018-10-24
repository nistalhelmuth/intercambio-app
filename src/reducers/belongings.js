import { combineReducers } from 'redux';
import * as types from '../types/belongings';

const defaultState = {
  1: {
    id: 1,
    name: 'Super Mario Galaxy',
    description: 'Juego para Wii',
    category: 1,
    usedState: 'medio',
    propietaryId: 0,
  },
  2: {
    id: 2,
    name: 'Super Mario Galaxy',
    description: 'Juego para Wii',
    category: 1,
    usedState: 'medio',
    propietaryId: 0,
  },
  3: {
    id: 3,
    name: 'Super Mario Galaxy',
    description: 'Juego para Wii',
    category: 1,
    usedState: 'medio',
    propietaryId: 0,
  },
};

const byId = (state = defaultState, action) => {
  switch (action.type) {
  case types.BELONGING_CREATED: {
    const { payload: { id } } = action;
    return {
      ...state,
      [id]: {
        ...action.payload,
      },
    };
  }
  case types.BELONGINGS_RECIVED: {
    return action.payload.categories;
  }
  default:
    return state;
  }
};

const defaultIds = [1, 2, 3];

const allIds = (state = defaultIds, action) => {
  switch (action.type) {
  case types.BELONGING_CREATED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.BELONGINGS_RECIVED: {
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

export const getBelonging = (state, id) => state.byId[id];
export const getBelongings = state => (
  state.allIds.map(id => getBelonging(state, id))
);
