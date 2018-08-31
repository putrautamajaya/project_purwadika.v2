import React, { Component } from 'react';
import Header from './component/header';
import CarouselProject from './component/carousel';
import NewArrival from './component/newArrival';
import LoginPage from './component/loginPage';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        {/* <CarouselProject/>
        
        <NewArrival/> */}

        <LoginPage/>
        
      </div>
    );
  }
}

export default App;
