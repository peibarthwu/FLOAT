import styles from '../styles/Home.module.css'
import FadeIn from 'react-fade-in';
import React, { Component } from "react";
import ProjModal from './/modals';


const projData = {
  proj1: {
    title: 'FLOAT Museum @ SFMOMA',
    description: 'First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.'
  }
}

class Clients extends Component {


  constructor() {
    super();

    this.state = {
      isOpened: false,
      modalIsOpen: false,
      modalId: 0,
      title: "sample title",
      description: "sample description",
    };

    this.open = this.open.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  open() {
    if (this.state.isOpened) {
      this.setState({ isOpened: false });
    } else {
      this.setState({ isOpened: true });
    }
    console.log(this.state);
  }

  openModal(modalId) {
    switch(modalId) {
      case 1:
        this.setState({ title: "Life After B.O.B" })
        break;
      case 2:
        this.setState({ title: "United Nude" })
        break;
      case 3:
        this.setState({ title: "Glitchmob x Strangeloop" })
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
    this.setState({ modalIsOpen: false });
  };

  render() {

    return (
      <div className={styles.main} id="content">


        <FadeIn delay={200} transitionDuration={600}>
          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/iancheng.jpg")` }}>
            <div className={styles.overlay} onClick={() => this.openModal(1)}>
              <h2>
                Ian Cheng
            </h2>
            <p className={styles.hide}>
                Interaction remote for Ian Cheng&apos;s Life After B.O.B.
            </p>
            </div>
          </div>


          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/unitednude.jpg")` }}>
            <div className={styles.overlay} onClick={() => this.openModal(2)}>
              <h2>
                United Nude
          </h2>
          <p className={styles.hide}>
                AR installation at  <a href="https://unitednude.com/"> United Nudes </a> pop-up in Westfield CC. Product videos, zero-G plant-life, and reactive simulations.
          </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/glitchmob.png")` }}>
            <div className={styles.overlay} onClick={() => this.openModal(3)}>
              <h2>
                Glitchmob x Strangeloop
            </h2>
            <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>
        </FadeIn>
        <ProjModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} modalId={this.state.modalId} title={this.state.title}/>

      </div>

    );
  }

}
export default Clients;
