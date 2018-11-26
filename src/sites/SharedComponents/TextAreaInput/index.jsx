import React from 'react';
import './styles.css';

const TextInputArea = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div className="my-textarea">
    <label>
      {label}
    </label>
    <textarea {...input} placeholder={placeholder} type={type} maxLength="200"/>
    {touched && error && <span>{error}</span>}
  </div>
);

export default TextInputArea;
