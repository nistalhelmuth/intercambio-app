import React, { Component } from 'react';
import uuid from 'uuid-v4';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import TextInput from '../../../SharedComponents/TextInput';
import TextAreaInput from '../../../SharedComponents/TextAreaInput';
import SelectInput from '../../../SharedComponents/SelectInput';
import Upload from '../../../SharedComponents/Upload';
import * as actions from '../../../../actions/belongings';
import * as categoryActions from '../../../../actions/categories';
import * as selectors from '../../../../reducers';

import './styles.css';

const required = value => (value ? undefined : 'Obligatorio');
const stateValues = [4, 3, 2, 1, 0];
const stateDisplayValues = ['Excelente', 'Bueno', 'Normal', 'Malo', 'Terrible'];

class DummyItemForm extends Component {
  componentWillMount() {
    const { fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  render() {
    const {
      handleSubmit,
      categories,
      categoryIds,
      user,
      submitted,
    } = this.props;
    return (
      <div className="item-form">
        {
          submitted
            ? <Redirect to={`/users/${user.id}`} />
            : ''
        }
        <form className="form" onSubmit={handleSubmit}>
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
            validate={required}
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
            label="Ingresa la categoría que pertenece"
            component={SelectInput}
            valueList={categoryIds}
            displayList={categories.map(cat => (
              cat.name
            ))}
          />
          <Field
            name="quality"
            label="Selecciona el estado"
            component={SelectInput}
            valueList={stateValues}
            displayList={stateDisplayValues}
          />
          <button
            type="submit"
            className="create-button"
          >
            {'Crear objeto'}
          </button>
        </form>
      </div>
    );
  }
}

DummyItemForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fetchAllCategories: PropTypes.func.isRequired,
  categories: PropTypes.array,
  categoryIds: PropTypes.array,
  submitted: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

DummyItemForm.defaultProps = {
  categories: {},
  categoryIds: [],
};

const ItemForm = reduxForm({
  form: 'newItem',
})(DummyItemForm);

export default connect(
  state => ({
    user: selectors.getLoggedUser(state),
    image: selectors.getImage(state),
    categories: selectors.getCategories(state),
    categoryIds: selectors.getCategoryIds(state),
    submitted: selectors.getSubmittedStatus(state),
  }),
  dispatch => ({
    onSubmit(formValues, disp, props) {
      if (
        formValues.name
        && formValues.description
        && formValues.category
        && formValues.quality
      ) {
        dispatch(actions.createBelonging(
          uuid(),
          formValues.name,
          formValues.description,
          formValues.category,
          formValues.quality,
          props.user.id,
          props.image,
        ));
      } else {
        console.log('faltan valores');
      }
    },
    fetchAllCategories() {
      dispatch(categoryActions.fetchCategories());
    },
  }),
)(ItemForm);
