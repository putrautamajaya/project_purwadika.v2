import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../../support/API_url';
import AddMoreItemProcess from './addMoreItemProcess';

class addMoreItemPage extends Component {

    state = { 
        listOfItem: [],
        selectEditID: ''
    }

    getListOfItem = () => {
        axios.get( API_URL_1 + "/items" )
        .then( itemData => {
            this.setState({ listOfItem: itemData.data });
        });
    }

    componentWillMount() {
        this.getListOfItem();
    }

    renderListOfItem = () => {
        return this.state.listOfItem.map( itemData => 
        <AddMoreItemProcess 
            key={itemData.id} 
            id={itemData.id} 
            name={itemData.name} 
            type={itemData.type} 
            brand={itemData.brand} 
            url={itemData.url}
            price={itemData.price} 
            fnEdit={() => this.onEditClick(itemData.id)}
            selectedID = {this.state.selectEditID}
            fnUpdate = {(refs) => this.onUpdateClick(itemData.id, refs)}
            fnDelete={() => this.onDeleteClick(itemData.id)}
        />);
    }

    onEditClick(id) {
        this.setState({selectEditID : id});
    }

    onUpdateClick = (id, refs) => {
        console.log(id, refs);
        axios.put(API_URL_1 + "/items/" + id, {
            name: refs.nameUpdate.value,
            type: refs.typeUpdate.value,
            brand: refs.brandUpdate.value,
            url: refs.urlUpdate.value,
            price: refs.priceUpdate.value
        })
        .then((Response) => {
            alert("Update Success!");
            console.log(Response);
            this.setState({ selectEditID: "" });
            this.getListOfItem();
        })
        .catch((error) => {
            alert("Update Error!");
            console.log(error);
        })
    }

    onDeleteClick(id) {
        axios.delete(API_URL_1 + "/items/" + id)
        .then((Response) => {
            alert("Delete Success!");
            console.log(Response);

            this.getListOfItem();
        })
        .catch((error) => {
            alert("Delete Error!");
            console.log(error);
        })
    }

    onAddMoreItemClick = () => {  
        axios.post(API_URL_1 + '/items', {
            name: this.refs.name.value,
            type: this.refs.type.value,
            brand: this.refs.brand.value,
            url: this.refs.url.value,
            price: this.refs.price.value
        })
        .then((response) => {
            console.log(response);
            alert("Add Item Success!");

            this.getListOfItem();
        })
        .catch((error) => {
            console.log(error);
            alert("Add Item Error!");
        })
    }

    render() {
        return (
            
            <div className="container text-left">
                <br/>
                <br/>
                <br/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderListOfItem()}
                    </tbody>
                </table>  
                
                <h2>Register Your Item</h2>
                <form>
                    <div className="form-group">
                        <label for="name">Item Name:</label>
                        <input type="text" className="form-control" ref="name" id="title"/>
                    </div>

                    <div className="form-group">
                        <label for="type">Type</label>
                        <input type="text" className="form-control" ref="type" id="description"/>
                    </div>

                    <div className="form-group">
                        <label for="brand">Brand</label>
                        <input type="text" className="form-control" ref="brand" id="description"/>
                    </div>

                    <div className="form-group">
                        <label for="url">URL</label>
                        <input type="text" className="form-control"ref="url" id="url"/>
                    </div>

                    <div className="form-group">
                        <label for="price">Price</label>
                        <input type="text" className="form-control" ref="price" id="description"/>
                    </div>

                    <input type="button" className="btn btn-success" value="Add New Item" onClick={this.onAddMoreItemClick} />
                </form>
            </div>
        );
    }
}

export default addMoreItemPage;