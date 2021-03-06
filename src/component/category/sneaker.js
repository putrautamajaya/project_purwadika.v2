import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL_1 } from '../../support/API_url';

class sneaker extends Component {

    state = {sneakerData : []}

    getSneakerData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "sneaker"
            }
        })
        .then( sneaker => {
            console.log(sneaker);
            this.setState({ sneakerData: sneaker.data });
        });
    }

    componentWillMount() {
        this.getSneakerData();
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

    renderSneaker = () => {
        return this.state.sneakerData.map( (itemInSneakerData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInSneakerData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInSneakerData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInSneakerData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInSneakerData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInSneakerData)}/>                    
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.sneakerData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderSneaker()}
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

export default connect(mapStateToProps)(sneaker);