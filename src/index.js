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
import NewItem from './sites/NewItem';
import CategoryList from './sites/CategoryList';
import Login from './sites/Login';
import User from './sites/User';
import Item from './sites/Item';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/categories" component={CategoryView} />
        <Route exact path="/categories/:id" component={CategoryList} />
        <Route exact path="/newItem" component={NewItem} />
        <Route exact path="/users/:username" component={User} />
        <Route exact path="/users/:username/:itemID" component={Item} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
