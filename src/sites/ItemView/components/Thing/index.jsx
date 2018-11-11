import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '../../../../reducers';
import Stars from '../../../SharedComponents/Stars';

import './styles.css';

const Thing = ({
  name,
  description,
  usedState,
  img,
}) => (
  <div className="thing">
    <div className="pictures">
      <h2>
        {name}
      </h2>
      <img src={img} alt="thingPicture" />
      <Stars num={usedState} />
    </div>
    <div className="description">
      <p>
        {" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor ligula, lobortis in eros sed, bibendum sodales ipsum. Proin diam neque, sagittis a ante ac, iaculis sagittis tortor. In cras amet. "}
      </p>
    </div>
  </div>
);

Thing.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  usedState: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default connect(
  (state, { id }) => ({
    ...selectors.getBelonging(state, id),
  }),
  undefined,
)(Thing);
