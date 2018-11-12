import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';

import './styles.css';

const PersonalInfo = ({
  first_name,
  last_name,
  username,
  email,
  age,
  img,
  phone,
}) => (
  <div className="personalInfo">
    <div className="content">
      <h1>
        {`Cosas de ${first_name} ${last_name}`}
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
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
};

export default connect(
  (state, { id, self }) => {
    if (!self) {
      return ({
        ...selectors.getUser(state, id),
      });
    }
    return ({
      ...selectors.getLoggedUser(state),
    });
  },
  undefined,
)(PersonalInfo);
