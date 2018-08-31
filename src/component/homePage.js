import React, { Component } from 'react';
import CarouselProject from './carousel';
import NewArrival from './newArrival';

class homePage extends Component {
    render() {
        return(
            <div className="container-fluid">
                <CarouselProject/>
                <NewArrival/>
            </div>
        );
    }
}

export default homePage;