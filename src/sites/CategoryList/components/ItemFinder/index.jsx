import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import * as belonginActions from '../../../../actions/belongings';

import './styles.css';

class ItemFinder extends Component {
  componentWillMount() {
    const { fetchAllItems } = this.props;
    fetchAllItems();
  }

  render() {
    const { name, filterItems } = this.props;
    return (
      <div className="item-finder">
        <h2>
          {`Busca en la categoria de ${name}`}
        </h2>
        <input />
        <button
          type="button"
          onClick={filterItems}
        >
          {'buscar'}
        </button>
      </div>
    );
  }
}

ItemFinder.propTypes = {
  name: PropTypes.string.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
  filterItems: PropTypes.func.isRequired,
};


export default connect(
  (state, { id }) => ({
    ...selectors.getCategory(state, id),
  }),
  dispatch => ({
    fetchAllItems() {
      dispatch(belonginActions.fetchBelongings());
    },
    filterItems() {
      // dispatch(belonginActions.filterBelongings());
    },
  }),
)(ItemFinder);
