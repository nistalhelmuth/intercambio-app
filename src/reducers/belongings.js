import { combineReducers } from 'redux';
import * as types from '../types/belongings';

const byId = (state = {}, action) => {
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
    const stateToBe = {};
    action.payload.belongings.forEach((belonging) => {
      stateToBe[belonging.id] = belonging;
    });
    return stateToBe;
  }
  case types.BELONGING_DELETION_CONFIRMED: {
    const newState = { ...state };
    delete newState[action.payload.id];
    return newState;
  }
  case types.BELONGING_SELECTED: {
    const item = state[action.payload];
    const newState = { ...state };
    const newItem = {
      ...item,
      selected: !item.selected,
    };
    return {
      ...newState,
      [action.payload]: newItem,
    };
  }
  default:
    return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case types.BELONGING_CREATED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.BELONGING_CREATION_CONFIRMED: {
    return [
      ...state.filter(id => id !== action.payload.oldId),
      action.payload.newId,
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
export const getBelongingIds = state => state.allIds;
