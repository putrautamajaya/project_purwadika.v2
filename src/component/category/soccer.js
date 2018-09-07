import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class soccer extends Component {

    state = {soccerData : []}

    getSoccerData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "soccer"
            }
        })
        .then( soccer => {
            console.log(soccer);
            this.setState({ soccerData: soccer.data });
        });
    }

    componentWillMount() {
        this.getSoccerData();
    }

    renderSoccer = () => {
        return this.state.soccerData.map( (itemInSoccerData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px"}}>
                <img class="card-img-top imgSize" src={itemInSoccerData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInSoccerData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInSoccerData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInSoccerData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.soccerData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderSoccer()}
                </div>
            </div>  
        );
    }
}

export default soccer;