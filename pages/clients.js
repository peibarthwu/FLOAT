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
      images: ["/assets/clients/iancheng.jpg"],
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
    switch (modalId) {
      case 1:
        this.setState({
          title: "Life After B.O.B",
          description: "life after bob description",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/unitednude.jpg",
              "/assets/clients/unitednude.jpg",
            ]
        })
        break;
      case 2:
        this.setState({
          title: "United Nude",
          description: "United Nude description",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/unitednude.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 3:
        this.setState({
          title: "Glitchmob x Strangeloop",
          description: "Glitchmob description",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/unitednude.jpg",
            ]
        })
        break;
      case 4:
        this.setState({
          title: "Tony Hawk",
          description: "Tony Hawk",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 5:
        this.setState({
          title: "Sprueth Magers + Jon Rafman",
          description: "Sprueth Magers + Jon Rafman",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 6:
        this.setState({
          title: "GitHub",
          description: "GitHub",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 7:
        this.setState({
          title: "Guirado - Rebirth",
          description: "Guirado - Rebirth",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 8:
        this.setState({
          title: "Kron",
          description: "Kron",
          images:
            [
              "/assets/clients/unitednude.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;



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
            style={{ backgroundImage: `url("/assets/clients/iancheng.jpg")` }}
            onClick={() => this.openModal(1)}>
            <h2>
              Ian Cheng
            </h2>
            <div className={styles.overlay}>
              <h2>
                Ian Cheng
            </h2>
              <p className={styles.hide}>
                Interaction remote for Ian Cheng&apos;s Life After B.O.B.
            </p>
            </div>
          </div>


          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/unitednude.jpg")` }}
            onClick={() => this.openModal(2)}>
            <h2>
              United Nude
              </h2>
            <div className={styles.overlay} >
              <h2>
                United Nude
              </h2>
              <p className={styles.hide}>
                AR installation at  <a href="https://unitednude.com/"> United Nudes </a> pop-up in Westfield CC. Product videos, zero-G plant-life, and reactive simulations.
          </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/glitchmob.png")` }}
            onClick={() => this.openModal(3)}>
            <h2 className={styles.third}>
              Glitchmob x Strangeloop
            </h2>
            <div className={styles.overlay}>
              <h2>
                Glitchmob x Strangeloop
            </h2>
              <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/glitchmob.png")` }}
            onClick={() => this.openModal(4)}>
            <h2>
              Tony Hawk
            </h2>
            <div className={styles.overlay}>
              <h2>
                Tony Hawk
            </h2>
              <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/glitchmob.png")` }}
            onClick={() => this.openModal(5)}>
            <h2>
              Jon Rafman
                          </h2>
            <div className={styles.overlay}>
              <h2>
                Jon Rafman
            </h2>
              <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/glitchmob.png")` }}
            onClick={() => this.openModal(6)}>
            <h2>
              GitHub                          </h2>
            <div className={styles.overlay}>
              <h2>
                GitHub
            </h2>
              <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/guirado_rebirth.jpeg")` }}
            onClick={() => this.openModal(7)}>
            <h2 className={styles.third}>
              Guirado - Rebirth                          </h2>
            <div className={styles.overlay}>
              <h2>
                Guirado - Rebirth
            </h2>
              <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/clients/glitchmob.png")` }}
            onClick={() => this.openModal(8)}>
            <h2>
              Kron                          </h2>
            <div className={styles.overlay}>
              <h2>
                Kron            </h2>
              <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>

        </FadeIn>
        <ProjModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} modalId={this.state.modalId} title={this.state.title} description={this.state.description} images={this.state.images} />

      </div>

    );
  }

}
export default Clients;
