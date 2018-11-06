import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

Finder.propTypes = {
  name: PropTypes.string.isRequired,
};


export default connect(
  (state, { id }) => ({
    ...selectors.getCategory(state, id),
  }),
  undefined,
)(Finder);
