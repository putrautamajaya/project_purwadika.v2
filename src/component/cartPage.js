import React, { Component } from 'react';
import { connect } from 'react-redux';

class cartPage extends Component {
    state = { 
        cart: [],
        totalHarga: 0,
        itemQuantity: []
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
                id: item.id,
                quantity: 1
            })
        )
        console.log(this.state.itemQuantity)
    }
    
    //after 1st render do these
    componentDidMount() {
        this.totalHarga();
        this.quantity();
    }

    //if + quantity click do this. adding quantity
    onQuantityUpClick = (id) =>{
        let quantityArr = this.state.itemQuantity;
        for (let index in quantityArr){
            if(quantityArr[index].id == id){
                quantityArr[index].quantity += 1;
                console.log('quantity di tambahkan 1')
            }
        }
        this.setState({itemQuantity: quantityArr})
        console.log(this.state.itemQuantity[0].quantity)
    }

    renderTableCart = () =>{

        if(this.state.itemQuantity[0] !== undefined){
            return this.state.cart.map( (item) => 

            <tr>
        
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-2 hidden-xs"><img src={item.url} alt="..." className="img-responsive"/></div>
                        <div className="col-sm-10">
                            <h4 className="nomargin">{item.name}</h4>
                            <p><b>Brand:</b> {item.brand}</p>
                            <p><b>Type:</b> {item.type}</p>
                        </div>
                    </div>
                </td>

                <td data-th="Price">Rp. {item.price}</td>

                <td data-th="Quantity">
                    <input type="number" className="form-control text-center" value={this.state.itemQuantity[0].quantity} />
                </td>

                <td data-th="Subtotal" className="text-center">Rp. {item.price}</td>

                <td className="actions" data-th="">
                    <button className="btn btn-info btn-sm"><i className="glyphicon glyphicon-plus" onClick={() => this.onQuantityUpClick(item.id)}></i></button>
                    <button className="btn btn-danger btn-sm"><i className="glyphicon glyphicon-trash"></i></button>								
                </td>

            </tr>
            ); 
        }

        return this.state.cart.map( (item) => 

        <tr>
    
            <td data-th="Product">
                <div className="row">
                    <div className="col-sm-2 hidden-xs"><img src={item.url} alt="..." className="img-responsive"/></div>
                    <div className="col-sm-10">
                        <h4 className="nomargin">{item.name}</h4>
                        <p><b>Brand:</b> {item.brand}</p>
                        <p><b>Type:</b> {item.type}</p>
                    </div>
                </div>
            </td>

            <td data-th="Price">Rp. {item.price}</td>

            <td data-th="Quantity">
                <input type="number" className="form-control text-center" defaultValue="1" />
            </td>

            <td data-th="Subtotal" className="text-center">Rp. {item.price}</td>

            <td className="actions" data-th="">
                <button className="btn btn-info btn-sm"><i className="glyphicon glyphicon-plus" onClick={() => this.onQuantityUpClick(item.id)}></i></button>
                <button className="btn btn-danger btn-sm"><i className="glyphicon glyphicon-trash"></i></button>								
            </td>

        </tr>
        ); 
        
    }

    render() {
        console.log(this.state.cart );
        console.log(this.state.totalHarga );
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
