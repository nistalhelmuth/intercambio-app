import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/offers';
import './styles.css';

const Bet = ({
  belongings,
  userInfo,
  self,
  deleteOffer,
}) => (
  <div className="offer-card">
    {self
    && (
      <button
        type="button"
        onClick={deleteOffer}
        className="delete-icon"
      >
        <img
          src="/tools/deleteIcon.png"
          alt="delete"
        />
      </button>
    )
    }
    <div className="bet">
      <div className="user-preview">
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to={`/users/${userInfo.id}`}
        >
          <img src={userInfo.img || '/defaultPicture.png' } alt="betPicture" />
        </Link>
        <div className="order">
          <p>
            {`${userInfo.firstName} ${userInfo.lastName}`}
          </p>
          <hr />
        </div>
      </div>
      <div className="betItems">
        {
          belongings.map(belonging => (
            belonging ? (
              <img src={belonging.img} alt="object" />
            ) : (
              <img src="/default.png" alt="default" />
            )
          ))
        }
      </div>
    </div>
  </div>
);

Bet.propTypes = {
  belongings: PropTypes.arrayOf(Number).isRequired,
  userInfo: PropTypes.object.isRequired,
  self: PropTypes.bool.isRequired,
  deleteOffer: PropTypes.func.isRequired,
};

export default connect(
  (state, { offerId, userInfo }) => ({
    belongings: selectors.getBelongingsPerOffer(state, offerId),
    self: parseInt(userInfo.id, 10) === selectors.getLoggedUser(state).id,
  }),
  (dispatch, { offerId }) => ({
    deleteOffer() {
      dispatch(actions.deleteOffer(offerId));
    },
  }),
)(Bet);
