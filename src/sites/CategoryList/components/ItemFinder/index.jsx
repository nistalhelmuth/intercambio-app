import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const userId = 0;
    return (
      <div className="item-finder">
        <div className="header">
          <Link to="/categories">Ver Categorias</Link>
          <h1>
            {`Categoria de ${name}`}
          </h1>
          <Link to={`/users/${userId}`}>Perfil</Link>
        </div>
        <div className="inputs">
          <input />
          <input />
          <input />
          <button
            type="button"
            onClick={filterItems}
          >
            {'buscar'}
          </button>
        </div>
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
