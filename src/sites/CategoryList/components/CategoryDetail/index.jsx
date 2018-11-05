import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';

import './styles.css';

import ItemPreview from '../ItemPreview';

const CategoryDetail = ({
  ids,
}) => (
  <div className="category">
    {
      ids.map(id => (
        id && <ItemPreview id={id} key={id} />
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
