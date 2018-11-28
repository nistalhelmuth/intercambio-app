import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserForm from './components/UserForm';
import * as actions from '../../actions/users';
import * as selectors from '../../reducers';

import './styles.css';

class NewUserView extends Component {
  componentWillMount() {
    const {
      reset, match: { params: userId }, fetchUser, user,
    } = this.props;
    reset();
    if (userId.userId !== undefined) {
      fetchUser(userId.userId);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="newUser">
        <UserForm user={user} />
      </div>
    );
  }
}

NewUserView.propTypes = {
  reset: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    user: selectors.getSelectedUser(state),
  }),
  dispatch => ({
    reset() {
      dispatch(actions.resetSubmitStatus());
    },
    fetchUser(userId) {
      dispatch(actions.fetchUser(userId));
    },
  }),
)(NewUserView);
