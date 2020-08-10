import React from 'react';

import InputFormContainer from './style/InputFormContainer';

const InputForm = ({
  name, handleChange, ...otherProps
}) => (
  <InputFormContainer>
    {
      name
      && (
        <label
          htmlFor={`login-${name}`}
        >
          {name}
        </label>
      )
    }
    <input
      id={`login-${name}`}
      name={name}
      {...otherProps}
    />
  </InputFormContainer>
);

export default InputForm;
