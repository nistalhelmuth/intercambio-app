import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import './styles.css';

import Bet from '../Bet';

const BetList = ({
  offers,
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
  </div>
);

BetList.propType = {
  offers: PropTypes.arrayOf(Object).isRequired,
};

export default connect(
  (state, { itemID }) => ({
    offers: selectors.getOffersByObject(state, itemID),
  }),
  undefined,
)(BetList);
