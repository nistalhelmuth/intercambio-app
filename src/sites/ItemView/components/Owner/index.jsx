import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';
import './styles.css';

const Owner = ({
  id,
  firstName,
  lastName,
  username,
  email,
  phone,
  img,
}) => (
  <Link
    style={{ textDecoration: 'none', color: 'black' }}
    to={`/users/${id}`}
  >
    <div className="owner">
      <img src={img} alt="ownerPicture" />
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
  </Link>
);

Owner.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getUser(state, id),
  }),
  undefined,
)(Owner);
