import * as types from '../types/categories';

export const addCategory = ({
  id,
  name,
}) => ({
  type: types.CATEGORTY_ADDED,
  payload: {
    id,
    name,
  },
});

export const fetchCategories = () => ({
  type: types.CATEGORIES_FETCHED,
});

export const reciveCategories = categories => ({
  type: types.CATEGORIES_RECIVED,
  payload: {
    categories,
  },
});
