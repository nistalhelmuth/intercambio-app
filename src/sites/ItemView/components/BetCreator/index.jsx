import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as interfaceActions from '../../../../actions/interface';
import * as offersActions from '../../../../actions/offers';
import SelectItem from '../SelectItem';
import './styles.css';

const BetCreator = ({
  ids,
  showBetCreator,
  createOffer,
}) => (
  <div className="bet-creator">
    <h2>
      {"Publica una oferta (selecciona tus objetos)"}
    </h2>
    <div className="all-things">
      {
        ids.map(id => (
          <SelectItem id={id} key={id} />
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
      onClick={createOffer}
    >
      {'Create'}
    </button>
  </div>
);

BetCreator.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
  showBetCreator: PropTypes.func.isRequired,
  createOffer: PropTypes.func.isRequired,
};

export default connect(
  (state, { loggedUser }) => ({
    ids: selectors.getBeloingsByUser(state, loggedUser),
  }),
  dispatch => ({
    showBetCreator() {
      dispatch(interfaceActions.switchBetCreator());
    },
    createOffer() {
      dispatch(interfaceActions.switchBetCreator());
      // dispatch(offersActions.createOffer(id, offeredObject, offeredIn));
    },
  }),
)(BetCreator);
