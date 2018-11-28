import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import uuid from 'uuid-v4';
import TextInput from '../../../SharedComponents/TextInput';
import TextAreaInput from '../../../SharedComponents/TextAreaInput';
import SelectInput from '../../../SharedComponents/SelectInput';
import * as belongingActions from '../../../../actions/belongings';
import * as postActions from '../../../../actions/posts';
import * as selectors from '../../../../reducers';

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
    } = this.props;
    return (
      <div className="post-form">
        <form className="form" onSubmit={handleSubmit}>
          <h3>
            {'Publica algo!'}
          </h3>
          <Field
            name="title"
            type="text"
            label="Ingresa el título de la publicación"
            componente={TextInput}
            validate={required}
          />
          <Field
            name="description"
            component={TextAreaInput}
            label="Describe los motivos de tu publicación"
            placeholder="¿Cuál es el próposito de esta publicación?"
          />
          <Field
            name="offeredItem"
            label="Selecciona el objeto que quieres ofrecer"
            component={SelectInput}
            valueList={belongings.map(bel => (bel.id))}
            displayList={belongings.map(bel => (bel.name))}
          />
        </form>
      </div>
    );
  }
}

DummyPostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fetchBelongings: PropTypes.func.isRequired,
  belongings: PropTypes.array,
};

DummyPostForm.defaultProps = {
  belongings: [],
};

const PostForm = reduxForm({
  form: 'newPost',
})(DummyPostForm);

export default connect(
  state => ({
    belongings: selectors.getBelongings(state),
  }),
  (dispatch, { id }) => ({
    fetchBelongings() {
      dispatch(belongingActions.fetchBelongings(id));
    },
    onSubmit(formValues, disp, props) {
      dispatch(postActions.createPost(
        uuid(),
        formValues.title,
        formValues.description,
        id,
        props.belongings[formValues.offeredItem].id,
        props.belongings[formValues.offeredItem].category,
      ));
    },
  }),
)(PostForm);
