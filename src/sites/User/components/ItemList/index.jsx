import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import Item from '../../../SharedComponents/Item';
import './styles.css';

const ItemList = ({
  ids,
}) => (
  <div className="item-list">
    {
      ids.map(id => (
        id && <Item id={id} key={id} />
      ))
    }
  </div>
);

ItemList.propType = {
  ids: PropTypes.arrayOf(Number).isRequired,
};

export default connect(
  (state, { id }) => ({
    ids: selectors.getBeloingsByUser(state, id),
  }),
  undefined,
)(ItemList);
