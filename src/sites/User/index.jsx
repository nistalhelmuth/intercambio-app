import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import ItemList from './components/ItemList';

import './styles.css';

const User = ({
  match: { params },
}) => (
  <div className="user">
    <PersonalInfo id={params.userId} self={params.self} />
    <ItemList id={params.userId} />
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to="/newItem"
    >
      <button
        type="button"
        className="floating"
      >
        {'Crear objeto'}
      </button>
    </Link>
  </div>
);

User.propTypes = {
  match: PropTypes.object.isRequired,
};

export default User;
