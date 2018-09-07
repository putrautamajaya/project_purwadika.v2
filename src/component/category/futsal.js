import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class futsal extends Component {

    state = {futsalData : []}

    getFutsalData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "futsal"
            }
        })
        .then( futsal => {
            console.log(futsal);
            this.setState({ futsalData: futsal.data });
        });
    }

    componentWillMount() {
        this.getFutsalData();
    }

    renderFutsal = () => {
        return this.state.futsalData.map( (itemInFutsalData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInFutsalData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInFutsalData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInFutsalData.price}</p>
                    <p class="card-text"><b>Brand:</b> {itemInFutsalData.brand}</p>
                    <p class="card-text"><b>Type:</b> {itemInFutsalData.type}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.futsalData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderFutsal()}
                </div>
            </div>  
        );
    }
}

export default futsal;