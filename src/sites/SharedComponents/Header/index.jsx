import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as selectors from '../../../reducers';
import * as authActions from '../../../actions/auth';
import './styles.css';

const Header = ({
  user,
  closeSession,
  token,
}) => (
  <div className="header">
    {
      token === undefined
        ? <Redirect to="/" />
        : ''
    }
    <Link className="link-as-button" to="/newPost">Crear Post</Link>
    <div className="profile">
      <img className="profile-icon" src="/user-icon.png" alt="user-icon" />
      <div className="popover-container">
        <div className="popover-tail-border">
          <div className="popover-tail" />
        </div>
        <div className="popover-body">
          {
            token !== undefined
              ? <Link to={`/users/${user.id}/${true}`}>Ver Perfil</Link>
              : ''
          }
          <button className="button-as-link" type="button" onClick={closeSession}>Cerrar Sesión</button>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  user: PropTypes.object.isRequired,
  closeSession: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    user: selectors.getLoggedUser(state),
    token: selectors.getToken(state),
  }),
  dispatch => ({
    closeSession() {
      dispatch(authActions.closeSession());
    },
  }),
)(Header);
