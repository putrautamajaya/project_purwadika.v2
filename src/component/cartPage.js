import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL_1 } from '../support/API_url';
import CartPageItem from './cartPageItem';

class cartPage extends Component {
    state = { 
        cart: [],
        totalHarga: 0,
        itemQuantity: [],
        selectEditID: ''
    }

    // 1. create fungsi untuk  mengisi state cart, 
    //    lalu di isi dengan global state addCart(isiny item" yg di dlm cart)
    //      - if = itu untuk kalau addCartny masi kosong.
    //      - else = kalau addCartny sudah ada isi. isiny itu dalam betuk "item"
    getCartData = () => {
        console.log(this.props.addCart );
        if(this.props.addCart.item  == undefined) {
            this.setState({ cart: this.props.addCart});
        }
        else {
            this.setState({ cart: this.props.addCart.item });
        }
    }

    // 2. mengisi state cart
    componentWillMount() {
        this.getCartData();
    }

    totalHarga = () => {
        console.log(this.state.cart)
        let total = 0;
        this.state.cart.map( 
            (item) => total = total + item.price
        );
        this.setState({totalHarga: total});
    }

    //creating first quantity after opening the cartpage.
    quantity = () => {
        this.state.cart.map( 
            (item) => this.state.itemQuantity.push({
                id : item.id,
                name : item.name,
                type : item.type,
                brand : item.brand,
                url : item.url,
                price : item.price,
                quantity: 1
            })
        )
        this.updateTransactionDataBase();
    }

    //abis pertama kali buka kan update quantity ke variable itemQuantity.
    //nah isiny itemQuantity di update ke database.
    updateTransactionDataBase = () => {  
        this.state.itemQuantity.map((item) =>
        axios.post( API_URL_1 + '/transaction', item )
        .then((response) => {
            alert("Update Transaction Success!");
        })
        .catch((error) => {
            alert("Update Transaction Error!");
        })
        )  
    }
    
    //after 1st render do these
    componentDidMount() {
        this.totalHarga();
        this.quantity();
    }

    // 3. Create fungsi render
    renderTableCart = () =>{

        return this.state.itemQuantity.map( (item) => 
        <CartPageItem 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            type={item.type} 
            brand={item.brand} 
            url={item.url}
            price={item.price} 
            fnEdit={() => this.onEditClick(item.id)}
            selectedID = {this.state.selectEditID}
            fnUpdate = {(refs) => this.onUpdateClick(item.id, refs)}
            fnDelete={() => this.onDeleteClick(item.id)}
        />
        ); 
        
    }

    onEditClick(id) {
        this.setState({selectEditID : id});
    }

    onUpdateClick = (id, refs) => {
        console.log(refs.updateUrl);
        axios.put(API_URL_1 + "/transaction/" + id, {
            name: refs.updateName.value,
            type: refs.updateType.value,
            brand: refs.updateBrand.value,
            url: refs.updateUrl.value,
            price: refs.updatePrice.value,
            quantity: refs.updateQuantity.value
        })
        .then((Response) => {
            alert("Update Success!");
            
            axios.get( API_URL_1 + "/transaction" )
            .then( itemData => {
                this.setState({ itemQuantity: itemData.data });
                this.setState({ selectEditID: "" });
            });
        })
        .catch((error) => {
            console.log(error)
            alert("Update Error!");
        })
    }

    render() {
        // console.log(refs.updatePrice.value);
        
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
                            <td><a href="#" className="btn btn-warning"><i className="glyphicon glyphicon-chevron-left"></i> Continue Shopping</a></td>
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

