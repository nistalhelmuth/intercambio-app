import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as actions from '../../../../actions/interface';
import SelectItem from '../SelectItem';
import './styles.css';

const BetCreator = ({
  ids,
  showBetCreator,
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
      onClick={showBetCreator}
    >
      {'cancel'}
    </button>
  </div>
);

BetCreator.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
  showBetCreator: PropTypes.func.isRequired,
};

export default connect(
  (state, { loggedUser }) => ({
    ids: selectors.getBeloingsByUser(state, loggedUser),
  }),
  dispatch => ({
    showBetCreator() {
      dispatch(actions.switchBetCreator());
    },
  }),
)(BetCreator);
