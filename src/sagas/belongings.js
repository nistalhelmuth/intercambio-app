import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as types from '../types/belongings';
import * as belonginActions from '../actions/belongings';
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
      img,
    },
  } = action;
  try {
    const response = yield call(
      postBelongin,
      name,
      description,
      category,
      usedState,
      propietaryId,
      img,
    );
    yield put(belonginActions.confirmBelongingCreation(id, response.id));
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
    yield put(belonginActions.confirmBelongingDeletion(id, response, id));
  } catch (e) {
    //yield put(belonginActions.de)
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
    yield put(belonginActions.reciveBelongings(response));
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
