import React, { Component } from 'react';
import './styles.css';

import Bet from '../Bet';

const BetList = () => (
  <div className="betList">
    <Bet/>
    <Bet/>
    <Bet/>
  </div>
);

export default BetList;