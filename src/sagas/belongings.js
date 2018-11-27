import {
  call,
  takeLatest,
  takeEvery,
  put,
  select,
} from 'redux-saga/effects';

import * as types from '../types/belongings';
import * as belonginActions from '../actions/belongings';
import * as selectors from '../reducers';
import {
  postBelongin,
  getBelongin,
  deleteBelongin,
  getBelonginPerOffer,
} from '../api/belongings';

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

function* belongingsPerOfferFetcher(action) {
  const {
    payload: {
      offerId,
    },
  } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      getBelonginPerOffer,
      offerId,
      token,
    );
    yield put(belonginActions.reciveBelongingsPerOffer(offerId, response));
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
  yield takeEvery(
    types.BELONGINGS_PER_OFFER_FETCHED,
    belongingsPerOfferFetcher,
  );
}

export default watchBelonginsSaga;
