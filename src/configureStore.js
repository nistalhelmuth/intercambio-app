import { createStore } from 'redux';

import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
/* eslint-enable */

export default configureStore;
