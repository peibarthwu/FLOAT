import React, { Component, useState } from "react";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

// class ImageSlider extends Component {

//     ImageSlider.propTypes = {
//         imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
//       };

//     constructor() {
//         super();
//         this.state = {
//             value: 0,
//         }


//         // const [value, setValue] = useState(0);
//     }



// render() {
//   return(
//   <div>
//   <div className={styles.sliderContainer}>
//     <img src = {this.props.array[1]} alt={this.props.array[0]}/>
//     <div>
//     {/* <button type="button" onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}><BsArrowLeft /></button>
//     <button type="button" onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}><BsArrowRightShort /></button> */}
//     </div>
//   </div>
//   </div>
//   );
// }
// }
// export default ImageSlider;

const ImageSlider = ({ images }) => { // takes in images as props
    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0
    console.log(images[index]);
    const slideRight = () => {
        setIndex((index + 1) % images.length); // increases index by 1
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1); // returns last index of images array if index is less than 0
        } else {
            setIndex(nextIndex);
        }
    };

    return (
        images.length > 0 && (
            <div className={styles.sliderContainer}>
                <img src={images[index]} alt={index} />
                <button onClick={slideLeft}>{"<"}</button>
                <button onClick={slideRight}>{">"}</button>
            </div>
        )
    );
};

export default ImageSlider;