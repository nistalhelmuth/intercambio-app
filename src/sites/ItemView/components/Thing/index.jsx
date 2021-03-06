import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/posts';

import './styles.css';

class Thing extends Component {
  componentWillMount() {
    const { getPost } = this.props;
    getPost();
  }

  render() {
    const {
      title,
      description,
      img,
    } = this.props;
    return (
      <div className="thing">
        <h2>
          {title}
        </h2>
        <img src={img} className="thing-picture" alt="thingPicture" />
        <p>
          {description}
        </p>
      </div>
    );
  }
}

Thing.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  getPost: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    ...selectors.getSelectedPost(state),
  }),
  (dispatch, { id }) => ({
    getPost() {
      dispatch(actions.fetchPost(id));
    },
  }),
)(Thing);
