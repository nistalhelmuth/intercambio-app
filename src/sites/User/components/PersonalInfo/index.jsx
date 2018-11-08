import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';

import './styles.css';

const PersonalInfo = ({
  firstName,
  lastName,
  username,
  email,
  age,
  img,
  phone,
}) => (
  <div className="personalInfo">
    <div className="content">
      <h1>
        {`Cosas de ${firstName} ${lastName}`}
      </h1>
      <ul>
        <li>
          {username}
        </li>
        <li>
          {email}
        </li>
        <li>
          {`Edad: ${age}`}
        </li>
        <li>
          {phone}
        </li>
      </ul>
    </div>
    <img src={img} alt="profilePicture" />
  </div>
);

PersonalInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getUser(state, id),
  }),
  undefined,
)(PersonalInfo);
