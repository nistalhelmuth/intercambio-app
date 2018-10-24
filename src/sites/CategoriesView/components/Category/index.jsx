import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';

const Category = ({
  name,
}) => (
  <div className="category">
    <h4>{name}</h4>
  </div>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getCategory(state, id),
  }),
  undefined,
)(Category);
