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
  updateUser,
} from '../api/users';
import { uploadImage } from '../api/images';

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

    if (img) {
      const imgUrl = yield call(
        uploadImage,
        response.id,
        'users',
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

    yield put(actions.confirmUserCreation(id, response.id));
  } catch (e) {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  }
}

function* userUpdater(action) {
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
      rating,
      img,
    },
  } = action;

  let { imgUrl } = action;

  try {
    if (img) {
      imgUrl = yield call(
        uploadImage,
        id,
        'users',
        img,
      );
    }

    const newUser = yield call(
      updateUser,
      id,
      username,
      firstName,
      lastName,
      email,
      password,
      age,
      phone,
      rating,
      imgUrl,
    );

    yield put(actions.confirmUserUpdate(newUser));
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
  console.log('user', userId);
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
  yield takeLatest(
    types.USER_UPDATED,
    userUpdater,
  );
}

export default watchUserSaga;
