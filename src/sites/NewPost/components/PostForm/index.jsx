import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid-v4';
import TextInput from '../../../SharedComponents/TextInput';
import TextAreaInput from '../../../SharedComponents/TextAreaInput';
import SelectInput from '../../../SharedComponents/SelectInput';
import * as belongingActions from '../../../../actions/belongings';
import * as postActions from '../../../../actions/posts';
import * as selectors from '../../../../reducers';

import './styles.css';

const required = value => (value ? undefined : 'Obligatorio');

class DummyPostForm extends Component {
  componentWillMount() {
    const { fetchBelongings } = this.props;
    fetchBelongings();
  }

  render() {
    const {
      handleSubmit,
      belongings,
      image,
      submitted,
    } = this.props;
    return (
      <div className="post-form">
        {
          submitted
            ? <Redirect to="/categories/" />
            : ''
        }
        <form className="form" onSubmit={handleSubmit}>
          <h3>
            {'Publica algo!'}
          </h3>
          <Field
            name="title"
            type="text"
            label="Ingresa el titulo de la publicacion"
            component={TextInput}
            validate={required}
            placeholder="titulo"
          />
          <Field
            name="description"
            component={TextAreaInput}
            label="Describe los motivos de tu publicación"
            validate={required}
            placeholder="¿Por qué te quieres deshacer de este objeto?"
          />
          <Field
            name="offeredItem"
            label="Selecciona el objeto que quieres ofrecer"
            validate={required}
            component={SelectInput}
            valueList={belongings.map(bel => (bel.id))}
            displayList={belongings.map(bel => (bel.name))}
          />
          <img src={image} alt="offeredItem" />
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

DummyPostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fetchBelongings: PropTypes.func.isRequired,
  belongings: PropTypes.array,
  image: PropTypes.string,
  submitted: PropTypes.bool.isRequired,
};

DummyPostForm.defaultProps = {
  belongings: [],
  image: '/default.png',
};

const PostForm = reduxForm({
  form: 'newPost',
})(DummyPostForm);

export default connect(
  (state) => {
    const id = formValueSelector('newPost')(state, 'offeredItem');
    let image = '/default.png';
    let selectedBelonging = null;
    try {
      selectedBelonging = selectors.getBelonging(state, id);
      image = selectedBelonging.img;
    } catch (e) {
      image = '/default.png';
    }
    return ({
      belongings: selectors.getBelongings(state),
      image,
      selectedBelonging,
      submitted: selectors.getSubmittedStatus(state),
    });
  },
  (dispatch, { id }) => ({
    fetchBelongings() {
      dispatch(belongingActions.fetchBelongings(id));
    },
    onSubmit(formValues, disp, props) {
      dispatch(postActions.createPost(
        uuid(),
        formValues.title,
        formValues.description,
        props.image,
        id,
        formValues.offeredItem,
        props.selectedBelonging.category,
      ));
    },
  }),
)(PostForm);
