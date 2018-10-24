import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import configureStore from './configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CategoryView from './sites/CategoriesView';
import Login from './sites/login';
import User from './sites/user';
import ItemList from './sites/itemList';
import Item from './sites/item';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/categories" component={CategoryView} />
        {/* <Route exact path="/categories/:category" component={CategoryList} /> */}
        <Route exact path="/user" component={User} />
        <Route exact path="/user/items" component={ItemList} />
        <Route exact path="/user/items/:item" component={Item} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);


serviceWorker.unregister();
