import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class running extends Component {

    state = {runningData : []}

    getRunningData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "running"
            }
        })
        .then( running => {
            console.log(running);
            this.setState({ runningData: running.data });
        });
    }

    componentWillMount() {
        this.getRunningData();
    }

    renderRunning = () => {
        return this.state.runningData.map( (itemInRunningData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInRunningData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInRunningData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInRunningData.price}</p>
                    <p class="card-text"><b>Brand:</b> {itemInRunningData.brand}</p>
                    <p class="card-text"><b>Type:</b> {itemInRunningData.type}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.runningData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderRunning()}
                </div>
            </div>  
        );
    }
}

export default running;