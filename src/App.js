import React, { Component } from 'react';
import Header from './component/header';
import { Route } from 'react-router-dom';

import LoginPage from './component/loginPage';
import HomePage from './component/homePage'; 
import RegisterPage from './component/registerPage';
import Adidas from './component/brand/adidas';
import Nike from './component/brand/nike';
import Reebok from './component/brand/reebok';
import UnderArmor from './component/brand/underArmor';
import NewBalance from './component/brand/newBalance';
import AdminLoginPage from './component/adminLoginPage';
import AdminRegisterPage from './component/adminRegisterPage';
import AddMoreItemPage from './component/admin/addMoreItemPage';
import AllItem from './component/category/allItem';
import BasketBall from './component/category/basketBall';
import Futsal from './component/category/futsal';
import Running from './component/category/running';
import Soccer from './component/category/soccer';
import Sneaker from './component/category/sneaker';
import CartPage from './component/cartPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />     

        <div>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/loginPage" component={ LoginPage }/>
          <Route path="/registerPage" component={ RegisterPage }/>
          <Route path="/admin" component={ AdminLoginPage }/>
          <Route path="/adminregister" component={ AdminRegisterPage }/>
          <Route path="/adidas" component={ Adidas }/>
          <Route path="/nike" component={ Nike }/>
          <Route path="/reebok" component={ Reebok }/>
          <Route path="/underarmor" component={ UnderArmor }/>
          <Route path="/newbalance" component={ NewBalance }/>
          <Route path="/addmoreitem" component={ AddMoreItemPage }/>
          <Route path="/allitem" component={ AllItem }/>
          <Route path="/basketball" component={ BasketBall }/>
          <Route path="/futsal" component={ Futsal }/>
          <Route path="/running" component={ Running }/>
          <Route path="/soccer" component={ Soccer }/>
          <Route path="/sneaker" component={ Sneaker }/>
          <Route path="/cart" component={ CartPage }/>
        </div>
        
      </div>
    );
  }
}

export default App;
