import React from 'react';
import './styles.css';

const TextInput = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div className="my-input">
    <label>
      {label}
    </label>
    <input
      placeholder={placeholder}
      type={type}
      {...input}
    />
    {touched && error && <span>{error}</span>}
  </div>
);

export default TextInput;
