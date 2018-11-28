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

const ItemView = ({
  loggedUser,
  betCreator,
  postId,
  userId,
}) => (
  <div className="item-view">
    <Header />
    <div className="information">
      <div className="leftSide">
        <Thing id={postId} />
        <Owner id={userId} />
      </div>
      <div className="rightSide">
        {
          betCreator ? (
            <BetCreator loggedUser={loggedUser.id} postId={postId} />
          ) : (
            <BetList postId={postId} />
          )
        }
      </div>
    </div>
  </div>
);

ItemView.propTypes = {
  loggedUser: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  betCreator: PropTypes.bool.isRequired,
};

export default connect(
  (state, { match: { params } }) => ({
    loggedUser: selectors.getLoggedUser(state),
    betCreator: selectors.getBetCreator(state),
    postId: params.postId,
    userId: params.userId,
  }),
  undefined,
)(ItemView);
