import * as types from '../types/interface';
import * as belongingTypes from '../types/belongings';

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

export default interfaceState;

export const getBetCreator = state => state.betCreator;
