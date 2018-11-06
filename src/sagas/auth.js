import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
import * as types from '../types/auth';
import * as actions from '../actions/auth';
import login from '../api/auth';

function* userAutenticator(action) {
  const {
    payload: {
      username,
      password,
    },
  } = action;
  console.log(action);
  console.log(username);
  console.log(password);
  try {
    const response = yield call(
      login,
      username,
      password,
    );
    yield put(actions.confirmUserAuthentication(response));
  } catch (e) {
    console.log(e);
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* watchAuthSaga() {
  yield takeLatest(
    types.USER_AUTHENTICATED,
    userAutenticator,
  );
}

export default watchAuthSaga;
