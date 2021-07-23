import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';


export default function Collabs() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Float.Land</title>
          <meta name="description" content="FLOAT.LAND Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <h1 className={styles.title}>
          <Link href="/">
            FLOAT.LAND 
            </Link>
            <i>
              .Collabs
            </i>
        </h1>
        <main className={styles.main} id="content">
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

        <Link href="/screensavers">
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
          </Link>
          </FadeIn>

        </main>

        <footer className={styles.footer}>
            Footer text here{' '}
            <span className={styles.logo}>
              {/* <Image src="/logo.png" alt="FLOAT Logo" width={72} height={16} /> */}
            </span>
        </footer>
      </div>
  )
}