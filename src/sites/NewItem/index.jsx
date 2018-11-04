import React from 'react';
import { Link } from 'react-router-dom';
import ItemForm from './components/ItemForm';

import './styles.css';

const NewItem = () => (
  <div className="newItem">
    <div className="header">
      <Link to="/categories">Ver Categorias</Link>
      <Link to={`/users/${'username'}`}>Perfil</Link>
    </div>
    <ItemForm />
  </div>
);


export default NewItem;
