import React from 'react';
import uuid from 'uuid-v4';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import TextInput from '../../../SharedComponents/TextInput';
import TextAreaInput from '../../../SharedComponents/TextAreaInput';
import Upload from '../../../SharedComponents/Upload';
import * as beloginActions from '../../../../actions/belongings';
import * as selectors from '../../../../reducers';

import './styles.css';

const DummyItemForm = ({
  onSubmit,
  formValues,
  image,
}) => (
  <div className="item-form">
    <form className="form">
      <h3>
        {'Crea un nuevo objeto'}
      </h3>
      <Field
        name="archivos"
        component={Upload}
      />
      <Field
        name="name"
        type="text"
        label="Ingresa el nombre del objeto"
        component={TextInput}
        placeholder="Nombre"
      />
      <Field
        name="description"
        component={TextAreaInput}
        label="Describe el objeto"
        placeholder="¿Cuál es la historia del objeto?"
      />
      <Field
        name="category"
        type="text"
        label="Ingresa la categoría que pertenece"
        component={TextInput}
        placeholder="Mascotas, libros, electrónicos, etc."
      />
      <label>
        {'Selecciona el estado'}
      </label>
      <Field
        name="quality"
        component="select"
      >
        <option>...</option>
        <option value="excelent">Excelente</option>
        <option value="good">Bueno</option>
        <option value="regular">Normal</option>
        <option value="bad">Malo</option>
        <option value="awfull">Terrible</option>
      </Field>
      <button
        type="button"
        className="create-button"
        onClick={() => onSubmit(formValues, image)}
      >
        {'Crear objeto'}
      </button>
    </form>
  </div>
);

DummyItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

const formSelector = formValueSelector('newItem');

const ItemForm = connect(
  state => ({
    formValues: {
      user: selectors.getLoggedUser(state),
      name: formSelector(state, 'name'),
      description: formSelector(state, 'description'),
      category: formSelector(state, 'category'),
      quality: formSelector(state, 'quality'),
    },
    image: selectors.getImage(state),
  }),
  dispatch => ({
    onSubmit(state, image) {
      dispatch(beloginActions.createBelonging(
        uuid(),
        state.formValues.name,
        state.formValues.description,
        state.formValues.category,
        state.formValues.quality,
        state.user,
        image,
      ));
    },
  }),
)(DummyItemForm);

export default reduxForm({
  form: 'newItem',
})(ItemForm);
