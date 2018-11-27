import { fork, all } from 'redux-saga/effects';

import watchCategoriesSaga from './categories';
import watchUsersSaga from './users';
import watchBelongingsSaga from './belongings';
import watchAuthSaga from './auth';
import watchPostsSaga from './posts';
import watchOffersSaga from './offers';


function* mainSaga() {
  yield all([
    fork(watchCategoriesSaga),
    fork(watchUsersSaga),
    fork(watchBelongingsSaga),
    fork(watchAuthSaga),
    fork(watchPostsSaga),
    fork(watchOffersSaga),
  ]);
}

export default mainSaga;
