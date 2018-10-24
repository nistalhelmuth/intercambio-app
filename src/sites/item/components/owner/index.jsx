import React, { Component } from 'react';
import './styles.css';

const Owner = ({ img, stars, description, date}) => (
  <div className="owner">
    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Flowers" />
    <div className="content">
      <ul>
        <li>
        {'username'}
        </li>
        <li>
        {'email'}
        </li>
        <li>
        {'items'}
        </li>
        <li>
        {'rating'}
        </li>
      </ul>
    </div>
  </div>
);

export default Owner;