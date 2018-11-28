import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/users';
import * as interfaceActions from '../../../../actions/interface';

import './styles.css';

class PersonalInfo extends Component {
  componentWillMount() {
    const { fetchUser, resetSubmittedStatus } = this.props;
    fetchUser();
    resetSubmittedStatus();
  }

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      age,
      img,
      phone,
    } = this.props;
    return (
      <div className="personalInfo">
        <div className="content">
          <h1 className="title">
            {`Cosas de ${firstName} ${lastName}`}
          </h1>
          <ul>
            <li>
              {username}
            </li>
            <li>
              {email}
            </li>
            <li>
              {`Edad: ${age}`}
            </li>
            <li>
              {phone}
            </li>
          </ul>
        </div>
        <img src={img} alt="profilePicture" />
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  fetchUser: PropTypes.func.isRequired,
  resetSubmittedStatus: PropTypes.func.isRequired,
};

export default connect(
  (state, { id }) => {
    if (parseInt(id, 10) !== selectors.getLoggedUser(state).id) {
      return ({
        ...selectors.getSelectedUser(state),
      });
    }
    return ({
      ...selectors.getLoggedUser(state),
    });
  },
  (dispatch, { id }) => ({
    fetchUser() {
      dispatch(actions.fetchUser(id));
    },
    resetSubmittedStatus() {
      dispatch(interfaceActions.resetSubmittedStatus());
    },
  }),
)(PersonalInfo);
