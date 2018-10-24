import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import * as actions from '../../actions/categories';

class CategoriesView extends Component {
  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    return (
      <div className="categories-view">
        <div className="header">
          <Link to="/">Hacer Post</Link>
          <Link to="/">Perfil</Link>
        </div>
        <CategoryList />
      </div>
    );
  }
}

CategoriesView.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  dispatch => ({
    fetchCategories() {
      dispatch(actions.fetchCategories());
    },
  }),
)(CategoriesView);
