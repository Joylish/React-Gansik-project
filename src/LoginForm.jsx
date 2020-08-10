import React, { useState } from 'react';

import InputForm from './InputForm';
import Button from './style/Button';

import LoginFormContainer from './style/LoginFormContainer';

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { target: { name, value } } = event;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      email: '',
      password: '',
    });
  };

  const { email, password } = state;

  return (
    <LoginFormContainer>
      <h2 className="title">로그인</h2>
      <form onSubmit={handleSubmit}>
        <InputForm
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          required
        />
        <InputForm
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          required
        />
        <Button
          type="submit"
        >
          로그인
        </Button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
