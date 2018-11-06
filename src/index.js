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
    auth: store.getState().auth,
  });
}), 5000);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/categories" component={CategoryView} />
        <Route exact path="/categories/:categoryID" component={CategoryList} />
        <Route exact path="/newItem" component={NewItem} />
        <Route exact path="/users/:userID" component={User} />
        <Route exact path="/users/:userID/:itemID" component={ItemView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
