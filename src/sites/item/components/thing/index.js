import React, { Component } from 'react';
import './styles.css';

import Stars from '../starts';

const Thing = ({ img, stars, description, date}) => (
  <div className="thing">
    <h2>
      {'Nombre de la cosa'}
    </h2>
    <img src="https://vignette.wikia.nocookie.net/fantendo/images/7/7f/50px-Ludwig_NSMBWii.png/revision/latest?cb=20121129172414" alt="Flowers" />
    <div className="starts">
      <Stars num={3}/>
    </div>
    <div className="other">
      <h4>
        {'Description:'}
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate egestas semper. Morbi hendrerit varius ante a mattis. Vestibulum sit amet quam condimentum, commodo orci nec, mattis cras amet. 
      </p>
    </div>
  </div>
);

export default Thing;