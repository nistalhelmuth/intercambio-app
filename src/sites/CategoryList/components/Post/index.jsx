import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';

import './styles.css';

const Post = ({
  id,
  postInfo,
}) => (
  <Link
    to={`/posts/${postInfo.postedBy}/${postInfo.id}`}
    style={{ textDecoration: 'none', color: 'black' }}
  >
    <div className="post-card">
      <img src={postInfo.img} alt="post" />
      <h4>{postInfo.title}</h4>
      <p>{postInfo.date}</p>
    </div>
  </Link>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  postInfo: PropTypes.object.isRequired,
};

export default connect(
  (state, { id }) => ({
    postInfo: {
      ...selectors.getPost(state, id),
    },
  }),
  undefined,
)(Post);
