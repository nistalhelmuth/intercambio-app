import { combineReducers } from 'redux';
import * as types from '../types/belongings';

const defaultState = {
  1: {
    id: 1,
    name: 'Super Mario Galaxy',
    description: 'Juego para Wii',
    category: 1,
    usedState: 0,
    propietaryId: 0,
  },
  2: {
    id: 2,
    name: 'Super Mario Galaxy',
    description: 'Juego para Wii',
    category: 1,
    usedState: 1,
    propietaryId: 0,
  },
  3: {
    id: 3,
    name: 'Super Mario Galaxy',
    description: 'Juego para Wii',
    category: 1,
    usedState: 2,
    propietaryId: 0,
  },
  4: {
    id: 4,
    name: 'Super Mario Galaxy',
    description: 'Juego para Wii',
    category: 1,
    usedState: 3,
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
  case types.BELONGING_CREATION_CONFIRMED: {
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
  case types.BELONGINGS_RECIVED: {
    return action.payload.belongings;
  }
  case types.BELONGING_DELETION_CONFIRMED: {
    const newState = { ...state };
    delete newState[action.payload.id];
    return newState;
  }
  default:
    return state;
  }
};

const defaultIds = [1, 2, 3, 4];

const allIds = (state = defaultIds, action) => {
  switch (action.type) {
  case types.BELONGING_CREATED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.BELONGING_CREATION_CONFIRMED: {
    return [
      ...state.filter(id => id !== action.payload.id),
      action.payload.id,
    ];
  }
  case types.BELONGINGS_RECIVED: {
    const stateToBe = [];
    action.payload.belongings.forEach((belonging) => {
      stateToBe.push(belonging.id);
    });
    return stateToBe;
  }
  case types.BELONGING_DELETION_CONFIRMED: {
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

export const getBelonging = (state, id) => state.byId[id];
export const getBelongings = state => (
  state.allIds.map(id => getBelonging(state, id))
);
