import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../SharedComponents/TextInput';
import * as BeloginActions from '../../../../actions/belongings';

import './styles.css';

const ItemForm = ({
  onSubmit,
}) => (
  <div className="item-form">
    <form onSubmit={onSubmit} className="form">
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
        className="text-input"
        label="Ingresa el nombre del objeto"
      />
      <label>
        {'Ingresa una breve descripcion'}
      </label>
      <Field
        name="description"
        component="textarea"
        className="textarea-input"
        maxlength="200"
      />
      <label>
        {'Ingresa la categoría que pertenece'}
      </label>
      <Field
        name="category"
        type="text"
        component={TextInput}
      />
      <label>
        {'Selecciona el estado'}
      </label>
      <Field
        name="state"
        component="select"
      >
        <option>...</option>
        <option value="excelent">excelente</option>
        <option value="good">bueno</option>
        <option value="regular">normal</option>
        <option value="bad">malo</option>
        <option value="awfull">terrible</option>
      </Field>
      <button
        type="submit"
        className="create-button"
      >
        {'Crear objeto'}
      </button>
    </form>
  </div>
);

ItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'authValidation',
  onSubmit(values, dispatch) {
    dispatch(BeloginActions.createBelonging(
      values.name,
      values.description,
      values.category,
      values.state,
      1, //poner el ide del usuario
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
