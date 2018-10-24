import React, { Component } from 'react';

import PersonalInfo from './components/PersonalInfo';
import ItemList from './components/ItemList';

import './styles.css';

class User extends Component {
  render() {
    return (
      <div className="user">        
        <PersonalInfo/>
        <ItemList/>
      </div>
    );
  }
}

export default User;
