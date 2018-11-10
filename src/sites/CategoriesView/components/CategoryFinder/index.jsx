import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as categoryActions from '../../../../actions/categories';

import './styles.css';

class CategoryFinder extends Component {
  componentWillMount() {
    const { fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  render() {
    const { filterCategories } = this.props;
    const userId = 0;
    return (
      <div className="category-finder">
        <div className="header">
          <Link to="/newPost">Crear Post</Link>
          <h1>
            {'Busca una categoria:'}
          </h1>
          <Link to={`/users/${userId}`}>Perfil</Link>
        </div>
        <div className="inputs">
          <input />
          <input />
          <input />
          <button
            type="button"
            onClick={filterCategories}
          >
            {'buscar'}
          </button>
        </div>
      </div>
    );
  }
}

CategoryFinder.propTypes = {
  fetchAllCategories: PropTypes.func.isRequired,
  filterCategories: PropTypes.func.isRequired,
};


export default connect(
  undefined,
  dispatch => ({
    fetchAllCategories() {
      dispatch(categoryActions.fetchCategories());
    },
    filterCategories() {
      // dispatch(categoryActions.filterCategories());
    },
  }),
)(CategoryFinder);
