import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../firebase/firebase.utills';

import HeaderContainer from '../style/HeaderContainer';

export default function Header({ authUser }) {
  return (
    <HeaderContainer>
      <Link className="logoContainer" to="/">
        <div
          className="logo"
          style={{ backgroundImage: 'url(src/assets/images/logo.JPG)' }}
        />
      </Link>
      <div className="options">
        {!authUser && (
          <Link className="option" to="/login">
            로그인
          </Link>
        )}
        {authUser && (
          <button
            className="option"
            type="button"
            onClick={() => auth.signOut()}
          >
            로그아웃
          </button>
        )}
        <Link className="option" to="/WishListPage">
          관심상품
        </Link>
      </div>
    </HeaderContainer>
  );
}
