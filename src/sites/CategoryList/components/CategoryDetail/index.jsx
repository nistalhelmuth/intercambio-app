import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/posts';

import './styles.css';

import Item from '../../../SharedComponents/Item';

class CategoryDetail extends Component {
  componentWillLoad() {
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
              ? (<Item id={id} key={id} />) : (<div />)
          ))
        }
      </div>
    );
  }
}

CategoryDetail.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
};

export default connect(
  (state) => ({
    ids: selectors.getPosts(state),
  }),
  (dispatch, {id}) => ({
    getPosts() {
      actions.fetchPosts('category', id);
    }
  })
)(CategoryDetail);
