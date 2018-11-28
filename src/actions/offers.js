import * as types from '../types/offers';

export const createOffer = (
  id,
  offeredBy,
  offeredObjects,
  offeredIn,
) => ({
  type: types.OFFER_CREATED,
  payload: {
    id,
    offeredBy,
    offeredObjects,
    offeredIn,
  },
});

export const confirmOfferCreation = (
  oldId,
  newId,
) => ({
  type: types.OFFER_CREATION_CONFIRMED,
  payload: {
    oldId,
    newId,
  },
});

export const failOfferCreation = () => ({
  type: types.OFFER_CREATION_FAILED,
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
  type: types.OFFER_DELETION_CONFIRMED,
  payload: {
    id,
  },
});

export const failOfferDeletion = () => ({
  type: types.OFFER_DELETION_FAILED,
});

export const fetchOffers = postId => ({
  type: types.OFFERS_FETCHED,
  payload: {
    postId,
  },
});

export const confirmOffersFetch = offers => ({
  type: types.OFFERS_RECIVED,
  payload: {
    offers,
  },
});

export const failOfferFetching = () => ({
  type: types.OFFERS_FETCHING_FAILED,
});
