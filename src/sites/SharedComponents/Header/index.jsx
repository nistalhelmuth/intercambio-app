import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as selectors from '../../../reducers';
import * as authActions from '../../../actions/auth';
import './styles.css';

const leftButton = (token, goToCategories, user) => {
  if (token !== undefined) {
    return (
      goToCategories ? (
        <Link className="link-as-button" to="/categories">Ver Categorias</Link>
      ) : (
        <Link className="link-as-button" to={`/newPost/${user.id}`}>Crear Post</Link>
      )
    );
  }
  return '';
};

const Header = ({
  user,
  closeSession,
  token,
  goToCategories,
  disableProfileIcon,
}) => (
  <div className="header">
    {
      token === undefined
        ? <Redirect to="/" />
        : ''
    }
    {leftButton(token, goToCategories, user)}
    {
      !disableProfileIcon && (
        <div className="profile">
          <img
            className="profile-icon"
            src={user ? user.img : '/user-icon.png'}
            alt="user-icon"
          />
          <div className="popover-container">
            <div className="popover-tail-border">
              <div className="popover-tail" />
            </div>
            <div className="popover-body">
              {
                token !== undefined
                  ? <Link to={`/users/${user.id}`}>Ver Perfil</Link>
                  : ''
              }
              <button className="button-as-link" type="button" onClick={closeSession}>Cerrar Sesión</button>
            </div>
          </div>
        </div>
      )
    }
  </div>
);

Header.propTypes = {
  user: PropTypes.object.isRequired,
  closeSession: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  goToCategories: PropTypes.bool.isRequired,
  disableProfileIcon: PropTypes.bool.isRequired,
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
