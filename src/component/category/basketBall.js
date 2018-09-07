import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class basketBall extends Component {

    state = {basketBallData : []}

    getBasketBallData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "basket ball"
            }
        })
        .then( basketBall => {
            console.log(basketBall);
            this.setState({ basketBallData: basketBall.data });
        });
    }

    componentWillMount() {
        this.getBasketBallData();
    }

    renderBasketBall = () => {
        return this.state.basketBallData.map( (itemInBasketBallData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px"}}>
                <img class="card-img-top imgSize" src={itemInBasketBallData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInBasketBallData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInBasketBallData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInBasketBallData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.basketBallData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBasketBall()}
                </div>
            </div>  
        );
    }
}

export default basketBall;