import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';
import Collabs from './/collabs';
import React, { Component } from "react";


class Work extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      popupid: null
    };

    this.showPopup = this.showPopup.bind(this);

  }

  showPopup(id){
    this.setState({
      show: !this.state.show,
    });
  }

  render(){ 
    return(
    <div className={styles.above}>
    <div className={styles.main}>
          <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/work/prismatic_paradise.jpg")` }}
          onClick={this.showPopup}
          >
            <div className={styles.overlay}>
            <h2>
              Prismatic Paradise
            </h2>
            <p>
            {/* <img src="/assets/work/prismatic_paradise.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            Part of Summer Sweet Wave exhibition on the massive SVLA1 screen, downtown Los Angeles.
            </p>
            </div>
          </div>
          {this.state.show ? <div className={`${styles.overlay} ${styles.fullscreen}`}>
          <div className={styles.popup}> heyyy</div> </div> : null} 


          <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/work/eclipse_core.jpg")` }}>
            <div className={styles.overlay}>
            <h2>
            Eclipse Core
            </h2>
            <p>
            Video exhibited as part of the Eclipsecore exhibition curated by Rick Silva.
            </p>
            </div>
          </div>

          <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/work/bloom.jpg")` }}>
            <div className={styles.overlay}>
            <h2>
            Bloom
            </h2>
            <p>
            Details ...
            </p>
            </div>
          </div>

          <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/work/liminal_realities.jpg")` }}>
            <div className={styles.overlay}>
            <h2>
             Liminal Realities
            </h2>
            <p>
            3VR: Liminal Realities is an exploration of visual music and optical illusion. Originally titled THREE² x 3P2: VR, the piece was first created for UFO Gallery&apos;s inaugural Pop-Up show, hosted in the former Perry Rubenstein gallery.

It has been curated into various showcases including the Toronto Film Festival&apos;s TIFFxPOP series, Oculus DevLab, Slamdance, SXSW, and VR Scout&apos;s VR Art Show, hosted by VICE and Pulse.
            </p>
            </div>
          </div>
      </div>
      </div>
  );
}
}
export default  Work ;