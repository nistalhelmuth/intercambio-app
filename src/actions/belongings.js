import * as types from '../types/belongings';

export const createBelonging = (
  id,
  name,
  description,
  category,
  usedState,
  propietaryId,
  img,
) => ({
  type: types.BELONGING_CREATED,
  payload: {
    id,
    name,
    description,
    category,
    usedState,
    propietaryId,
    img,
  },
});

export const confirmBelongingCreation = (
  oldId,
  newId,
) => ({
  type: types.BELONGING_CREATION_CONFIRMED,
  payload: {
    oldId,
    newId,
  },
});

export const fetchBelongings = userId => ({
  type: types.BELONGINGS_FETCHED,
  payload: {
    userId,
  },
});

export const reciveBelongings = belongings => ({
  type: types.BELONGINGS_RECIVED,
  payload: {
    belongings,
  },
});

export const fetchBelongingsPerOffer = offerId => ({
  type: types.BELONGINGS_PER_OFFER_FETCHED,
  payload: {
    offerId,
  },
});

export const reciveBelongingsPerOffer = (offerId, belongings) => ({
  type: types.BELONGINGS_PER_OFFER_RECIVED,
  payload: {
    offerId,
    belongings,
  },
});

export const createBelongingsPerOffer = (offerId, belongings) => ({
  type: types.BELONGINGS_PER_OFFER_CREATED,
  payload: {
    offerId,
    belongings,
  },
});

export const createBelongingsPerOfferConfirmed = () => ({
  type: types.BELONGINGS_PER_OFFER_CREATED_CONFIRMED,
});

export const createBelongingsPerOfferFailed = () => ({
  type: types.BELONGINGS_PER_OFFER_CREATED_FAILED,
});

export const deleteBelongingsPerOffer = offerId => ({
  type: types.BELONGINGS_PER_OFFER_DELETED,
  payload: {
    offerId,
  },
});

export const deleteBelongingsPerOfferConfirmed = () => ({
  type: types.BELONGINGS_PER_OFFER_DELETED_CONFIRMED,
});

export const deleteBelongingsPerOfferFailed = () => ({
  type: types.BELONGINGS_PER_OFFER_DELETED_FAILED,
});

export const deleteBelonging = id => ({
  type: types.BELONGING_DELETED,
  payload: {
    id,
  },
});

export const confirmBelongingDeletion = id => ({
  type: types.BELONGING_DELETION_CONFIRMED,
  payload: {
    id,
  },
});

export const belonginSelected = id => ({
  type: types.BELONGING_SELECTED,
  payload: {
    id,
  },
});
