import {
  call,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';

import * as types from '../types/categories';
import * as actions from '../actions/categories';
import * as selectors from '../reducers';
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
      name,
    );
    yield put(actions.confirmCategoryAddition(id, response.id));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* categoryFetcher() {
  try {
    const token = yield select(selectors.getToken);
    const response = yield call(getCategories, token);
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
