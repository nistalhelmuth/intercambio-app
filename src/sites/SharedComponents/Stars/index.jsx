import React from 'react';
import './styles.css';

const Stars = ({ num }) => (
  <div className="stars">
    <img src="/star.png" alt="start" />
    {num > 0 && (<img src="/star.png" alt="start" /> )}
    {num > 1 && (<img src="/star.png" alt="start" />)}
    {num > 2 && (<img src="/star.png" alt="start" />)}
    {num > 3 && (<img src="/star.png" alt="start" />)}
  </div>
);

export default Stars;
