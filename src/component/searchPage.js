import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL_1 } from '../support/API_url';

class search extends Component {

    state = {
        searchData : []
    }

    getSearchData = () => {
        console.log(this.props.itemSearch)
        axios.get( API_URL_1 + "/items/", {
            params: {
                brand: this.props.itemSearch
            }
        })
        .then( data => {
            console.log(data);
            this.setState({  searchData: data.data });
        })
        .catch( error => {
            alert('gagal')
        });   
    }

    componentWillMount() {
        this.getSearchData();
    }

    componentWillReceiveProps() {
        //dikasiTimeOut karna this.props.itemsearchny belom sempet ke update udah di jalanin.
        setTimeout(this.getSearchData, 1000);
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

    renderSearch = () => {

        return this.state.searchData.map( (searchData) => 

            <div className="col-sm-3">
                <div class="card marginBottomZero" style={{width: "300px"}}>
                    <img class="card-img-top imgSize" src={searchData.url}/>
                    <div class="card-body">
                        <h5 class="card-title"><b>{searchData.name}</b></h5>
                        <p class="card-text"><b>Price:</b> {searchData.price}</p>
                        <p class="card-text"><b>brand:</b> {searchData.brand}</p>
                        <input type="button" class="btn btn-primary" value="Add to Cart" onClick={() => this.onCartClick(searchData)}/>
                    </div>
                </div>
            </div>

            );

    }

    render() {
        console.log(this.props.itemSearch)
        return(
            <div className="container-fluid">
                <br/>               
                <div className="row">
                    {this.renderSearch()}
                </div>
            </div>  
        );
    }
}

const mapStateToProps = (state) => {
    let addCart = state.addCart
    let itemSearch = state.search
    let userLogin = state.userLogin

    return { addCart, itemSearch, userLogin };
}

export default connect(mapStateToProps)(search);