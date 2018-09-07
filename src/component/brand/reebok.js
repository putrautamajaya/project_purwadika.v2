import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class reebok extends Component {

    state = {reebokData : []}

    getReebokData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "reebok"
            }
        })
        .then( reebokData => {
            console.log(reebokData);
            this.setState({ reebokData: reebokData.data });
        });
    }

    componentWillMount() {
        this.getReebokData();
    }

    renderBrandReebok = () => {
        return this.state.reebokData.map( (itemInReebokData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px"}}>
                <img class="card-img-top imgSize" src={itemInReebokData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInReebokData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInReebokData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInReebokData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.reebokData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandReebok()}
                </div>
            </div>  
        );
    }
}

export default reebok;