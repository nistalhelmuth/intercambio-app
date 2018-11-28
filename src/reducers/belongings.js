import { combineReducers } from 'redux';
import * as types from '../types/belongings';
import * as interafceTypes from '../types/interface';

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
      stateToBe[belonging.id] = {
        ...belonging,
        selected: false,
      };
    });
    return stateToBe;
  }
  case types.BELONGINGS_PER_OFFER_RECIVED: {
    let stateToBe = {};
    action.payload.belongings.forEach((belonging) => {
      stateToBe = {
        ...stateToBe,
        [belonging.belonging.id]: {
          ...belonging.belonging,
        },
      };
    });
    return {
      ...state,
      ...stateToBe,
    };
  }
  case types.BELONGING_DELETION_CONFIRMED: {
    const newState = { ...state };
    delete newState[action.payload.id];
    return newState;
  }
  case types.BELONGING_SELECTED: {
    const item = state[action.payload.id];
    const newState = { ...state };
    const newItem = {
      ...item,
      selected: !item.selected,
    };
    return {
      ...newState,
      [action.payload.id]: newItem,
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
  case types.BELONGINGS_PER_OFFER_RECIVED: {
    return state;
  }
  case types.BELONGING_DELETION_CONFIRMED: {
    return state.filter(id => id !== action.payload.id);
  }
  case interafceTypes.SWITCH_BET_CREATOR:
    return [];
  default:
    return state;
  }
};

const selected = (state = [], action) => {
  switch (action.type) {
  case types.BELONGING_SELECTED: {
    const { id } = action.payload;
    const index = state.indexOf(id);
    if (index > -1) {
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];
    }
    return [
      ...state,
      id,
    ];
  }
  default:
    return state;
  }
};

export default combineReducers({
  byId,
  allIds,
  selected,
});

export const getBelonging = (state, id) => state.byId[id];
export const getBelongings = state => (
  state.allIds.map(id => getBelonging(state, id))
);
export const getBelongingIds = state => state.allIds;
export const getSelectedBelongings = state => state.selected;
