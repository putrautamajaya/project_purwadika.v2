import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class allItem extends Component {

    state = {allItemData : []}

    getAllItemData = () => {
        axios.get( API_URL_1 + "/items")
        .then( allItemData => {
            console.log(allItemData);
            this.setState({ allItemData: allItemData.data });
        });
    }

    componentWillMount() {
        this.getAllItemData();
    }

    renderAllItem = () => {
        return this.state.allItemData.map( (itemInAllItemData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px"}}>
                <img class="card-img-top imgSize" src={itemInAllItemData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInAllItemData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInAllItemData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInAllItemData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.allItemData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderAllItem()}
                </div>
            </div>  
        );
    }
}

export default allItem;