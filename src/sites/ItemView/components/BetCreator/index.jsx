import React, { Component } from 'react';
import uuid from 'uuid-v4';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as interfaceActions from '../../../../actions/interface';
import * as offersActions from '../../../../actions/offers';
import * as belongingsActions from '../../../../actions/belongings';
import SelectItem from '../SelectItem';
import './styles.css';

class BetCreator extends Component {
  componentWillMount() {
    const { fetchBelongings } = this.props;
    fetchBelongings();
  }

  render() {
    const {
      belongings,
      showBetCreator,
      createOffer,
      offeredObjects,
    } = this.props;
    return (
      <div className="bet-creator">
        <h2>
          {'Publica una oferta (selecciona tus objetos)'}
        </h2>
        <div className="all-things">
          {
            belongings.map(belonging => (
              <SelectItem belonging={belonging} key={belonging.id} />
            ))
          }
        </div>
        <button
          type="button"
          className="courner-left-button"
          onClick={showBetCreator}
        >
          {'Cancel'}
        </button>
        <button
          type="button"
          className="courner-right-button"
          onClick={() => createOffer(offeredObjects)}
        >
          {'Create'}
        </button>
      </div>
    );
  }
}

BetCreator.propTypes = {
  belongings: PropTypes.arrayOf(Number).isRequired,
  offeredObjects: PropTypes.arrayOf(Number).isRequired,
  showBetCreator: PropTypes.func.isRequired,
  createOffer: PropTypes.func.isRequired,
  fetchBelongings: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    belongings: selectors.getBelongings(state),
    offeredObjects: selectors.getSelectedBelongings(state),
  }),
  (dispatch, { loggedUser, postId }) => ({
    showBetCreator() {
      dispatch(interfaceActions.switchBetCreator());
    },
    createOffer(offeredObjects) {
      console.log(loggedUser, postId);
      dispatch(offersActions.createOffer(
        uuid(),
        loggedUser,
        offeredObjects,
        postId,
      ));
    },
    fetchBelongings() {
      dispatch(belongingsActions.fetchBelongings(loggedUser));
    },
  }),
)(BetCreator);
