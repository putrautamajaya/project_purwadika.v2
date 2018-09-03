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
import AddMoreItemPage from './component/admin/addMoreItemPage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />     

        <div>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/admin" component={ AdminLoginPage }/>
          <Route path="/loginPage" component={ LoginPage }/>
          <Route path="/registerPage" component={ RegisterPage }/>
          <Route path="/adidas" component={ Adidas }/>
          <Route path="/nike" component={ Nike }/>
          <Route path="/reebok" component={ Reebok }/>
          <Route path="/underarmor" component={ UnderArmor }/>
          <Route path="/newbalance" component={ NewBalance }/>
          <Route path="/addmoreitem" component={ AddMoreItemPage }/>
        </div>
        
      </div>
    );
  }
}

export default App;
