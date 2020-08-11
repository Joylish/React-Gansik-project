import React from 'react';

import InputFormContainer from './style/InputFormContainer';

const InputForm = ({ name, handleChange, ...otherProps }) => (
  <InputFormContainer>
    {name
    && (
      <label
        htmlFor={`login-${name}`}
        className="input-label"
      >
        {name}
      </label>
    )}
    <input
      id={`login-${name}`}
      name={name}
      onChange={handleChange}
      {...otherProps}
    />
  </InputFormContainer>
);

export default InputForm;
