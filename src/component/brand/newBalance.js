import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';
import { connect } from 'react-redux';

class newBalance extends Component {

    state = {newBalanceData : []}

    getNewBalanceData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "new balance"
            }
        })
        .then( newBalanceData => {
            console.log(newBalanceData);
            this.setState({ newBalanceData: newBalanceData.data });
        });
    }

    componentWillMount() {
        this.getNewBalanceData();
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

    renderBrandNewBalance = () => {
        return this.state.newBalanceData.map( (itemInNewBalanceData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInNewBalanceData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInNewBalanceData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInNewBalanceData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInNewBalanceData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInNewBalanceData)}/>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.newBalanceData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandNewBalance()}
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

export default connect(mapStateToProps)(newBalance);