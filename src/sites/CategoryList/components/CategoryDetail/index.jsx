import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Post from '../Post';
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/posts';

import './styles.css';


class CategoryDetail extends Component {
  componentWillMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { ids } = this.props;
    return (
      <div className="category-detail">
        {
          ids.map(id => (
            id !== undefined
              ? (<Post id={id} key={id} />) : (<div />)
          ))
        }
      </div>
    );
  }
}

CategoryDetail.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    ids: selectors.getPostsIds(state),
  }),
  (dispatch, { id }) => ({
    getPosts() {
      dispatch(actions.fetchPosts(id));
    },
  }),
)(CategoryDetail);
