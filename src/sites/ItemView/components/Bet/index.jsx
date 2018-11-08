import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import './styles.css';

const Bet = ({
  offers,
  userInfo,
}) => (
  <div className="bet">
    <div className="user">
      <img src={userInfo.img} alt="betPicture" />
      <div className="order">
        <p>
          {`${userInfo.firstName} ${userInfo.firstName}`}
        </p>
        <hr />
      </div>
    </div>
    <div className="betItems">
      {
        offers.map(offer => (
          <img src={offer.img} alt="object" />
        ))
      }
    </div>
    <hr />
  </div>
);

Bet.propTypes = {
  offers: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
};

export default connect(
  (state, { userId, itemIds }) => ({
    offers: itemIds.map(id => (selectors.getBelonging(state, id))),
    userInfo: { ...selectors.getUser(state, userId) },
  }),
  undefined,
)(Bet);
