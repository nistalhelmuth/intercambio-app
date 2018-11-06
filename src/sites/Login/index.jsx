import React from 'react';
import Proptypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
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
  <form onSubmit={handleSubmit}>
    {
      token !== undefined
        ? <Redirect to="/categories/" />
        : (
          <div className="login">
            {
              logginFailed
                ? <h5>El nombre de usuario o la contraseña son incorrectos.</h5>
                : ''
            }
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Nombre de Usuario"
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Contraseña"
            />
            <button type="submit" disabled={pristine || submitting}>Iniciar Sesión</button>
            <button type="button">Registrarse</button>
          </div>
        )
    }
  </form>
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
    logginFailed: selectors.getLogginFailStatus(state),
  }),
  dispatch => ({
    onSubmit(values) {
      const { username, password } = values;
      dispatch(actions.authenticateUser(username, password));
    },
  }),
)(LoginForm);
