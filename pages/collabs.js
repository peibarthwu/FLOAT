import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';
import Modal from 'react-modal';
import React, { Component } from "react";
import {Collapse} from 'react-collapse';


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

class Collabs extends Component {
  constructor() {
    super();

    this.state = {
      isOpened:  false,
    };

    this.open = this.open.bind(this);

  } 
  
  open(){
    if(this.state.isOpened){
      this.setState({isOpened: false});
    }else{
      this.setState({isOpened: true});
    }
    console.log(this.state);
  }
  
  render() {

      return (
        <div className={styles.main} id="content">

        <FadeIn delay={200} transitionDuration={600}>
        <div className={ `${styles.paralax} ${styles.project}`} 
        style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}
        id ="floatmuseum"
        >
          <div className={styles.overlay} onClick={this.open}>
          <h2> 
          FLOAT Museum @ SFMOMA
          </h2>
          </div>
          
        </div>
        <Collapse isOpened={this.state.isOpened}>
          <div className={styles.background}>
            heeeyyyyyy
          </div>
        </Collapse>

        <div className={ `${styles.paralax} ${styles.project}` } 
        style={{ backgroundImage: `url("/assets/work/vibrant_matter.jpg")` }}
        id ="vibrant_matter"
        >
          <div className={styles.overlay}>
            <h2>
                Vibrant Matter
              </h2>
              <p>
              {/* <img src="/assets/work/vibrant_matter.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
              Interactive music VR experience, music by Toro y Moi. Originally partnering with Within, we are bringing this to 6dof devices.
              </p>
          </div>
          {/* <Modal
            isOpen={state.modalIsOpen === 'vibrant_matter'}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            appElement={document.getElementById('vibrant_matter')}
          > 
          <FadeIn delay={200} transitionDuration={600}>
          <button onClick={closeModal}>close</button>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>VIBRANT MATTER</h2>
            <div> 
              First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.
            </div>
          </FadeIn>
          </Modal> */}
        </div>

        {/* <Link href="/screensavers"> */}
        <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}>
            <div className={styles.overlay}>
            <h2>
              VR Screensavers
            </h2>
            <p>
            {/* <img src="/assets/work/vr_screensavers.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            A nostalgic playground in AR and VR - infinite realms of the classic screen saver. 
            </p>
            </div>
          </div>
          {/* </Link> */}
          </FadeIn>
        </div>

);
      }

}
export default Collabs;

// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'
// import FadeIn from 'react-fade-in';
// import Modal from 'react-modal';
// import React, { Component } from "react";


// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     width: '80%',
//     height: '60%',
//     background: '#000000',
//     color: '#777777',
//     opacity: '1'
//   },
//   button: {
//     background: '#222222',
//   }
// };


// class Collabs extends Component {

//   constructor() {
//     super();

//     this.state = {
//       open: false,
//     };
//     this.openModal = this.openModal.bind(this);
//     this.afterOpenModal = this.afterOpenModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     Modal.setAppElement(document.getElementById('content'));

//   }

//   openModal (id) {
//     this.setState({open: id}); 
//   }

//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     // subtitle.style.color = '#f00';
//   }

//   closeModal () {
//     this.setState({open: false}); 
//   }



//     render() {
//       return (
//         <div className={styles.main} id="content">
//         <FadeIn delay={200} transitionDuration={600}>
//         <div className={ `${styles.paralax} ${styles.project}`} 
//         style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}
//         >
//           <div className={styles.overlay} onClick={this.openModal('floatmuseum')}>
//           <h2> 
//           FLOAT Museum @ SFMOMA
//           </h2>
//           </div>
//           <Modal
//             // isOpen={this.state.open === 'floatmuseum'}
//             // onAfterOpen={this.afterOpenModal}
//             // onRequestClose={this.closeModal}
//             // style={customStyles}
//             // contentLabel="Example Modal"
//             show={this.state.open == 'floatmuseum'}
//             appElement={document.getElementById('content')}
//           > 
//           <FadeIn delay={200} transitionDuration={600}>
//           <button onClick={this.closeModal}>close</button>
//             <h2> FLOAT Museum @ SFMOMA</h2>
//             <div> 
//               First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.
//             </div>
//           </FadeIn>
//           </Modal>
//         </div>

//         <div className={ `${styles.paralax} ${styles.project}` } 
//         style={{ backgroundImage: `url("/assets/work/vibrant_matter.jpg")` }}>
//           <div className={styles.overlay}>
//             <h2>
//                 Vibrant Matter
//               </h2>
//               <p>
//               {/* <img src="/assets/work/vibrant_matter.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
//               Interactive music VR experience, music by Toro y Moi. Originally partnering with Within, we are bringing this to 6dof devices.
//               </p>
//           </div>
//         </div>

//         {/* <Link href="/screensavers"> */}
//         <div className={ `${styles.paralax} ${styles.project}` } 
//           style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}>
//             <div className={styles.overlay}>
//             <h2>
//               VR Screensavers
//             </h2>
//             <p>
//             {/* <img src="/assets/work/vr_screensavers.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
//             A nostalgic playground in AR and VR - infinite realms of the classic screen saver. 
//             </p>
//             </div>
//           </div>
//           {/* </Link> */}
//           </FadeIn>

//         </div>

// );
// }
// }
// export default Collabs;
