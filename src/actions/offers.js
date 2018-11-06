import * as types from '../types/offers';

export const createOffer = (
  id,
  offereObject,
  offeredIn,
) => ({
  type: types.OFFER_CREATED,
  payload: {
    id,
    offereObject,
    offeredIn,
  },
});

export const confirmOfferCreation = (
  oldId,
  newId,
  date,
) => ({
  type: types.OFFER_CREATION_CONFIRMED,
  payload: {
    oldId,
    newId,
    date,
  },
});

export const updateOffer = (
  id,
  offereObject,
  offeredIn,
) => ({
  type: types.OFFER_UPDATED,
  payload: {
    id,
    offereObject,
    offeredIn,
  },
});

export const confirmOfferUpdate = (
  id,
  offereObject,
  offeredIn,
) => ({
  type: types.OFFER_UPDATE_CONFIRMED,
  payload: {
    id,
    offereObject,
    offeredIn,
  },
});

export const deleteOffer = id => ({
  type: types.OFFER_DELETED,
  payload: {
    id,
  },
});

export const confirmOfferDeletion = id => ({
  type: types.OFFER_DELETED,
  payload: {
    id,
  },
});

export const fetchOffers = (
  atributeName,
  comparisonObject,
) => ({
  type: types.OFFERS_FETCHED,
  payload: {
    atributeName,
    comparisonObject,
  },
});

export const reciveOffers = offers => ({
  type: types.OFFERS_RECIVED,
  payload: {
    offers,
  },
});
