import React, { Fragment } from 'react';
import './styles.css';

const BetList = () => (
  <Fragment>
    <hr/>
    <div className="bet">      
      <div className="user">
        <p>
          {'nombre'}
        </p>
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="person"/>
      </div>
      <div className="things">
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="person"/>
      </div>
    </div>
  </Fragment>
);

export default BetList;