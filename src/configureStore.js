import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mainSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  // const middlewares = [sagaMiddleware];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  sagaMiddleware.run(mainSaga);

  return store;
};
/* eslint-enable */

export default configureStore;
