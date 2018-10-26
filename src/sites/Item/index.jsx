import React, { Component } from 'react';
import './styles.css';

import { Router } from 'react-router-dom';

import Thing from './components/Thing';
import Owner from './components/Owner';
import BetList from './components/BetList';
import BetCreator from './components/BetCreator';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="leftSide">
          <button
            
          >
            {'back'}
          </button>
          <Thing/>
          <Owner/>
        </div>
        <div className="rightSide">
          <BetList/>
          <BetCreator/>
        </div>
      </div>
    );
  }
}

export default Item;
