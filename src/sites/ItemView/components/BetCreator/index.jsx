import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import Item from '../../../SharedComponents/Item';
import './styles.css';

const BetCreator = ({
  ids,
}) => (
  <div className="bet-creator">
    <p>
      {"things"}
    </p>
    <div className="all-things">
      {
        ids.map(id => (
          <Item id={id} key={id} />
        ))
      }
    </div>
    <button
      type="button"
    >
      {'create'}
    </button>
  </div>
);

BetCreator.propType = {
  ids: PropTypes.arrayOf(Number).isRequired,
};

export default connect(
  (state, { id }) => ({
    ids: selectors.getBeloingsByUser(state, id),
  }),
  undefined,
)(BetCreator);
