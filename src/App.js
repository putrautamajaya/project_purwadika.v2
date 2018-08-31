import React, { Component } from 'react';
import Header from './component/header';
import { Route } from 'react-router-dom';

import LoginPage from './component/loginPage';
import HomePage from './component/homePage'; 




class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />     

        <div>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/loginPage" component={ LoginPage }/>
          {/* <Route path="/movielist" component={ MovieList }/> */}
        </div>
        
      </div>
    );
  }
}

export default App;
