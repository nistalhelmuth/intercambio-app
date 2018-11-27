import { combineReducers } from 'redux';
import * as types from '../types/offers';
import * as offerTypes from '../types/belongings';

const byId = (state = {}, action) => {
  switch (action.type) {
  case types.OFFER_CREATED: {
    const { payload: { id } } = action;
    return {
      ...state,
      [id]: {
        ...action.payload,
      },
    };
  }
  case types.OFFER_CREATION_CONFIRMED: {
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
  case types.OFFERS_RECIVED: {
    const stateToBe = {};
    action.payload.offers.forEach((offer) => {
      stateToBe[offer.id] = {
        ...offer,
        belongings: [],
      };
    });
    return stateToBe;
  }
  case types.OFFER_DELETION_CONFIRMED: {
    const newState = { ...state };
    delete newState[action.payload.id];
    return newState;
  }
  case types.OFFER_UPDATE_CONFIRMED: {
    const newState = { ...state };
    const { id } = action.payload.id;
    delete newState[id];
    return {
      ...newState,
      [id]: action.payload,
    };
  }
  case offerTypes.BELONGINGS_PER_OFFER_RECIVED: {
    const { offerId, belongings } = action.payload;
    const newBelongings = [];
    belongings.forEach((belonging) => {
      newBelongings.push(belonging.belonging.id);
    });
    return {
      ...state,
      [offerId]: {
        ...state[offerId],
        belongings: newBelongings,
      }
    };
  }
  default:
    return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
  case types.OFFER_CREATED: {
    return [
      ...state,
      action.payload.id,
    ];
  }
  case types.OFFER_CREATION_CONFIRMED: {
    return [
      ...state.filter(id => id !== action.payload.oldId),
      action.payload.newId,
    ];
  }
  case types.OFFERS_RECIVED: {
    const stateToBe = [];
    action.payload.offers.forEach((offer) => {
      stateToBe.push(offer.id);
    });
    return stateToBe;
  }
  case types.OFFER_DELETION_CONFIRMED: {
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

export const getOffer = (state, id) => state.byId[id];
export const getOffers = state => (
  state.allIds.map(id => getOffer(state, id))
);
