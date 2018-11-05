import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';

const Category = ({
  id,
  name,
}) => (
  <div className="category">
    <Link to={`/categories/${id}`}>
      <h4>{name}</h4>
    </Link>
  </div>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getCategory(state, id),
  }),
  undefined,
)(Category);
