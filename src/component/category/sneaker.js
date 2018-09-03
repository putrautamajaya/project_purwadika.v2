import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class sneaker extends Component {

    state = {sneakerData : []}

    getSneakerData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "sneaker"
            }
        })
        .then( sneaker => {
            console.log(sneaker);
            this.setState({ sneakerData: sneaker.data });
        });
    }

    componentWillMount() {
        this.getSneakerData();
    }

    renderSneaker = () => {
        return this.state.sneakerData.map( (itemInSneakerData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "350px"}}>
                <img class="card-img-top imgSize" src={itemInSneakerData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInSneakerData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInSneakerData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInSneakerData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.sneakerData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderSneaker()}
                </div>
            </div>  
        );
    }
}

export default sneaker;