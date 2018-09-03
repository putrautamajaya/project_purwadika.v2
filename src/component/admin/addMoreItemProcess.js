import React, {Component} from 'react';

class addMoreItemProcess extends Component {


    render() {
        if (this.props.id != this.props.selectedID){

            return (
                <tr>                 
                    <td>{this.props.id}</td>
                    <td><img style={{width: "100px"}} src={this.props.url}/></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.type}</td>
                    <td>{this.props.brand}</td>
                    <td>{this.props.price}</td>
        
                    <td>
                        <input type="button" className="btn btn-warning" value="Edit" onClick={() => this.props.fnEdit()}/>
                    </td>
                    <td>
                        <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.props.fnDelete()} />
                    </td>
                </tr>
            );

        }

        else if (this.props.id == this.props.selectedID){
            
            return (
                <tr>
                    <td><textarea ref="idUpdate" defaultValue={this.props.id}/></td>
                    <td><textarea ref="urlUpdate" defaultValue={this.props.url}/></td>
                    <td><textarea ref="nameUpdate" defaultValue={this.props.name}/></td>
                    <td><textarea ref="typeUpdate" defaultValue={this.props.type}/></td>
                    <td><textarea ref="brandUpdate" defaultValue={this.props.brand}/></td>
                    <td><textarea ref="priceUpdate" defaultValue={this.props.price}/></td>
        
                    <td>
                        <input type="button" className="btn btn-success" value="Update" onClick={() => this.props.fnUpdate(this.refs)}/>
                    </td>
                    <td>
                        <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.props.fnDelete()} />
                    </td>
                </tr>
            );

        }
        
    }
}

export default addMoreItemProcess;