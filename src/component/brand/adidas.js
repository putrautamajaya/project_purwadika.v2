import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class adidas extends Component {

    state = {adidasData : []}

    getAdidasData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "adidas"
            }
        })
        .then( adidasData => {
            console.log(adidasData);
            this.setState({ adidasData: adidasData.data });
        });
    }

    componentWillMount() {
        this.getAdidasData();
    }

    renderBrandAdidas = () => {
        return this.state.adidasData.map( (itemInAdidasData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "350px"}}>
                <img class="card-img-top imgSize" src={itemInAdidasData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInAdidasData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInAdidasData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInAdidasData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.adidasData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandAdidas()}
                </div>
            </div>  
        );
    }
}

export default adidas;