import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import Thing from './components/Thing';
import Owner from './components/Owner';
import BetList from './components/BetList';
import BetCreator from './components/BetCreator';

import './styles.css';

class ItemView extends Component {
  componentWillMount() {
    //fetchoffers
  }

  render() {
    const {
      betCreator,
      itemId,
      userId,
    } = this.props;
    return (
      <div className="item-view">
        <div className="leftSide">
          <Thing id={itemId} />
          <Owner id={userId} />
        </div>
        <div className="rightSide">
          {
            betCreator ? (
              <BetCreator loggedUser={0} itemID={itemId} /> /*codear para usuario loggeado*/
            ) : (
              <BetList itemID={itemId} />
            )
          }
        </div>
      </div>
    );
  }
}

ItemView.propTypes = {
  itemId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  betCreator: PropTypes.bool.isRequired,
};

export default connect(
  (state, { match: { params } }) => ({
    betCreator: selectors.getBetCreator(state),
    itemId: params.itemId,
    userId: params.userId,
  }),
  undefined,
)(ItemView);
