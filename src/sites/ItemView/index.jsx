import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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
    const { match: { params } } = this.props;
    return (
      <div className="item">
        <div className="leftSide">
          <Thing id={params.itemID} />
          <Owner id={params.userID} />
        </div>
        <div className="rightSide">
          <BetList id={params.itemID} />
          <BetCreator id={params.itemID} />
        </div>
      </div>
    );
  }
}

ItemView.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ItemView;
