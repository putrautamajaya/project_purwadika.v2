import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { onCart } from '../actionCreator';
import '../support/newArrival.css';
import { API_URL_1 } from '../support/API_url';


class newArrival extends Component {
    state = { 
        newArrivalData: [],
        cart: []
    }

    getNewArrivalData = () => {
        axios.get( API_URL_1 + "/newArrival" )
        .then( newArrData => {
            console.log(newArrData);
            this.setState({ newArrivalData: newArrData.data });
        });
    }

    // getCartData = () => {
    //     console.log(this.props.addCart );
    //     if(this.props.addCart.item  == undefined) {
    //         this.setState({ cart: this.props.addCart});
    //     }
    //     else {
    //         this.setState({ cart: this.props.addCart.item });
    //     }
    // }

    componentWillMount() {
        this.getNewArrivalData();
        // this.getCartData();
    }

    // onCartClick = (itemData) => {
    //     this.state.cart.push(itemData)
    //     this.props.onCart(this.state.cart);
    // }

    //pass add cart di click. masukin data item yg di click ke database transaction.
    //lalu di edit di kasi value quantity = 1
    onCartClick = (itemData) => {
        axios.post( API_URL_1 + '/transaction', {
            ...itemData, 
            quantity: 1,
            subtotal: itemData.price
        })
        .then((response) => {
            alert("Add Transaction Success!");
        })
        .catch((error) => {
            alert("Add Transaction Error!");
        })      
    }

    renderNewArrival = () => {
        return this.state.newArrivalData.map( (arrivalData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px"}}>
                <img class="card-img-top imgSize" src={arrivalData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{arrivalData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {arrivalData.price}</p>
                    <p class="card-text"><b>brand:</b> {arrivalData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(arrivalData)}/>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.props.addCart)
        return (
            <div className="container-fluid">

                <h1>New Arrival</h1>
                <hr className="line hrMarginBottom" />
                
                <div className="row">
                    {this.renderNewArrival()}
                </div>

            </div>
            
        );
    }
}
const mapStateToProps = (state) => {
    let addCart = state.addCart

    return { addCart };
}

export default connect(mapStateToProps, { onCart })(newArrival);