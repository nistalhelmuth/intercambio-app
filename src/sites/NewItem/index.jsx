import React from 'react';
import Header from '../SharedComponents/Header';
import ItemForm from './components/ItemForm';

import './styles.css';

const NewItem = () => (
  <div className="newItem">
    <Header />
    <ItemForm />
  </div>
);


export default NewItem;
