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

const UserRegisterForm = ({
  handleSubmit,
  submitted,
}) => (
  <div className="user-form">
    {
      submitted
        ? <Redirect to="/" />
        : ''
    }
    <form className="form" onSubmit={handleSubmit}>
      <Field
        type="text"
        name="username"
        component={TextInput}
        placeholder="Nombre de Usuario"
      />
      <Field
        type="password"
        name="password"
        component={TextInput}
        placeholder="Contraseña"
      />
      <Field
        type="text"
        name="email"
        component={TextInput}
        placeholder="Correo Electrónico"
      />
      <Field
        type="text"
        name="firstName"
        component={TextInput}
        placeholder="Nombre"
      />
      <Field
        type="text"
        name="lastName"
        component={TextInput}
        placeholder="Apellido"
      />
      <Field
        type="text"
        name="age"
        component={TextInput}
        placeholder="Edad"
      />
      <Field
        type="text"
        name="phone"
        component={TextInput}
        placeholder="Teléfono"
      />
      <Field
        name="image"
        component={Upload}
      />
      <button type="submit">Crear Usuario</button>
    </form>
  </div>
);

UserRegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
};

const FormWithRedux = reduxForm({
  form: 'newUser',
})(UserRegisterForm);

export default connect(
  state => ({
    image: selectors.getImage(state),
    submitted: selectors.getUserSubmissionStatus(state),
  }),
  () => ({
    onSubmit(formValues, dispatch, props) {
      const {
        username, password, email, firstName, lastName, age, phone,
      } = formValues;
      const img = props.image;
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
    },
  }),
)(FormWithRedux);
