import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as belonginsActions from '../../../../actions/belongings';

import Stars from '../../../SharedComponents/Stars';

import './styles.css';

const Item = ({
  belonging,
  selectBelongin,
}) => (
  <button type="button" className="button-item" onClick={selectBelongin}>
    {belonging.selected && <img src="/tools/checkmark.png" alt="check" className="check" />}
    <div className="button-content">
      <img className="picture" src={belonging.img} alt="icon" />
      <p>
        {belonging.name}
      </p>
      <Stars num={0} />
    </div>
  </button>
);

Item.propTypes = {
  belonging: PropTypes.object.isRequired,
  selectBelongin: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  (dispatch, { belonging }) => ({
    selectBelongin() {
      dispatch(belonginsActions.belonginSelected(belonging.id));
    },
  }),
)(Item);
