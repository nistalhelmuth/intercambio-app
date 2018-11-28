import React from 'react';
import PropTypes from 'prop-types';
import Header from '../SharedComponents/Header';
import PostForm from './components/PostForm';

const NewPost = ({
  match: { params },
}) => (
  <div className="new-post">
    <Header />
    <PostForm id={params.userId} />
  </div>
);

NewPost.propTypes = {
  match: PropTypes.object.isRequired,
};

export default NewPost;
