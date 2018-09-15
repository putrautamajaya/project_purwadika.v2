import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL_1 } from '../support/API_url';
import CartPageItem from './cartPageItem';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class cartPage extends Component {
    state = { 
        cart: [],
        cartCheck: '',
        totalHarga: 0,
        selectEditID: ''
    }

    // 1. create fungsi untuk  mengisi state cart, data di ambil dari database
    // 2. setelah state cart terisi. menghitung total harga
    getCartData = () => {
        axios.get( API_URL_1 + "/transaction" )
        .then( itemData => {
            console.log(itemData)
            this.setState({ 
                cart: itemData.data,
                cartCheck: 'ok'
             });
            
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

    //kalau checkOut di klick dia bakal masukin data transactionny ke history
    //lalu delete item di transaction
    onCheckOutClick = (cart) => {
       
        axios.post( API_URL_1 + '/transactionHistory', {
            user: this.props.userLogin.username,
            transaction: this.state.cart,
            totalHarga: this.state.totalHarga
        })
        .then((response) => {
            alert(`total harga yang harus di bayar = ${this.state.totalHarga}`);

            cart.map((item) => {
                axios.delete(API_URL_1 + "/transaction/" + item.id)
                .then( () => {this.getCartData()})
            })
            
        })
        .catch((error) => {
            alert("Add Transaction History Error!");
        }) 
        
    }

    onDeleteClick(id) {
        axios.delete(API_URL_1 + "/transaction/" + id)
        .then((Response) => {
            alert("Delete Success!");
            console.log(Response);

            this.getCartData();
        })
        .catch((error) => {
            alert("Delete Error!");
            console.log(error);
        })
    }

    // 3. Create fungsi render
    renderTableCart = () =>{
        console.log(this.state.cart)
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
                            <td>
                                <a href="#" className="btn btn-success btn-block" onClick={() => this.onCheckOutClick(this.state.cart)}>
                                    Checkout 
                                    <i className="glyphicon glyphicon-chevron-right"></i>
                                </a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
        

}
const mapStateToProps = (state) => {
    let addCart = state.addCart;
    let userLogin = state.userLogin;

    return { addCart, userLogin };
}

export default connect(mapStateToProps)(cartPage);

