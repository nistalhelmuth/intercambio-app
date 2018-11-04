import React, { Fragment } from 'react';
import './styles.css';

const TextInput = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <Fragment>
    <label>
      {label}
    </label>
    <input {...input} placeholder={label} type={type} className="my-input" />
    {touched && error && <span>{error}</span>}
  </Fragment>
);

export default TextInput;
