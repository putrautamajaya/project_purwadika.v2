import React, { Component } from 'react';
import { connect } from 'react-redux';

class cartPage extends Component {
    state = { 
        cart: []
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

    renderTableCart = () =>{
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
                    <input type="number" className="form-control text-center" value="1"/>
                </td>
                <td data-th="Subtotal" className="text-center">1.99</td>
                <td className="actions" data-th="">
                    <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                    <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>								
                </td>

            </tr>
        ); 
    }

    render() {
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
                        <tr className="visible-xs">
                            <td className="text-center"><strong>Total 1.99</strong></td>
                        </tr>
                        <tr>
                            <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                            <td colspan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
                            <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
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
