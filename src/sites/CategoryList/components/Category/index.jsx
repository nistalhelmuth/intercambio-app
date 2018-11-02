import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';

import './styles.css';

import ItemPreview from '../ItemPreview';

const Category = ({
  ids,
}) => (
  <div className="category">    
    {
      ids.map(id => (
        <ItemPreview id={id} key={id}/>
      ))
    }
  </div>
);

export default connect(
  (state, {id}) => ({
    ids: selectors.getBeloingsByCategory(state,id),
  }),
  undefined,
)(Category);