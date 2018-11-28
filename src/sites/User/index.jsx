import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import PersonalInfo from './components/PersonalInfo';
import ItemList from './components/ItemList';
import Header from '../SharedComponents/Header';

import './styles.css';

const User = ({
  match: { params },
  loggedUser,
}) => (
  <div className="user">
    <Header
      disableProfileIcon
      goToCategories
      showEdit={
        loggedUser.id === parseInt(params.userId)
      }
    />
    <PersonalInfo id={params.userId} self={params.self} />
    <ItemList id={params.userId} />
  </div>
);

User.propTypes = {
  match: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    loggedUser: selectors.getLoggedUser(state),
  }),
)(User);
