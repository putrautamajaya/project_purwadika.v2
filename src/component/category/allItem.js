import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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

    renderAllItem = () => {
        return this.state.allItemData.map( (itemInAllItemData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInAllItemData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInAllItemData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInAllItemData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInAllItemData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInAllItemData)}/>
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

const mapStateToProps = (state) => {
    let addCart = state.addCart
    let userLogin = state.userLogin

    return { addCart, userLogin };
}

export default connect(mapStateToProps)(allItem);