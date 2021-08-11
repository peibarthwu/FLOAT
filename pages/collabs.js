import styles from '../styles/Home.module.css'
import FadeIn from 'react-fade-in';
import React, { Component } from "react";
import ProjModal from './/modals';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%',
    background: '#000000',
    color: '#777777',
    opacity: '1'
  },
  button: {
    background: '#222222',
  }
};

const projData = {
  proj1: {
    title: 'FLOAT Museum @ SFMOMA',
    description: 'First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.'
  }
}

class Collabs extends Component {

  
  constructor() {
    super();

    this.state = {
      isOpened:  false,
      modalIsOpen: false,
      modalId: 0,
      title: "default title"
    };

    this.open = this.open.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  } 
  
  open(){
    if(this.state.isOpened){
      this.setState({isOpened: false});
    }else{
      this.setState({isOpened: true});
    }
    console.log(this.state);
  }
  
  openModal(modalId) {
    switch(modalId) {
      case 1:
        this.setState({ title: "FLOAT Museum @ SFMOMA" })
        break;
      case 2:
        this.setState({ title: "Vibrant Matter" })
        break;
      case 3:
        this.setState({ title: "VR Screensavers" })
        break;
      default:
        text = "title";
    }
    this.setState({
      modalId,
      modalIsOpen: true
    });
  };

  closeModal() {
    this.setState({modalIsOpen: false});
  };

  render() {

      return (
        <div className={styles.main} id="content">


        <FadeIn delay={200} transitionDuration={600}>
        <div className={ `${styles.paralax} ${styles.project}`} 
        style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}
        id ="floatmuseum"
        >
          <div className={styles.overlay} onClick={() => this.openModal(1) }>
          <h2 > 
          FLOAT Museum @ SFMOMA
          </h2>
          <p className={styles.hide}>
              Interactive music VR experience, music by Toro y Moi. Originally partnering with Within, we are bringing this to 6dof devices.
          </p>
          </div>
          

        </div>
        
        <div className={ `${styles.paralax} ${styles.project}` } 
        style={{ backgroundImage: `url("/assets/work/vibrant_matter.jpg")` }}
        id ="vibrant_matter"
        >
          <div className={styles.overlay} onClick={() => this.openModal(2) }>
            <h2>
                Vibrant Matter
              </h2>
              <p className={styles.hide}>
              {/* <img src="/assets/work/vibrant_matter.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
              Interactive music VR experience, music by Toro y Moi. Originally partnering with Within, we are bringing this to 6dof devices.
              </p>
          </div>
        </div>

        {/* <Link href="/screensavers"> */}
        <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}>
          <div className={styles.overlay} onClick={() => this.openModal(3) }>
            <h2>
              VR Screensavers
            </h2>
            <p className={styles.hide}>
            {/* <img src="/assets/work/vr_screensavers.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            A nostalgic playground in AR and VR - infinite realms of the classic screen saver. 
            </p>
            </div>
          </div>
          {/* </Link> */}
          </FadeIn>
          <ProjModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} modalId={this.state.modalId} title={this.state.title}/>

        </div>

);
      }

}
export default Collabs;