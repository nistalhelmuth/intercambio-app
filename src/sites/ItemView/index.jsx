import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';
import Header from '../SharedComponents/Header';
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
      loggedUser,
      betCreator,
      itemId,
      userId,
    } = this.props;
    return (
      <div className="item-view">
        <Header />
        <div className="information">
          <div className="leftSide">
            <Thing id={itemId} />
            <Owner id={userId} />
          </div>
          <div className="rightSide">
            {
              betCreator ? (
                <BetCreator loggedUser={loggedUser.id} itemID={itemId} />
              ) : (
                <BetList itemID={itemId} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

ItemView.propTypes = {
  loggedUser: PropTypes.object.isRequired,
  itemId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  betCreator: PropTypes.bool.isRequired,
};

export default connect(
  (state, { match: { params } }) => ({
    loggedUser: selectors.getLoggedUser(state),
    betCreator: selectors.getBetCreator(state),
    itemId: params.itemId,
    userId: params.userId,
  }),
  undefined,
)(ItemView);
