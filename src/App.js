import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './page/MainPage';
import SigninPage from './page/SigninPage';
import SignupPage from './page/SignupPage';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/signin/" component={SigninPage} />
          <Route path="/signup/" component={SignupPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
