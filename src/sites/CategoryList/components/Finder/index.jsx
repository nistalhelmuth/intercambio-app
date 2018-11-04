import React from 'react';

import { connect } from 'react-redux';
import { createMatchSelector } from 'connected-react-router';
import * as selectors from '../../../../reducers';

import './styles.css';

const Finder = ({
  name,
}) => (
  <div className="finder">
    <h1>
      {name}
    </h1>
    <div className="inputs">
      <input />
      <input />
      <input />
      <button type="button">
        {'buscar'}
      </button>
    </div>
  </div>
);

/*
class Finder extends React.Component {
  constructor (props) {
    super(props);
    const { match:{ params } } = props;
    console.log(params);
  }

  render () {
    return (
      <div/>
    )
  }
}*/


export default connect(
  (state ) => {
    /*
    const matchSelector = createMatchSelector({ path: '/course/:id })
    const match = matchSelector(state) // like: /course/123
    const id = match.params.id; // get: 123*/
    return {
      ...selectors.getCategory(state,1),
    };
  },
  undefined,
)(Finder);
