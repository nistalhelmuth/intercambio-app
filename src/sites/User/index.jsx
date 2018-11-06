import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import PersonalInfo from './components/PersonalInfo';
import ItemList from './components/ItemList';
import * as userActions from '../../actions/users';

import './styles.css';

class User extends Component {
  componentWillMount() {
    userActions.fetchUsers();
  }


  render() {
    const { match: { params } } = this.props;
    return (
      <div className="user">
        <PersonalInfo id={params.userID} />
        <ItemList id={params.userID} />
      </div>
    );
  }
}

User.propTypes = {
  match: PropTypes.object.isRequired,
};

export default User;
