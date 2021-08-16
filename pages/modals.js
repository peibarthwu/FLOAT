import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/Home.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import ImageGallery from 'react-image-gallery';
import ImageSlider from './/imageslider';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '80%',
    background: '#000000',
    color: '#777777',
    opacity: '1',
    border: '1px solid #000',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
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

    // this.state = {
    //   images: this.props.images,
    // };
  }

  componentDidMount() {
    if (this.props.modalIsOpen) {
      console.log("opened");
      document.body.style.overflow = 'hidden';
    }
    console.log(this.props.images)

  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }


  render() {
    return (
      <React.Fragment>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          {/* <div className="modal-wrapper">
            <div className="container text-center"> */}
              <div className={styles.datacontainer}>
              <div className={styles.datachild}>
                <h1>{this.props.title}</h1>
                <h2>ID of this modal is {this.props.title}</h2>
                <h3>{this.props.description}</h3>
                {/* <button onClick={this.props.closeModal}>close</button> */}
              </div>
              <div className={styles.datachild}>
                {/* <SimpleImageSlider
                style={{ margin: '0 auto', marginTop: '50px', overflow: 'hidden' }}
                width={width}
                height={height}
                showNavs={true}
                  images={this.props.images}
                /> */}
                 {/* <SimpleImageSlider images={this.props.images} width={this.state.dimensions.width/4} width={this.state.dimensions.height/4}/>; */}
                 <ImageSlider images={this.props.images}></ImageSlider>
              </div>
              </div>
            {/* </div>
          </div> */}
        </Modal>
      </React.Fragment>
    )
  }
}