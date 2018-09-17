import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL_1 } from '../../support/API_url';

class basketBall extends Component {

    state = {basketBallData : []}

    getBasketBallData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "basket ball"
            }
        })
        .then( basketBall => {
            console.log(basketBall);
            this.setState({ basketBallData: basketBall.data });
        });
    }

    componentWillMount() {
        this.getBasketBallData();
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

    renderBasketBall = () => {
        return this.state.basketBallData.map( (itemInBasketBallData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInBasketBallData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInBasketBallData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInBasketBallData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInBasketBallData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInBasketBallData)}/>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.basketBallData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBasketBall()}
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

export default connect(mapStateToProps)(basketBall);
