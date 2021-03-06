import React from 'react';
import { PropTypes } from 'prop-types';
import ItemFinder from './components/ItemFinder';
import CategoryDetail from './components/CategoryDetail';
import Header from '../SharedComponents/Header';
import './styles.css';

const CategoryList = ({ match: { params } }) => (
  <div className="categoryList">
    <Header />
    <ItemFinder id={params.categoryId} />
    <CategoryDetail id={params.categoryId} />
  </div>
);


CategoryList.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CategoryList;
