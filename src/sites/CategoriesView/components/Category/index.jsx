import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';
import './styles.css';

const Category = ({
  id,
  name,
  img,
}) => (
  <div className="offset">
    <Link
      to={`/categories/${id}`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <div className="category">
        <img src={img} alt="default" />
        <h4>{name}</h4>
      </div>
    </Link>
  </div>
);

Category.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getCategory(state, id),
  }),
  undefined,
)(Category);
