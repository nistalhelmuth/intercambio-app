import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../reducers';
import * as actions from '../../../actions/belongings';

import Stars from '../Stars';

import './styles.css';

const Item = ({
  name,
  state,
  img,
  deletable,
  deleteItem,
}) => (
  <div className="card">
    {deletable
      && (
        <button
          type="button"
          onClick={deleteItem}
          className="delete-icon"
        >
          <img
            src="/tools/deleteIcon.png"
            alt="delete"
          />
        </button>
      )
    }
    <div className="item-card">
      <img src={img || '/default.png'} alt="icon" className="card-image" />
      <p>
        {name}
      </p>
      <Stars num={state} />
    </div>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
  img: PropTypes.object,
  deleteItem: PropTypes.func.isRequired,
  deletable: PropTypes.bool.isRequired,
};

Item.defaultProps = {
  img: undefined,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getBelonging(state, id),
  }),
  (dispatch, { id }) => ({
    deleteItem() {
      dispatch(actions.deleteBelonging(id));
    },
  }),
)(Item);
