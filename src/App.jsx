import React, { useState, useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utills';

import Homepage from './pages/Homepage';
import WishListPage from './WishListPage';
import ItemsPage from './pages/ItemsPage';
import LoginPage from './pages/LoginPage';

import Header from './components/Header';

import AppContainer from './style/AppContainer';

export default function App() {
  const [authUser, setAuthUser] = useState(null);
  const [unSubscribe, setUnsubscribe] = useState(null);

  // open subscription to whole App
  useEffect(() => {
    setUnsubscribe(
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
        // db에 사용자 정보가 있는지 확인
          const userRef = await createUserProfileDocument(userAuth);
          // createUserProfileDocument(): db에 사용자 정보가 있는지 확인
          // 없으면 새로 사용자 정보 생성해서 db에 저장하고
          // db에서 해당 사용자 reference 반환
          userRef.onSnapshot((snapShot) => {
            setAuthUser({
              id: snapShot.id,
              ...snapShot.data(), // db에 저장한 document의 data 정보
            }, console.log(authUser));
          });
          return;
        }
        // 로그아웃 하면 null로 초기화
        setAuthUser({
          authUser: userAuth,
        });
      }),
    );
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
          <Route path="/product/:productId" component={ItemsPage} />
        </Switch>
      </div>
    </AppContainer>
  );
}
