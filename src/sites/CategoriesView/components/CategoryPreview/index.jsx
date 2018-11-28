import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/interface';
import Category from '../Category';

import './styles.css';

const CategoryPreview = ({
  ids,
  resetSubmittedStatus
}) => (
  <div className="category-list" id="style">
    {
      ids.map(id => (
        <Category id={id} key={id} />
      ))
    }
    {resetSubmittedStatus()}
  </div>
);

CategoryPreview.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
  resetSubmittedStatus: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    ids: selectors.getCategoryIds(state),
  }),
  dispatch => ({
    resetSubmittedStatus() {
      dispatch(actions.resetSubmittedStatus());
    },
  }),
)(CategoryPreview);
