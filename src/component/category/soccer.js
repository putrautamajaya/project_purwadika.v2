import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL_1 } from '../../support/API_url';

class soccer extends Component {

    state = {soccerData : []}

    getSoccerData = () => {
        axios.get( API_URL_1 + "/items", {
            params: {
                type: "soccer"
            }
        })
        .then( soccer => {
            console.log(soccer);
            this.setState({ soccerData: soccer.data });
        });
    }

    componentWillMount() {
        this.getSoccerData();
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

    renderSoccer = () => {
        return this.state.soccerData.map( (itemInSoccerData) => 

        <div className="col-sm-3">
            <div class="card marginBottomZero" style={{width: "300px", height: "470px"}}>
                <img class="card-img-top imgSize" src={itemInSoccerData.url}/>
                <div class="card-body">
                    <h5 class="card-title"><b>{itemInSoccerData.name}</b></h5>
                    <p class="card-text"><b>Price:</b> {itemInSoccerData.price}</p>
                    <p class="card-text"><b>brand:</b> {itemInSoccerData.brand}</p>
                    <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(itemInSoccerData)}/>                                        
                </div>
            </div>
        </div>

        );
    }

    render() {
        console.log(this.state.soccerData)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderSoccer()}
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

export default connect(mapStateToProps)(soccer);