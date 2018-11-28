import React from 'react';
import uuid from 'uuid-v4';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import TextInput from '../../../SharedComponents/TextInput';
import Upload from '../../../SharedComponents/Upload';
import * as actions from '../../../../actions/users';
import * as selectors from '../../../../reducers';

import './styles.css';

const required = value => (value ? undefined : 'Obligatorio');

const redirectTo = (user, submitted) => {
  if (user.id === undefined) {
    return (
      submitted
        ? <Redirect to="/" />
        : ''
    );
  }
  return (
    submitted
      ? <Redirect to={`/users/${user.id}`} />
      : ''
  );
};

const UserRegisterForm = ({
  handleSubmit,
  submitted,
  user,
}) => (
  <div className="user-form">
    {redirectTo(user, submitted)}
    <form className="form" onSubmit={handleSubmit}>
      <Field
        type="text"
        name="username"
        component={TextInput}
        validate={required}
        placeholder="Nombre de Usuario"
      />
      <Field
        type="password"
        name="password"
        component={TextInput}
        validate={required}
        placeholder="Contraseña"
      />
      <Field
        type="text"
        name="email"
        component={TextInput}
        validate={required}
        placeholder="Correo Electrónico"
      />
      <Field
        type="text"
        name="firstName"
        component={TextInput}
        validate={required}
        placeholder="Nombre"
      />
      <Field
        type="text"
        name="lastName"
        component={TextInput}
        validate={required}
        placeholder="Apellido"
      />
      <Field
        type="text"
        name="age"
        validate={required}
        component={TextInput}
        placeholder="Edad"
      />
      <Field
        type="text"
        name="phone"
        validate={required}
        component={TextInput}
        placeholder="Teléfono"
      />
      <Field
        name="image"
        component={Upload}
      />
      <button type="submit">
        {user.id === undefined
          ? 'Crear Usuario'
          : 'Actualizar Usuario'
        }
      </button>
    </form>
  </div>
);

UserRegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

UserRegisterForm.defaultProps = {
  user: undefined,
};

const FormWithRedux = reduxForm({
  form: 'newUser',
  enableReinitialize: true,
})(UserRegisterForm);

export default connect(
  (state, { user }) => {
    let initialValues = {};
    if (user.id !== undefined) {
      initialValues = { ...user };
      delete initialValues.password;
    }
    // console.log(initialValues);
    return ({
      image: selectors.getImage(state),
      submitted: selectors.getUserSubmissionStatus(state),
      initialValues,
    });
  },
  (dispatch, { user }) => ({
    onSubmit(formValues, disp, props) {
      const {
        username, password, email, firstName, lastName, age, phone,
      } = formValues;
      const img = props.image;
      if (user.id === undefined) {
        dispatch(actions.createUser(
          uuid(),
          username,
          password,
          firstName,
          lastName,
          email,
          age,
          phone,
          img,
        ));
      } else {
        dispatch(actions.updateUser(
          user.id,
          username,
          password,
          firstName,
          lastName,
          email,
          age,
          phone,
          user.rating,
          img,
          user.img,
        ));
      }
    },
  }),
)(FormWithRedux);
