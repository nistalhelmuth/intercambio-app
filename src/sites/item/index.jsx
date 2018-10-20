import React, { Component } from 'react';
import './styles.css';

import Thing from './components/thing';
import Owner from './components/owner';
import BetList from './components/betList';
import BetCreator from './components/betCreator';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="leftSide">
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
