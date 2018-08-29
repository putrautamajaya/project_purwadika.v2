import React, { Component } from 'react';
import Header from './component/header';
import CarouselProject from './component/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <CarouselProject/>
        
      </div>
    );
  }
}

export default App;
