import React, { Component } from 'react';
import './styles.css';

import Stars from '../starts';

const Thing = ({ img, stars, description, date}) => (
  <div className="thing">
    <h2>
      {'Nombre de la cosa'}
    </h2>
    <img src="data:image/jpeg;base64,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" alt="Flowers" />
    <Stars num={3}/>
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