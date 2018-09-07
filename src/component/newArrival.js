import React, { Component } from 'react';
import axios from 'axios';
import '../support/newArrival.css';
import { API_URL_1 } from '../support/API_url';

class newArrival extends Component {
    state = { newArrivalData: []}

    getNewArrivalData = () => {
        axios.get( API_URL_1 + "/newArrival" )
        .then( newArrData => {
            console.log(newArrData);
            this.setState({ newArrivalData: newArrData.data });
        });
    }

    componentWillMount() {
        this.getNewArrivalData();
    }

    renderNewArrival = () => {
        return this.state.newArrivalData.map( (arrivalData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px"}}>
                <img class="card-img-top imgSize" src={arrivalData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{arrivalData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {arrivalData.price}</p>
                    <p class="card-text"><b>brand:</b> {arrivalData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.newArrivalData)
        return (
            <div className="container-fluid">

                <h1>New Arrival</h1>
                <hr className="line hrMarginBottom" />
                
                <div className="row">
                    {this.renderNewArrival()}
                </div>

            </div>
            
        );
    }
}

export default newArrival;