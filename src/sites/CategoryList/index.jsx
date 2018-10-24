import React, { Component } from 'react';

import Finder from './components/Finder';
import Category from './components/Category';

import './styles.css';

class CategoryList extends Component {
  render() {
    return (
      <div className="categoryList">        
        <Finder/>
        <Category/>
      </div>
    );
  }
}

export default CategoryList;
