import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { onCart } from '../../actionCreator';
import { API_URL_1 } from '../../support/API_url';

class adidas extends Component {

    state = {
        adidasData : [],
        cart: []
    }

    getAdidasData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "adidas"
            }
        })
        .then( adidasData => {
            console.log(adidasData);
            this.setState({ adidasData: adidasData.data });
        });
    }

    getCartData = () => {
        console.log(this.props.addCart );
        if(this.props.addCart.item  == undefined) {
            this.setState({ cart: this.props.addCart});
        }
        else {
            this.setState({ cart: this.props.addCart.item });
        }
    }

    componentWillMount() {
        this.getAdidasData();
        this.getCartData();
        console.log('will mount')
        
    }

    onCartClick = (itemData) => {
        console.log(itemData)
        this.state.cart.push(itemData)
        this.props.onCart(this.state.cart);
    }

    renderBrandAdidas = () => {
        return this.state.adidasData.map( (itemInAdidasData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInAdidasData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInAdidasData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInAdidasData.price}</p>
                    <p class="card-text"><b>Brand:</b> {itemInAdidasData.brand}</p>
                    <p class="card-text"><b>Type:</b> {itemInAdidasData.type}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInAdidasData)}/>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.props.addCart)
        console.log(this.state.cart);
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandAdidas()}
                </div>
            </div>  
        );
    }
}

const mapStateToProps = (state) => {
    let addCart = state.addCart

    return { addCart };
}

export default connect(mapStateToProps, { onCart })(adidas);