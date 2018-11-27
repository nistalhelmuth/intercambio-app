import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as types from '../types/users';
import * as actions from '../actions/users';
import {
  postUser, deleteUser, getUsers, updateUser,
} from '../api/users';
import { uploadUserImage } from '../api/images';

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
      img,
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

    if (img) {
      const imgUrl = yield call(
        uploadUserImage,
        response.id,
        img,
      );

      yield call(
        updateUser,
        response.id,
        username,
        firstName,
        lastName,
        email,
        password,
        age,
        phone,
        response.rating,
        imgUrl,
      );
    }
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

function* userFetcher(action) {
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
}

export default watchUserSaga;
