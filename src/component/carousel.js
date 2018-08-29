import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../support/images/imgCarousel1.jpg';
import image2 from '../support/images/imgCarousel2.jpg';
import image3 from '../support/images/imgCarousel3.jpg';
import '../support/logo.css';

class carouselProject extends Component {
    render(){
        return(
        <div>
            <br/>
            <br/>
            <br/>
        

        <div className="row">

            <div className="col-sm-2 logoArea">
            <div className="backGroundLightGray">
                <img className="logoSize"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmXckW_q6TYlumVI2J2ujuXRfWtqzlFv0Lzw8UhBoDY8CtcxXeg"/>
            </div>
            <div className="backGroundSilver">
            <img className="logoSize" src="https://img.grouponcdn.com/coupons/gMH7PGJwA4KdS3teZNvpXD/nike-highres-500x500"/>
            </div>
            <div className="backGroundLightGray">
            <img className="logoSize" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyBP4L_asgymmJGaDSUgviHwDr-2cS8Q5xdJSu6V6h9TA4ErAtA"/>
            </div>

            <div className="backGroundSilver">
            <img className="logoSize" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/102010/new_balance.gif?itok=0Y_RkIur"/>
            </div>

            <div className="backGroundLightGray">
            <img className="logoSize" src="http://multimedia.lynden.wednet.edu/logos/reebok_logo.gif"/>
            </div>
        
            </div>
            
            
            <div className="col-sm-10">
                <Carousel prevIcon={false} nextIcon={false} className="container">
                    <Carousel.Item style={{ height: "500px", overflow: "hidden"}}>
                        <img style={{ width: "100%"}} src="https://cdn.vox-cdn.com/thumbor/_T9VGloBPDNa_7WXs5QCyWA6d3c=/0x0:1100x630/1200x800/filters:focal(465x196:641x372)/cdn.vox-cdn.com/uploads/chorus_image/image/58744353/Screen_Shot_2018_02_19_at_11.56.59_AM.0.png" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "500px", overflow: "hidden"}}>
                        <img style={{ width: "100%"}} src="https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-GB-Library/en/dwa17d4964/brand/images/2018/01/originals-ss18-eqt-bb-hp-mh-d_233727.jpg?sw=1366&sh=830&sm=fit&cx=0&cy=0&cw=1366&ch=831&sfrm=jpg" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "500px", overflow: "hidden"}}>
                        <img style={{ width: "100%"}} src="https://www.mensjournal.com/wp-content/uploads/mf/rock-under-armor-4-1280.jpg" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
        </div>
            
        );
    }
}

export default carouselProject;