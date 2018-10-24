import React, { Component } from 'react';

import './styles.css';

class Finder extends Component {
  render() {
    //const { match:{ params } } = this.props;
    //console.log(params);
    return (
      <div className="finder">    
        <h1>
          {'params.category'}
        </h1>      
        <div className="inputs">
          <input>
          </input>
          <input>
          </input>
          <input>
          </input>
          <button>
            {'buscar'}
          </button>
        </div>
      </div>
    );
  }
}

export default Finder;