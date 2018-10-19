import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import Login from './sites/login';
import Category from './sites/category';
import CategoryList from './sites/categoryList';
import User from './sites/user';
import Item from './sites/item';
import ItemList from './sites/itemList';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={ Login }/>
          <Route exact path='/categories' component={ Category }/>
          <Route exact path='/categories/:category' component={ CategoryList }/>
          <Route exact path='/user' component={ User }/>
          <Route exact path='/user/items' component={ Item }/>
          <Route exact path='/user/items/:item' component={ ItemList }/>
        </Switch>
      </BrowserRouter>
    </Provider>, 
document.getElementById('root'));


serviceWorker.unregister();