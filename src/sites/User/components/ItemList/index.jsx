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
    const { ids } = this.props;
    return (
      <div className="item-list">
        {
          ids.map(id => (
            id !== undefined
              ? (<Item id={id} key={id} />) : <Fragment />
          ))
        }
        <NewItem />
      </div>
    );
  }
}

ItemList.propTypes = {
  ids: PropTypes.arrayOf(Number).isRequired,
  fetchBelongings: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    ids: selectors.getBelongingIds(state),
  }),
  (dispatch, { id }) => ({
    fetchBelongings() {
      dispatch(actions.fetchBelongings(id));
    },
  }),
)(ItemList);
