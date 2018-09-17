import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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

    renderBrandNike = () => {
        return this.state.nikeData.map( (itemInNikeData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInNikeData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInNikeData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInNikeData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInNikeData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInNikeData)}/>
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

const mapStateToProps = (state) => {
    let addCart = state.addCart
    let userLogin = state.userLogin

    return { addCart, userLogin };
}

export default connect(mapStateToProps)(nike);
