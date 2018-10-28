import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as types from '../types/categories';
import * as actions from '../actions/categories';
import { postCategory, getCategories } from '../api/categories';

function* categoryGenerator(action) {
  const {
    payload: {
      id,
      name,
    },
  } = action;
  try {
    const response = yield call(
      postCategory,
      name
    );
    yield put(actions.confirmCategoryAddition(id, response.id));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* categoryFetcher() {
  try {
    const response = yield call( getCategories );
    yield put(actions.reciveCategories(response));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}


function* watchCategoriesSaga() {
  yield takeLatest(
    types.CATEGORTY_ADDED,
    categoryGenerator,
  );
  yield takeLatest(
    types.CATEGORIES_FETCHED,
    categoryFetcher,
  );
}

export default watchCategoriesSaga;
