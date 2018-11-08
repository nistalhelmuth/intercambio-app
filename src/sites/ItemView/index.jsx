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
    const estado = true; //agregar al reductor
    return (
      <div className="item-view">
        <div className="leftSide">
          <Thing id={params.itemID} />
          <Owner id={params.userID} />
        </div>  
        <div className="rightSide">
          {
            estado ? (
              <BetList itemID={params.itemID} />
            ) : (
              <BetCreator id={0} />
            )
            /*codear para usuario loggeado*/
          }
        </div>
      </div>
    );
  }
}

ItemView.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ItemView;
