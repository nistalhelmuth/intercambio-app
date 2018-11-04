import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../SharedComponents/TextInput';
import * as BeloginActions from '../../../../actions/belongings';

import './styles.css';

const ItemForm = ({
  handleInput,
}) => (
  <div className="item-form">
    <form onSubmit={handleInput} className="form">
      <h3>
        {'Crea un nuevo objeto'}
      </h3>
      <img
        src="/logo.jpg"
        alt="logo"
      />
      <Field
        name="name"
        type="text"
        component={TextInput}
        label="nombre"
      />
      <Field
        name="description"
        type="text"
        component={TextInput}
        label="descripción"
      />
      <Field
        name="category"
        type="text"
        component={TextInput}
        label="categoría"
      />
      <Field
        name="state"
        component="select"
        label="estado"
      >
        <option>selecciona el estado...</option>
        <option value="excelent">excelente</option>
        <option value="good">bueno</option>
        <option value="regular">normal</option>
        <option value="bad">malo</option>
        <option value="awfull">terrible</option>
      </Field>
      <button
        type="submit"
      >
        {'Crear objeto'}
      </button>
    </form>
  </div>
);

ItemForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'authValidation',
  onSubmit(values, dispatch) {
    dispatch(BeloginActions.createBelonging(
      values.name,
      values.description,
      values.category,
      values.state,
      1,
    ));
  },
  validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    return errors;
  },
})(ItemForm);
