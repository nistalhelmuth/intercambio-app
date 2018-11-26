import {
  call,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';

import * as types from '../types/users';
import * as actions from '../actions/users';
import * as selectors from '../reducers';

import {
  postUser,
  deleteUser,
  getUsers,
  getUser,
} from '../api/users';

function* userGenerator(action) {
  const {
    payload: {
      id,
      username,
      firstName,
      lastName,
      email,
      password,
      age,
      phone,
    },
  } = action;
  try {
    const response = yield call(
      postUser,
      username,
      firstName,
      lastName,
      email,
      password,
      age,
      phone,
    );
    yield put(actions.confirmUserCreation(id, response.id));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* userRemover(action) {
  const {
    payload: {
      id,
    },
  } = action;
  try {
    const response = yield call(
      deleteUser,
      id,
    );
    yield put(actions.confirmUserDeletion(id, response, id));
  } catch (e) {

  }
}

function* usersFetcher(action) {
  const {
    payload: {
      atributeName,
      comparisonObject,
    },
  } = action;
  try {
    const response = yield call(
      getUsers,
      atributeName,
      comparisonObject,
    );
    yield put(actions.reciveUsers(response));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* userFetcher(action) {
  const { payload: { userId } } = action;
  const token = yield select(selectors.getToken);
  console.log("user",userId);
  try {
    const response = yield call(
      getUser,
      userId,
      token,
    );
    yield put(actions.reciveUser(response));
  } catch (error) {
    console.log(error);
    yield put(actions.failUserFetching());
  }
}


function* watchUserSaga() {
  yield takeLatest(
    types.USER_CREATED,
    userGenerator,
  );
  yield takeLatest(
    types.USER_DELETED,
    userRemover,
  );
  yield takeLatest(
    types.USERS_FETCHED,
    usersFetcher,
  );
  yield takeLatest(
    types.USER_FETCHED,
    userFetcher,
  );
}

export default watchUserSaga;
