import React, { useState, useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utills';

import Homepage from './Homepage';
import WishListPage from './WishListPage';
import LoginPage from './LoginPage';
import Header from './Header';
import ProductItemsPage from './ProductItemsPage';

import AppContainer from './style/AppContainer';

export default function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <AppContainer>
      <Header authUser={authUser} />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/wishlist" component={WishListPage} />
          <Route path="/product/:productId" component={ProductItemsPage} />
        </Switch>
      </div>
    </AppContainer>
  );
}
