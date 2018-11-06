import React from 'react';
import Proptypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

import './styles.css';

const Login = ({
  handleSubmit,
  pristine,
  submitting,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="login">
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
  </form>
);

Login.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
  pristine: Proptypes.bool.isRequired,
  submitting: Proptypes.bool.isRequired,
};

const LoginForm = reduxForm({
  form: 'login',
})(Login);

export default connect(
  undefined,
  dispatch => ({
    onSubmit(values) {
      const { username, password } = values;
      console.log(username, password);
      dispatch(actions.authenticateUser(username, password));
    },
  }),
)(LoginForm);
