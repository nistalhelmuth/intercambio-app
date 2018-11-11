import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import Category from '../Category';

import './styles.css';

const CategoryPreview = ({
  ids,
}) => (
  <div className="category-list">
    {
      ids.map(id => (
        <Category id={id} key={id} />
      ))
    }
  </div>
);

CategoryPreview.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
};

export default connect(
  state => ({
    ids: selectors.getCategoryIds(state),
  }),
  undefined,
)(CategoryPreview);
