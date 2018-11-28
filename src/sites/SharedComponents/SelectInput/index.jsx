import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SelectInput = ({
  label,
  valueList,
  displayList,
  input,
}) => {
  const labelId = `${label.replace(/ /g, '').toLowerCase()}`;
  return (
    <div className="select-input">
      <label htmlFor={`${labelId}-select`}>{label}</label>
      <select className="select-list" id={`${labelId}-select`} {...input}>
        <option >...</option>
        {valueList.map(item => (
          <option key={item} value={item}>{displayList[valueList.indexOf(item)]}</option>
        ))}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  valueList: PropTypes.array,
  displayList: PropTypes.array,
  input: PropTypes.object.isRequired,
};

SelectInput.defaultProps = {
  valueList: [],
  displayList: [],
};

export default SelectInput;
