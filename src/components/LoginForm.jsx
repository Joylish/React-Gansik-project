import React, { useState, useCallback } from 'react';

import InputForm from './InputForm';

import Button from '../style/Button';
import LoginFormContainer from '../style/LoginFormContainer';

import { signInWithGoogle } from '../firebase/firebase.utills';

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = useCallback((event) => {
    const { target: { name, value } } = event;
    setState({
      ...state,
      [name]: value,
    });
  }, [state]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setState({
      email: '',
      password: '',
    });
  }, [state]);

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
        <div className="login-buttons">
          <Button type="submit">로그인</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            isOAuth
          >
            구글 계정으로 로그인
          </Button>
        </div>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
