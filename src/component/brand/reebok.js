import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL_1 } from '../../support/API_url';

class reebok extends Component {

    state = {reebokData : []}

    getReebokData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                brand: "reebok"
            }
        })
        .then( reebokData => {
            console.log(reebokData);
            this.setState({ reebokData: reebokData.data });
        });
    }

    componentWillMount() {
        this.getReebokData();
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

    renderBrandReebok = () => {
        return this.state.reebokData.map( (itemInReebokData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInReebokData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInReebokData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInReebokData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInReebokData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInReebokData)}/>
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.reebokData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderBrandReebok()}
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

export default connect(mapStateToProps)(reebok);
