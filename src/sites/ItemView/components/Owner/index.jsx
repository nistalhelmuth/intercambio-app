import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import './styles.css';

const Owner = ({
  firstName,
  lastName,
  username,
  email,
  phone,
}) => (
  <div className="owner">
    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Flowers" />
    <div className="content">
      <ul>
        <li>
          {`${firstName} ${lastName}`}
        </li>
        <li>
          {username}
        </li>
        <li>
          {email}
        </li>
        <li>
          {phone}
        </li>
      </ul>
    </div>
  </div>
);

Owner.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getUser(state, id),
  }),
  undefined,
)(Owner);
