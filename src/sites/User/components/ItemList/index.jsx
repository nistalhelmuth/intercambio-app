import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../../../reducers';
import Item from '../../../SharedComponents/Item';
import NewItem from '../NewItem';
import * as actions from '../../../../actions/belongings';
import './styles.css';

class ItemList extends Component {
  componentWillMount() {
    const { fetchBelongings } = this.props;
    fetchBelongings();
  }

  render() {
    const { ids, self } = this.props;
    return (
      <div className="item-list">
        {
          ids.map(id => (
            id !== undefined
              ? (<Item id={id} key={id} deletable={self} />) : <Fragment />
          ))
        }
        {self && <NewItem />}
      </div>
    );
  }
}

ItemList.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
  fetchBelongings: PropTypes.func.isRequired,
  self: PropTypes.bool.isRequired,
};

export default connect(
  (state, { id }) => ({
    ids: selectors.getBelongingIds(state),
    self: parseInt(id, 10) === selectors.getLoggedUser(state).id,
  }),
  (dispatch, { id }) => ({
    fetchBelongings() {
      dispatch(actions.fetchBelongings(id));
    },
  }),
)(ItemList);
