import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL_1 } from '../support/API_url';
import CartPageItem from './cartPageItem';
import { Link } from 'react-router-dom';

class cartPage extends Component {
    state = { 
        cart: [],
        totalHarga: 0,
        selectEditID: ''
    }

    // 1. create fungsi untuk  mengisi state cart, data di ambil dari database
    // 2. setelah state cart terisi. menghitung total harga
    getCartData = () => {
        axios.get( API_URL_1 + "/transaction" )
        .then( itemData => {
            console.log(itemData)
            this.setState({ cart: itemData.data });
            
            this.totalHarga();
        })
        .catch((error) => {
            console.log(error)
            alert("Update Cart Error!");
        }) 
    }

    // ambil semua value price di cart lalu di jumlahkan.
    totalHarga = () => {
        console.log('total harga dijalankan')
        let total = 0;
        this.state.cart.map( 
            (item) => total = total + parseInt(item.subtotal)
        );
        this.setState({totalHarga: total});
    }

    // 2. mengisi state cart
    componentWillMount() {
        this.getCartData();
    }

    onEditClick(id) {
        this.setState({selectEditID : id});
    }

    calculateSubTotal = (quantity,price) => {
        let hargaSubTotal = parseInt(quantity) * parseInt(price);
        return hargaSubTotal;
    }

    onUpdateClick = (id, refs) => {
        
        axios.put(API_URL_1 + "/transaction/" + id, {
            name: refs.updateName.value,
            type: refs.updateType.value,
            brand: refs.updateBrand.value,
            url: refs.updateUrl.value,
            price: refs.updatePrice.value,
            quantity: refs.updateQuantity.value,
            subtotal: this.calculateSubTotal(refs.updateQuantity.value, refs.updatePrice.value)
        })
        .then((Response) => {
            this.setState({ selectEditID: "" });
            this.getCartData();
            alert("Update Success!"); 
        })
        .catch((error) => {
            console.log(error)
            alert("Update Error!");
        })
    }

    // 3. Create fungsi render
    renderTableCart = () =>{
        console.log(this.state.subTotal)
        return this.state.cart.map( (item) => 
        <CartPageItem 
            key = {item.id} 
            id = {item.id} 
            name = {item.name} 
            type = {item.type} 
            brand = {item.brand} 
            url = {item.url}
            price = {item.price} 
            quantity = {item.quantity}
            subtotal = {item.subtotal}
            fnEdit = {() => this.onEditClick(item.id)}
            selectedID = {this.state.selectEditID}
            fnUpdate = {(refs) => this.onUpdateClick(item.id, refs)}
            fnDelete = {() => this.onDeleteClick(item.id)}
        />
        ); 
        
    }

    render() {
        console.log(this.state.cart);
        
        return(
            <div className="container">
            <br/><br/><br/>
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th style={{width:"50%"}}>Product</th>
                            <th style={{width:"10%"}}>Price</th>
                            <th style={{width:"8%"}}>Quantity</th>
                            <th style={{width:"22%"}} className="text-center">Subtotal</th>
                            <th style={{width:"10%"}}></th>
                        </tr>
                    </thead>

                    <tbody> 
                        {this.renderTableCart()}    
                    </tbody>

                    <tfoot>
                        <tr>
                            <td><Link to="/" className="btn btn-warning"><i className="glyphicon glyphicon-chevron-left"></i> Continue Shopping</Link></td>
                            <td colspan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Rp. {this.state.totalHarga}</strong></td>
                            <td><a href="#" className="btn btn-success btn-block">Checkout <i className="glyphicon glyphicon-chevron-right"></i></a></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    let addCart = state.addCart

    return { addCart };
}

export default connect(mapStateToProps)(cartPage);

