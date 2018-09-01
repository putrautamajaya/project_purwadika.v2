import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class newBalance extends Component {

    state = {newBalanceData : []}

    getNewBalanceData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "new balance"
            }
        })
        .then( newBalanceData => {
            console.log(newBalanceData);
            this.setState({ newBalanceData: newBalanceData.data });
        });
    }

    componentWillMount() {
        this.getNewBalanceData();
    }

    renderBrandNewBalance = () => {
        return this.state.newBalanceData.map( (itemInNewBalanceData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "350px"}}>
                <img class="card-img-top imgSize" src={itemInNewBalanceData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInNewBalanceData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInNewBalanceData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInNewBalanceData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.newBalanceData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandNewBalance()}
                </div>
            </div>  
        );
    }
}

export default newBalance;