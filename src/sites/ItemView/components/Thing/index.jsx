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
    <h2>
      {name}
    </h2>
    <img src={img} alt="thingPicture" />
    <Stars num={usedState} />
    <div className="other">
      <h4>
        {'Description:'}
      </h4>
      <p>
        {description}
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
