import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import Category from '../Category';

const CategoryList = ({
  ids,
}) => (
  <div className="category-list">
    {
      ids.map(id => (
        <Category id={id} />
      ))
    }
  </div>
);

CategoryList.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
};

export default connect(
  state => ({
    ids: selectors.getCategoryIds(state),
  }),
  undefined,
)(CategoryList);
