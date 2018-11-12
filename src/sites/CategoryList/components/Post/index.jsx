import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';

import './styles.css';

const Post = ({
  id,
  title,
  date,
  img,
}) => (
  <Link
    to={`/posts/${id}`}
    style={{ textDecoration: 'none', color: 'black' }}
  >
    <div className="post-card">
      <img src={img} alt="post" />
      <h4>{title}</h4>
      <p>{date}</p>
    </div>
  </Link>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getPost(state, id),
  }),
  undefined,
)(Post);
