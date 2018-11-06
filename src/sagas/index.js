import { fork, all } from 'redux-saga/effects';

import watchCategoriesSaga from './categories';
import watchUsersSaga from './users';
import watchBelongingsSaga from './belongings';
import watchAuthSaga from './auth';


function* mainSaga() {
  yield all([
    fork(watchCategoriesSaga),
    fork(watchUsersSaga),
    fork(watchBelongingsSaga),
    fork(watchAuthSaga),
  ]);
}

export default mainSaga;
