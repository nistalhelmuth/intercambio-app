import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../../../../reducers';
import * as belongingsActions from '../../../../actions/belongings';
import './styles.css';

class Bet extends Component {
  componentWillMount() {
    const { fetchBelongings } = this.props;
    fetchBelongings();
  }

  render() {
    const {
      belongings,
      userInfo,
    } = this.props;
    return (
      <div className="bet">
        <div className="user-preview">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={`/users/${userInfo.id}`}
          >
            <img src={userInfo.img} alt="betPicture" />
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
              <img src={belonging.img} alt="object" />
            ))
          }
        </div>
      </div>
    );
  }
}

Bet.propTypes = {
  belongings: PropTypes.arrayOf(Number).isRequired,
  userInfo: PropTypes.object.isRequired,
  fetchBelongings: PropTypes.func.isRequired,
};

export default connect(
  (state, { offerId }) => ({
    belongings: selectors.getBelongingsPerOffer(state, offerId),
  }),
  (dispatch, { offerId }) => ({
    fetchBelongings() {
      dispatch(belongingsActions.fetchBelongingsPerOffer(offerId));
    },
  }),
)(Bet);
