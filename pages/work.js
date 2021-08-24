import styles from '../styles/Home.module.css'
import FadeIn from 'react-fade-in';
import React, { Component } from "react";
import ProjModal from './/modals';

class Work extends Component {


  constructor() {
    super();

    this.state = {
      isOpened: false,
      modalIsOpen: false,
      modalId: 0,
      title: "default title",
      description: "",
      images: [],
      video: null,
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
          title: "Prismatic Paradise",
          description: "FLOAT Museum description",
          images:
            [
              "/assets/work/PrismaticParadise1.jpg",
              "/assets/work/PrismaticParadise2.jpeg",
              "/assets/work/prismaticstill.png",
            ]
        })
        break;
      case 2:
        this.setState({
          title: "Eclipse Core",
          description: "FLOAT Museum description",
          images:
            [
              "/assets/work/eclipsestill.png",
              "/assets/work/eclipsestill2.png",
            ]
        })
        break;
      case 3:
        this.setState({
          title: "Bloom",
          description: "FLOAT Museum description",
          images:
            [
              "/assets/clients/iancheng.jpg",
              "/assets/clients/iancheng.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 4:
        this.setState({
          title: "Liminal Realities",
          description: "Liminal Realities description",
          images:
            [
              "/assets/work/LiminalRealities1.jpg",
              "/assets/work/LiminalRealities2.png",
            ]
        })
        break;
      case 5:
        this.setState({
          title: "Dark Spring",
          description: "Dark Spring description",
          images:
            [
              "/assets/work/DarkSpring.png",
              "/assets/work/KateParsons_inDarkSpring.jpg",
              "/assets/work/TheDarkSpring.jpg",
            ]
        })
        break;
      case 6:
        this.setState({
          title: "Acute Arts",
          description: "Acute Arts",
          images:
            [
              "/assets/clients/iancheng.jpg",
              "/assets/clients/iancheng.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 7:
        this.setState({
          title: "Color Baths",
          description: "Color Baths",
          images:
            [
              "/assets/work/ColorBaths.jpg",
              "/assets/clients/iancheng.jpg",
              "/assets/clients/iancheng.jpg",
            ]
        })
        break;
      case 8:
        this.setState({
          title: "Foundation Profile",
          description: "Foundation Profile",
          images:
            [
              "/assets/clients/iancheng.jpg",
              "/assets/clients/iancheng.jpg",
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
            style={{ backgroundImage: `url("/assets/work/prismatic_paradise.jpg")` }}
            onClick={() => this.openModal(1)}
          >
            <h2  >
              Prismatic Paradise
            </h2>
            <div className={styles.overlay} >
              <h2>
                Prismatic Paradise
            </h2>
              <p className={styles.hide}>
                {/* <img src="/assets/work/prismatic_paradise.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            Part of Summer Sweet Wave exhibition on the massive SVLA1 screen, downtown Los Angeles.
            </p>
            </div>
          </div>


          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/eclipse_core.jpg")` }}
            onClick={() => this.openModal(2)}>
            <h2>
              Eclipse Core
            </h2>
            <div className={styles.overlay} >
              <h2>
                Eclipse Core
            </h2>
              <p className={styles.hide}>
                Video exhibited as part of the Eclipsecore exhibition curated by Rick Silva.
            </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/bloom.jpg")` }}
            onClick={() => this.openModal(3)}>
            <h2>
              Bloom
            </h2>
            <div className={styles.overlay} >
              <h2>
                Bloom
            </h2>
              <p className={styles.hide}>
                Details ...
            </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/liminal_realities.jpg")` }}
            onClick={() => this.openModal(4)}>
            <h2>
              Liminal Realities
            </h2>
            <div className={styles.overlay} >
            <h2>
                Liminal Realities
            </h2>
              <p className={styles.hide}>
                3VR: Liminal Realities is an exploration of visual music and optical illusion.
                {/* It has been curated into various showcases including the Toronto Film Festival&apos;s TIFFxPOP series, Oculus DevLab, Slamdance, SXSW, and VR Scout&apos;s VR Art Show, hosted by VICE and Pulse. */}
              </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/KateParsons_inDarkSpring.jpg")` }}
            onClick={() => this.openModal(5)}>
            <h2>
              Dark Spring
            </h2>
            <div className={styles.overlay} >
              <h2>
                Dark Spring
            </h2>
              <p className={styles.hide}>
                info                {/* It has been curated into various showcases including the Toronto Film Festival&apos;s TIFFxPOP series, Oculus DevLab, Slamdance, SXSW, and VR Scout&apos;s VR Art Show, hosted by VICE and Pulse. */}
              </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/liminal_realities.jpg")` }}
            onClick={() => this.openModal(6)}>
            <h2>
              Acute Art
            </h2>
            <div className={styles.overlay} >
              <h2>
                Acute Art
            </h2>
              <p className={styles.hide}>

                info                {/* It has been curated into various showcases including the Toronto Film Festival&apos;s TIFFxPOP series, Oculus DevLab, Slamdance, SXSW, and VR Scout&apos;s VR Art Show, hosted by VICE and Pulse. */}
              </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/ColorBaths.jpg")` }}
            onClick={() => this.openModal(7)}>
            <h2>
              Color Baths
            </h2>
            <div className={styles.overlay} >
              <h2>
                Color Baths
            </h2>
              <p className={styles.hide}>

                info                {/* It has been curated into various showcases including the Toronto Film Festival&apos;s TIFFxPOP series, Oculus DevLab, Slamdance, SXSW, and VR Scout&apos;s VR Art Show, hosted by VICE and Pulse. */}
              </p>
            </div>
          </div>

          <div className={`${styles.paralax} ${styles.project}`}
            style={{ backgroundImage: `url("/assets/work/liminal_realities.jpg")` }}
            onClick={() => this.openModal(8)}>
            <h2>
              Foundation Profile
            </h2>
            <div className={styles.overlay} >
              <h2>
                Foundation Profile
            </h2>
              <p className={styles.hide}>

                info                {/* It has been curated into various showcases including the Toronto Film Festival&apos;s TIFFxPOP series, Oculus DevLab, Slamdance, SXSW, and VR Scout&apos;s VR Art Show, hosted by VICE and Pulse. */}
              </p>
            </div>
          </div>
        </FadeIn>
        <ProjModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} modalId={this.state.modalId} title={this.state.title} description={this.state.description} images={this.state.images} />

      </div>

    );
  }

}
export default Work;
