import React from 'react';
import CategoryPreview from './components/CategoryPreview';
import CategoryFinder from './components/CategoryFinder';


import './styles.css';


const CategoriesView = () => (
  <div className="categories-view">
    <CategoryFinder />
    <CategoryPreview />
  </div>
);

export default CategoriesView;
