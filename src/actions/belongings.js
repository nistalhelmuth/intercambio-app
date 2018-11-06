import * as types from '../types/belongings';

export const createBelonging = (
  id,
  name,
  description,
  category,
  usedState,
  propietaryId,
) => ({
  type: types.BELONGING_CREATED,
  payload: {
    id,
    name,
    description,
    category,
    usedState,
    propietaryId,
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

export const fetchBelongings = id => ({
  type: types.BELONGINGS_FETCHED,
  payload: {
    id,
  },
});

export const reciveBelongings = belongings => ({
  type: types.BELONGINGS_RECIVED,
  payload: {
    belongings,
  },
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
