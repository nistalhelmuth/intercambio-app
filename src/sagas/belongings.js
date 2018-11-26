import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as types from '../types/belongings';
import * as actions from '../actions/belongings';
import { postBelongin, getBelongin, deleteBelongin } from '../api/belongings';

function* belonginGenerator(action) {
  const {
    payload: {
      id,
      name,
      description,
      category,
      usedState,
      propietaryId,
    },
  } = action;
  console.log(name);
  
  try {
    /*
    const response = yield call(
      postBelongin,
      name,
      description,
      category,
      usedState,
      propietaryId,
    );
    */
    yield put(actions.confirmBelongingCreation(id, 0));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* belonginRemover(action) {
  const {
    payload: {
      id,
    },
  } = action;
  try {
    const response = yield call(
      deleteBelongin,
      id,
    );
    yield put(actions.confirmBelongingDeletion(id, response, id));
  } catch (e) {

  }
}

function* belonginFetcher(action) {
  const {
    payload: {
      id,
    },
  } = action;
  try {
    const response = yield call(
      getBelongin,
      id,
    );
    yield put(actions.reciveBelongings(response));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* watchBelonginsSaga() {
  yield takeLatest(
    types.BELONGING_CREATED,
    belonginGenerator,
  );
  yield takeLatest(
    types.BELONGINGS_FETCHED,
    belonginRemover,
  );
  yield takeLatest(
    types.BELONGING_DELETED,
    belonginFetcher,
  );
}

export default watchBelonginsSaga;
