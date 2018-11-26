import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import throttle from 'lodash/throttle';
import { saveState } from './localStorage';
import configureStore from './configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CategoryView from './sites/CategoriesView';
import NewItem from './sites/NewItem';
import CategoryList from './sites/CategoryList';
import Login from './sites/Login';
import User from './sites/User';
import ItemView from './sites/ItemView';

const store = configureStore();

store.subscribe(throttle(() => {
  saveState({
    auth: {
      authInfo: store.getState().auth.authInfo,
    },
  });
}), 3000);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/categories" component={CategoryView} />
        <Route exact path="/categories/:categoryId" component={CategoryList} />
        <Route exact path="/newItem" component={NewItem} />
        <Route exact path="/users/:userId" component={User} />
        <Route exact path="/posts/:userId/:itemId" component={ItemView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
