import React from 'react';
import { PropTypes } from 'prop-types';
import PersonalInfo from './components/PersonalInfo';
import ItemList from './components/ItemList';
import Header from '../SharedComponents/Header';

import './styles.css';

const User = ({
  match: { params },
}) => (
  <div className="user">
    <Header disableProfileIcon goToCategories />
    <PersonalInfo id={params.userId} self={params.self} />
    <ItemList id={params.userId} />
  </div>
);

User.propTypes = {
  match: PropTypes.object.isRequired,
};

export default User;
