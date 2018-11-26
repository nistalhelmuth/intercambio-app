import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '../../../../reducers';
import Stars from '../../../SharedComponents/Stars';
import * as actions from '../../../../actions/posts';

import './styles.css';

class Thing extends Component {
  componentWillMount() {
    const { getPosts, id } = this.props;
    getPosts();
    console.log(id);
  }

  render() {
    const {
      title,
      description,
      usedState,
      img,
    } = this.props;
    return (
      <div className="thing">
        <h2>
          {title}
        </h2>
        <img src={img} className="thing-picture" alt="thingPicture" />
        <Stars num={usedState} />
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
  usedState: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    ...selectors.getSelectedPost(state),
  }),
  (dispatch, { id }) => ({
    getPosts() {
      dispatch(actions.fetchPost(id));
    },
  }),
)(Thing);
