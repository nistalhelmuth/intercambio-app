import {
  call,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';
import { fetchOffers, postOffer, deleteOffer } from '../api/offers';
import * as types from '../types/offers';
import * as actions from '../actions/offers';
import * as selectors from '../reducers';

function* generateOffers(payload, token) {
  yield payload.objects.map(object => call(
    postOffer,
    object,
    payload.userId,
    payload.objectId,
    token,
  ));
}

function* offerGenerator(action) {
  const {
    payload,
  } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(generateOffers, payload, token);
    yield put(actions.confirmOfferCreation(response));
  } catch (error) {
    yield put(actions.failOfferCreation());
  }
}

function* offersFetcher(action) {
  const { payload: { postId } } = action;
  const token = yield select(selectors.getToken);
  try {
    const response = yield call(
      fetchOffers,
      postId,
      token,
    );
    yield put(actions.confirmOffersFetch(response));
  } catch (error) {
    console.log(error);
    yield put(actions.failOfferFetching());
  }
}

function* offerRemover(action) {
  const {
    payload: {
      id,
    },
  } = action;
  try {
    const response = yield call(
      deleteOffer,
      id,
    );
    yield put(actions.confirmOfferDeletion(response));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* watchOffersSaga() {
  yield takeLatest(
    types.OFFER_CREATED,
    offerGenerator,
  );
  yield takeLatest(
    types.OFFERS_FETCHED,
    offersFetcher,
  );
  yield takeLatest(
    types.OFFER_DELETED,
    offerRemover,
  );
}

export default watchOffersSaga;
