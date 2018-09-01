import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';

class underArmor extends Component {

    state = {underArmorData : []}

    getUnderArmorData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "under armor"
            }
        })
        .then( underArmorData => {
            console.log(underArmorData);
            this.setState({ underArmorData: underArmorData.data });
        });
    }

    componentWillMount() {
        this.getUnderArmorData();
    }

    renderBrandUnderArmor = () => {
        return this.state.underArmorData.map( (itemInUnderArmorData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "350px"}}>
                <img class="card-img-top imgSize" src={itemInUnderArmorData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInUnderArmorData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInUnderArmorData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInUnderArmorData.brand}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.underArmorData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandUnderArmor()}
                </div>
            </div>  
        );
    }
}

export default underArmor;