import React from 'react';
import PropTypes from 'prop-types';
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

Stars.propTypes = {
  num: PropTypes.number.isRequired,
};

export default Stars;
