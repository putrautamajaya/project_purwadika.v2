import React, {Component} from 'react';

class cartPageItem extends Component {


    render() {
        if (this.props.id != this.props.selectedID){

            return (
                <tr>
    
                    <td data-th="Product">
                        <div className="row">
                            <div className="col-sm-2 hidden-xs"><img src={this.props.url} alt="..." className="img-responsive"/></div>
                            <div className="col-sm-10">
                                <h4 className="nomargin">{this.props.name}</h4>
                                <p><b>Brand:</b> {this.props.brand}</p>
                                <p><b>Type:</b> {this.props.type}</p>
                            </div>
                        </div>
                    </td>

                    <td data-th="Price">Rp. {this.props.price}</td>

                    <td data-th="Quantity">
                        <input type="number" ref={`ref${this.props.id}`} className="form-control text-center" defaultValue="1" disabled/>
                    </td>

                    <td data-th="Subtotal" className="text-center">Rp. {this.props.price}</td>

                    <td className="actions" data-th="">
                        <input type="button" className="btn btn-warning btn-sm" value="Edit" onClick={this.props.fnEdit} />
                        <button className="btn btn-danger btn-sm"><i className="glyphicon glyphicon-trash"></i></button>								
                    </td>

                </tr>
            );

        }

        else if (this.props.id == this.props.selectedID){
            
            return (
                <tr>
    
                    <td data-th="Product">
                        <div className="row">
                            <div className="col-sm-2 hidden-xs">
                                <img src={this.props.url} alt="..." className="img-responsive"/>
                                <input type="hidden" ref="updateUrl" defaultValue={this.props.url} />
                            </div>
                            
                            <div className="col-sm-10">
                                <h4 className="nomargin">      <input type="text" ref="updateName" defaultValue={this.props.name} disabled/>   </h4>
                                <span><b>Brand:</b>            <input type="text" ref="updateBrand" defaultValue={this.props.brand} disabled/>  </span>
                                <span><b>Type:</b>             <input type="text" ref="updateType" defaultValue={this.props.type} disabled/>   </span>
                            </div>
                        </div>
                    </td>

                    <td data-th="Price">Rp. <input type="text" ref="updatePrice" defaultValue={this.props.price} disabled/> </td>

                    <td data-th="Quantity">
                        <input type="number" ref="updateQuantity" className="form-control text-center" defaultValue="1" />
                    </td>

                    <td data-th="Subtotal" className="text-center">Rp. {this.props.price}</td>

                    <td className="actions" data-th="">
                    <input type="button" className="btn btn-info btn-sm" value="Update" onClick={() => this.props.fnUpdate(this.refs)} />
                        <button className="btn btn-danger btn-sm" ><i className="glyphicon glyphicon-trash"></i></button>								
                    </td>

                </tr>

            );

        }
        
    }
}

export default cartPageItem;