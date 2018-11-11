import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as categoryActions from '../../../../actions/categories';

import './styles.css';

class CategoryFinder extends Component {
  componentWillMount() {
    const { fetchAllCategories } = this.props;
    fetchAllCategories();
  }

  render() {
    const { filterCategories } = this.props;
    return (
      <div className="category-finder">
        <h2>
          {'Busca una categoria:'}
        </h2>
        <div className="inputs">
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
