import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';

import './styles.css';

import Item from '../../../SharedComponents/Item';

const CategoryDetail = ({
  ids,
}) => (
  <div className="category-detail">
    {
      ids.map(id => (
        id !== undefined
          ? (<Item id={id} key={id} />) : (<div />)
      ))
    }
  </div>
);

CategoryDetail.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
};

export default connect(
  (state, { id }) => ({
    ids: selectors.getBeloingsByCategory(state, id),
  }),
  undefined,
)(CategoryDetail);
