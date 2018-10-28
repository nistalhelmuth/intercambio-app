import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as types from '../types/users';
import * as actions from '../actions/users';
import { postUser, deleteUser, checkUser, getUsers } from '../api/users';

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
      id
    },
  } = action;
  try {
    const response = yield call(
      deleteUser,
      id,
    )
    yield put(actions.confirmUserDeletion(id, response,id));
  } catch (e) {

  }
}

function* userFetcher(action) {
  const {
    payload: {
      atributeName,
      comparisonObject,
    }
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

function* userAutenticator() {
  const {
    payload: {
      email,
      password,
    }
  } = action;
  try {
    const response = yield call( 
      checkUser,
      email,
      password,
     );
    yield put(actions.confirmUserAuthentication(response));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
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
    userFetcher,
  );
  yield takeLatest(
    types.USER_AUTHENTICATED,
    userAutenticator,
  );
}

export default watchUserSaga;
