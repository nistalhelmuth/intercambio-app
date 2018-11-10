import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';
import './styles.css';

const Category = ({
  id,
  name,
}) => (
  <Link to={`/categories/${id}`}>
    <div className="category">
      <img src="default.png" alt="default" />
      <h4>{name}</h4>
    </div>
  </Link>
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
