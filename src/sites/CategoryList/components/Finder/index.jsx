import React from 'react';

import { connect } from 'react-redux';
import { createMatchSelector } from 'connected-react-router';
import * as selectors from '../../../../reducers';


import './styles.css';

const Finder = ({
  name,
}) => (
  <div className="finder">
    <h1>
      {name}
    </h1>
    <div className="inputs">
      <input />
      <input />
      <input />
      <button type="button">
        {'buscar'}
      </button>
    </div>
  </div>
);


export default connect(
  (state, { id }) => ({
    ...selectors.getCategory(state, id),
  }),
  undefined,
)(Finder);
