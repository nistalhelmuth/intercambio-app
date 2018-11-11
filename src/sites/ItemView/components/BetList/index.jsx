import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/interface';
import './styles.css';

import Bet from '../Bet';

const BetList = ({
  offers,
  showBetCreator,
}) => (
  <div className="betList">
    {
      offers.map(offer => (
        (offer !== undefined
          ? (
            <Bet
              userId={offer.userId}
              itemIds={offer.offeredObjects}
              key={offer.id}
            />       
          ) : (
            <div />
          ))
      ))
    }
    <button
      type="button"
      onClick={showBetCreator}
    >
      {'create'}
    </button>
  </div>
);

BetList.propTypes = {
  offers: PropTypes.arrayOf(Object).isRequired,
  showBetCreator: PropTypes.func.isRequired,
};

export default connect(
  (state, { itemID }) => ({
    offers: selectors.getOffersByObject(state, itemID),
  }),
  dispatch => ({
    showBetCreator() {
      dispatch(actions.switchBetCreator());
    },
  }),
)(BetList);
