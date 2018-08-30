import React, { Component } from 'react';
import Header from './component/header';
import CarouselProject from './component/carousel';
import NewArrival from './component/newArrival';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <CarouselProject/>
        
        <NewArrival/>
        
      </div>
    );
  }
}

export default App;
