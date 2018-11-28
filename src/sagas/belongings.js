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
  postBelonging,
  fetchBelongings,
  deleteBelonging,
  getBelonginPerOffer,
  postBelongingInOffer,
  updateBelonging,
} from '../api/belongings';
import { uploadImage } from '../api/images';

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
    yield call(
      deleteBelonging,
      id,
      token,
    );
    yield put(belonginActions.confirmBelongingDeletion(id));
  } catch (e) {
    console.log(e);
  }
}

function* belongingFetcher(action) {
  const {
    payload: {
      userId,
    },
  } = action;
  const token = yield select(selectors.getToken);
  console.log(userId);
  try {
    const response = yield call(
      fetchBelongings,
      userId,
      token,
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

function* generateObjectInOffer(offerId, belongings, token) {
  yield belongings.map(belonging => call(
    postBelongingInOffer,
    belonging,
    offerId,
    token,
  ));
}

function* belongingsPerOfferGenerator(action) {
  const {
    payload: {
      offerId,
      belongings,
    },
  } = action;
  const token = yield select(selectors.getToken);
  try {
    yield call(
      generateObjectInOffer,
      offerId,
      belongings,
      token,
    );
    yield put(belonginActions.createBelongingsPerOfferConfirmed());
  } catch (error) {
    yield put(belonginActions.createBelongingsPerOfferFailed());
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
  yield takeEvery(
    types.BELONGINGS_PER_OFFER_FETCHED,
    belongingsPerOfferFetcher,
  );
  yield takeLatest(
    types.BELONGINGS_PER_OFFER_CREATED,
    belongingsPerOfferGenerator,
  );
}

export default watchBelongingsSaga;
