import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as imageTypes from '../types/image';
import * as belonginActions from '../actions/belongings';
// import * as belonginActions from '../actions/belongings';
import * as imageActions from '../actions/image';

function* belonginImage(action) {
  const {
    payload: {
      belonginValues,
      img,
    },
  } = action;
  let imgDir;
  try {
    if (img) {
      /*
      imgDir = yield call(
        apiCall,
        img,
      );
      */
      yield put(imageActions.confirmImage());
    } else {
      yield put(imageActions.failImg());
    }
  } catch (e) {
    yield put(imageActions.failImg());
  }
  yield put(belonginActions.createBelonging(
    belonginValues.id,
    belonginValues.name,
    belonginValues.description,
    belonginValues.category,
    belonginValues.user,
    imgDir,
  ));
}

function* profileImage(action) {
  const {
    payload: {
      userId,
      img,
    },
  } = action;
  let imgDir;
  try {
    if (img) {
      imgDir = yield call(
        apiCall,
        userId,
        img,
      );

      yield put(imageActions.confirmImage());
    }
  } catch (e) {
    yield put(imageActions.failImg());
  }
  /*
  yield put(belonginActions.createBelonging(
    userId,
    imgDir,
  )); */
}


function* watchBelonginsSaga() {
  yield takeLatest(
    imageTypes.BELONGING_IMG_SENT,
    belonginImage,
  );
  yield takeLatest(
    imageTypes.PROFILE_IMG_SENT,
    profileImage,
  );
}

export default watchBelonginsSaga;
