import React from 'react';
import { PropTypes } from 'prop-types';
import PersonalInfo from './components/PersonalInfo';
import ItemList from './components/ItemList';

import './styles.css';

const User = ({
  match: { params },
}) => (
  <div className="user">
    <PersonalInfo id={params.userId} self={params.self} />
    <ItemList id={params.userId} />
  </div>
);

User.propTypes = {
  match: PropTypes.object.isRequired,
};

export default User;
