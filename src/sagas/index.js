import { fork, all } from 'redux-saga/effects';

import watchCategoriesSaga from './categories';
import watchUsersSaga from './users';
import watchBelongingsSaga from './belongings';


function* mainSaga() {
  yield all([
    fork(watchCategoriesSaga),
    fork(watchUsersSaga),
    fork(watchBelongingsSaga),
  ]);
}

export default mainSaga;
