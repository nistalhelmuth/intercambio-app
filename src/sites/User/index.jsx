import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

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
        <PersonalInfo id={params.userId} />
        <ItemList id={params.userId} />
        <Link to="/newItem">
          <button
            type="button"
            className="floating"
          >
            {'Crear objeto'}
          </button>
        </Link>
      </div>
    );
  }
}

User.propTypes = {
  match: PropTypes.object.isRequired,
};

export default User;
