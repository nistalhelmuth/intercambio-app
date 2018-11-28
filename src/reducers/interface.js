import { combineReducers } from 'redux';
import * as types from '../types/interface';
import * as belongingTypes from '../types/belongings';
import * as postTypes from '../types/posts';

const defaultState = {
  betCreator: false,
};

const interfaceState = (state = defaultState, action) => {
  switch (action.type) {
  case types.SWITCH_BET_CREATOR: {
    return {
      ...state,
      betCreator: !state.betCreator,
    };
  }
  case belongingTypes.BELONGINGS_PER_OFFER_CREATED_CONFIRMED: {
    return {
      ...state,
      betCreator: !state.betCreator,
    };
  }
  default:
    return state;
  }
};

const submitted = (state = false, action) => {
  switch (action.type) {
  case postTypes.POST_CREATION_CONFIRMED: {
    return true;
  }
  case belongingTypes.BELONGING_CREATION_CONFIRMED: {
    return true;
  }
  case types.SUBMITTED_STATUS_RESETED: {
    return false;
  }
  default:
    return state;
  }
};

export default combineReducers({
  interfaceState,
  submitted,
});

export const getBetCreator = state => state.interfaceState.betCreator;
export const getSubmittedStatus = state => state.submitted;
