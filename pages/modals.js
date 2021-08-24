import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/Home.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import DemoCarousel from './/imagemap';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '80vh',
    background: '#000000',
    color: '#777777',
    opacity: '1',
    border: '1px solid #000',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    position: 'absolute',
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: 'rgba(30, 30, 30, 0.75)'
  }
};

var width = 0;
var height = 0;


Modal.setAppElement('body');



export default class ProjModal extends React.Component {
  constructor(props) {
    super(props);

  }
  

  componentDidMount() {
    console.log("mount");
    if (this.props.modalIsOpen) {
      console.log("opened");
      document.body.style.overflow = 'hidden';
      console.log(document.body.style.overflow);
    }
  }

  componentWillUnmount() {
      document.body.style.overflow = 'unset';
      console.log(document.body.style.overflow);

  }


  render() {
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >

              <div className={styles.datacontainer}>
              <div className={styles.datachild}>
                <h1>{this.props.title}</h1>
                <h2>ID of this modal is {this.props.title}</h2>
                <h3>{this.props.description}</h3>
                {/* <button onClick={this.props.closeModal}>close</button> */}
              </div>
              <div className={styles.sliderContainer}>
                 {/* <ImageSlider images={this.props.images}></ImageSlider> */}
                 <DemoCarousel images={this.props.images}/>
              </div>
              </div>
        </Modal>
    )
  }
}