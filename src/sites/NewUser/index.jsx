import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserForm from './components/UserForm';
import * as actions from '../../actions/users';

import './styles.css';

class NewUserView extends Component {
  componentWillMount() {
    const { reset } = this.props;
    reset();
  }

  render() {
    return (
      <div className="newUser">
        <UserForm />
      </div>
    );
  }
}

NewUserView.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  dispatch => ({
    reset() {
      dispatch(actions.resetSubmitStatus());
    },
  }),
)(NewUserView);
