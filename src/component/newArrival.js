import React, { Component } from 'react';
import '../support/newArrival.css';

class newArrival extends Component {
    newArrival = () => {
        return (
            <div className="container-fluid">
                <h1>New Arrival</h1>
                <hr className="line" />

                <div className="row">

                    <div className="col-sm-3 ">
                        <div class="card" style={{width: "18rem"}}>
                            <img class="card-img-top imgSize" src="https://www.adidas.com.au/dis/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw295ffd1e/zoom/CQ2405_01_standard.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 ">
                        <p>hola</p>
                    </div>
                    <div className="col-sm-3 ">
                        <p>hola</p>
                    </div>
                    <div className="col-sm-3 ">
                        <p>hola</p>
                    </div>

                </div>

                    
                
                
            </div>
        );
    }

    render() {
        return (
            this.newArrival()
        );
    }
}

export default newArrival;