import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/Home.module.css';


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

// overlay: {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, 0.75)'
// },
// content: {
//   position: 'absolute',
//   top: '40px',
//   left: '40px',
//   right: '40px',
//   bottom: '40px',
//   border: '1px solid #ccc',
//   background: '#000',
//   overflow: 'auto',
//   WebkitOverflowScrolling: 'touch',
//   borderRadius: '4px',
//   outline: 'none',
//   padding: '20px'
// }
// };


Modal.setAppElement('body');

export default class ProjModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {    
    if(this.props.modalIsOpen){
      console.log("opened");
      document.body.style.overflow = 'hidden';
    }    
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
              contentLabel="Meal Modal"
            >
              <div className="modal-wrapper">
                <div className="container text-center">
                  <h1>{this.props.title}</h1>
                  <h2>ID of this modal is {this.props.title}</h2>
                  <h3>Details</h3>
                    {/* <button onClick={this.props.closeModal}>close</button> */}
                </div>
              </div>
      </Modal>      
      </React.Fragment>
    )
  }
}