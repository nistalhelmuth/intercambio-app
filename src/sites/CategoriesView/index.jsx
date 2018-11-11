import React from 'react';
import Header from '../SharedComponents/Header';
import CategoryPreview from './components/CategoryPreview';
import CategoryFinder from './components/CategoryFinder';


import './styles.css';


const CategoriesView = () => (
  <div className="categories-view">
    <Header />
    <CategoryFinder />
    <CategoryPreview />
  </div>
);

export default CategoriesView;
