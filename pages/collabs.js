import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';


export default function Collabs() {
  return (
    // <div className={ `${styles.paralax} ${styles.project}` } 
    //   style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}>
    //     <div className={styles.overlay}>
    //     <h2>
    //     FLOAT Museum @ SFMOMA
    //     </h2>
    //     <p>
    //     First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.
    //     </p>
    //     </div>
    //   </div>
        <div className={styles.main} id="content">
        <FadeIn delay={200} transitionDuration={600}>

        <div className={ `${styles.paralax} ${styles.project}` } 
        style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}>
          <div className={styles.overlay}>
          <h2>
          FLOAT Museum @ SFMOMA
          </h2>
          <p>
          First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.
          </p>
          </div>
        </div>

        <div className={ `${styles.paralax} ${styles.project}` } 
        style={{ backgroundImage: `url("/assets/work/vibrant_matter.jpg")` }}>
          <div className={styles.overlay}>
            <h2>
                Vibrant Matter
              </h2>
              <p>
              {/* <img src="/assets/work/vibrant_matter.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
              Interactive music VR experience, music by Toro y Moi. Originally partnering with Within, we are bringing this to 6dof devices.
              </p>
          </div>
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

       
  )
}