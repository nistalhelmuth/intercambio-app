import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Finder from './components/Finder';
import CategoryDetail from './components/CategoryDetail';
import * as categoriesActions from '../../actions/categories';

import './styles.css';

class CategoryList extends Component {
  componentWillMount() {
    categoriesActions.fetchCategories();
  }

  render() {
    const { match: { params } } = this.props;
    return (
      <div className="categoryList">
        <Finder id={params.categoryID} />
        <CategoryDetail id={params.categoryID} />
      </div>
    );
  }
}

CategoryList.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CategoryList;
