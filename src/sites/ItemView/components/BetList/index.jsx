import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as interfaceActions from '../../../../actions/interface';
import * as offerActions from '../../../../actions/offers';
import './styles.css';

import Bet from '../Bet';

class BetList extends Component {
  componentWillMount() {
    const { fetchOffers } = this.props;
    fetchOffers();
  }

  render() {
    const {
      offers,
      showBetCreator,
    } = this.props;
    return (
      <div className="betList">
        {
          offers.map(offer => (
            (offer !== undefined
              ? (
                <Bet
                  userInfo={offer.offeredBy}
                  offerId={offer.id}
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
  }
}

BetList.propTypes = {
  offers: PropTypes.arrayOf(Number).isRequired,
  showBetCreator: PropTypes.func.isRequired,
  fetchOffers: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    offers: selectors.getOffers(state),
  }),
  (dispatch, { postId }) => ({
    showBetCreator() {
      dispatch(interfaceActions.switchBetCreator());
    },
    fetchOffers() {
      dispatch(offerActions.fetchOffers(postId));
    },
  }),
)(BetList);
