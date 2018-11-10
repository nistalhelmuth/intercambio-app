import React from 'react';
import Proptypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';

import './styles.css';

const Login = ({
  handleSubmit,
  pristine,
  submitting,
  token,
  logginFailed,
}) => (
  <div className="login">
    <h1 className="login-title">The Bartering Library</h1>
    <form onSubmit={handleSubmit}>
      {
        token !== undefined
          ? <Redirect to="/categories/" />
          : (
            <div className="login-core">
              {
                logginFailed
                  ? <h5>El nombre de usuario o la contraseña son incorrectos.</h5>
                  : ''
              }
              <Field
                name="username"
                className="login-input"
                component="input"
                type="text"
                placeholder="Nombre de Usuario"
              />
              <Field
                name="password"
                className="login-input"
                component="input"
                type="password"
                placeholder="Contraseña"
              />
              <div className="buttons-container">
                <button className={`login-button ${pristine || submitting ? 'disabled' : ''}`} type="submit" disabled={pristine || submitting}>Iniciar Sesión</button>
                <button className="login-button" type="button">Registrarse</button>
              </div>
            </div>
          )
      }
    </form>
  </div>
);

Login.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
  pristine: Proptypes.bool.isRequired,
  submitting: Proptypes.bool.isRequired,
  token: Proptypes.string,
  logginFailed: Proptypes.bool.isRequired,
};

Login.defaultProps = {
  token: undefined,
};

const LoginForm = reduxForm({
  form: 'login',
})(Login);

export default connect(
  state => ({
    token: selectors.getToken(state),
    logginFailed: selectors.getLoginStatus(state),
  }),
  dispatch => ({
    onSubmit(values) {
      const { username, password } = values;
      dispatch(actions.authenticateUser(username, password));
    },
  }),
)(LoginForm);
