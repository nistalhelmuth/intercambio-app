import * as types from '../types/belongings';

export const createBelonging = ({
  id,
  name,
  description,
  category,
  usedState,
  propietaryId,
}) => ({
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
