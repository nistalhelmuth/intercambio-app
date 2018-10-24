import React, { Component } from 'react';

import './styles.css';

import ItemPreview from '../ItemPreview';

class Category extends Component {
  render() {
    return (
      <div className="category">        
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
        <ItemPreview/>
      </div>
    );
  }
}

export default Category;