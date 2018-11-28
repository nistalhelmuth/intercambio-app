import {
  call,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';

import * as types from '../types/belongings';
import * as belonginActions from '../actions/belongings';
import {
  postBelonging, fetchBelongings, deleteBelonging, updateBelonging,
} from '../api/belongings';
import { uploadImage } from '../api/images';
import * as selectors from '../reducers';

function* belongingGenerator(action) {
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
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      postBelonging,
      name,
      description,
      category,
      usedState,
      propietaryId,
      token,
    );

    if (img) {
      const imgUrl = yield call(
        uploadImage,
        response.id,
        'belongings',
        img,
      );

      yield call(
        updateBelonging,
        response.id,
        name,
        description,
        category,
        usedState,
        propietaryId,
        imgUrl,
        token,
      );
    }

    yield put(belonginActions.confirmBelongingCreation(id, response.id));
  } catch (e) {
    console.log(e);
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* belongingRemover(action) {
  const {
    payload: {
      id,
    },
  } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      deleteBelonging,
      id,
      token,
    );
    yield put(belonginActions.confirmBelongingDeletion(id, response, id));
  } catch (e) {
    // yield put(belonginActions.de)
  }
}

function* belongingFetcher(action) {
  const {
    payload: {
      id,
    },
  } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      fetchBelongings,
      id,
      token,
    );
    yield put(belonginActions.reciveBelongings(response));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* watchBelongingsSaga() {
  yield takeLatest(
    types.BELONGING_CREATED,
    belongingGenerator,
  );
  yield takeLatest(
    types.BELONGINGS_FETCHED,
    belongingFetcher,
  );
  yield takeLatest(
    types.BELONGING_DELETED,
    belongingRemover,
  );
}

export default watchBelongingsSaga;
