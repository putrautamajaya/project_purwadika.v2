import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class nike extends Component {

    state = {nikeData : []}

    getNikeData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "nike"
            }
        })
        .then( nikeData => {
            console.log(nikeData);
            this.setState({ nikeData: nikeData.data });
        });
    }

    componentWillMount() {
        this.getNikeData();
    }

    renderBrandNike = () => {
        return this.state.nikeData.map( (itemInNikeData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px"}}>
                <img class="card-img-top imgSize" src={itemInNikeData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInNikeData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInNikeData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInNikeData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.nikeData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandNike()}
                </div>
            </div>  
        );
    }
}

export default nike;