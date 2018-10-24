import React, { Component } from 'react';

import PersonalInfo from './components/personalInfo';
import ItemList from './components/itemList';

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
