import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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

    onCartClick = (itemData) => {
        if(this.props.userLogin.username !== ''){
            axios.post( API_URL_1 + '/transaction', {
                ...itemData, 
                quantity: 1,
                subtotal: itemData.price
            })
            .then((response) => {
                alert("Add To Cart Success!");
            })
            .catch((error) => {
                alert("Add To Cart Error!");
            }) 
        }

        else {
            alert('Please Login First')
        } 
    }

    renderBrandUnderArmor = () => {
        return this.state.underArmorData.map( (itemInUnderArmorData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInUnderArmorData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInUnderArmorData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInUnderArmorData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInUnderArmorData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInUnderArmorData)}/>
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

const mapStateToProps = (state) => {
    let addCart = state.addCart
    let userLogin = state.userLogin

    return { addCart, userLogin };
}

export default connect(mapStateToProps)(underArmor);