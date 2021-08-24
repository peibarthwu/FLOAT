
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

class DemoCarousel extends Component {
    
    constructor() {
        super();
        // console.log(this.props.array);
        // const images = this.props.array.map(image => {
        //     return <Image key={image} src={image} className="img-responsive" />
        //  });

        //  console.log(images);
    }
    render() {
        if (this.props && this.props.images && this.props.images.length > 0){
            return( <Carousel showStatus={false} showThumbs={false}>
                {/* <div>
                    <img src={"/assets/clients/iancheng.jpg"}/>
                </div> */}
                {this.props.images.map(function(img){
                    return <div key={img} > <img src={img} ></img></div>
                })}
            </Carousel>);
        }
        else{
            return <div/>
        }
    }
}
export default DemoCarousel;
