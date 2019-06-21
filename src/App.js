import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import MainPage from './page/MainPage';
import SignInPage from './page/auth/SignInPage';
import EmailSignUpPage from './page/auth/EmailSignUpPage';
import EmailSignInPage from './page/auth/EmailSignInPage';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';


class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/sign-in" exact component={SignInPage} />
          <Route path="/sign-in/email" component={EmailSignInPage} />
          <Route path="/sign-up/email" component={EmailSignUpPage} />
          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
