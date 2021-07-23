import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';



export default function Work() {
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
      <div className={ `${styles.above} ${styles.relative}`}>
      <h1 className={styles.title}>
              <Link href="/">
              FLOAT.LAND 
              </Link>
              <i>
                <Link href="#worksection">.Portfolio</Link>
                <Link href="#clientsection">.Clients</Link>
                <Link href="#collabsection">.Collabs</Link>
              </i>
      </h1>
      <div className={styles.fullscreenText}>
          <p>
            FLOAT LAND is a pioneering studio which innovates across digital media including video, VR, AR, and more. We develop awe-inspiring experiences from end-to-end, and provide targeted services for businesses and platforms wanting more interactive, impactful projects.
          </p>
        </div>
      </div>
      <div>
          <video autoPlay muted loop className={styles.fullscreen} id="targetimg">         
                <source src="/assets/home/glitchmob.mp4" type="video/mp4"/>       
          </video>
      </div>

    
      <div className={styles.above}>
        <h1 className={styles.workSectionTitle}>
          <a id="worksection">
              Work
          </a>
        </h1>

    <div className={styles.main}>
        <FadeIn delay={200} transitionDuration={600}>
          <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/work/prismatic_paradise.jpg")` }}>
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
            {/* <img src="/assets/work/vr_screensavers.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            </p>
            </div>
          </div>
          </FadeIn>
      </div>

      <h1 className={styles.workSectionTitle}>
      <a id="clientsection">
          Clients
      </a>
      </h1>

      <div className={styles.main}>
      <FadeIn delay={200} transitionDuration={600}>
        <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/clients/iancheng.jpg")` }}>
            <div className={styles.overlay}>
            <h2>
              Ian Cheng
            </h2>
            <p>
            {/* <img src="/assets/clients/iancheng.jpg" alt="Logo" class="fullSizeImage"/> */}
                Interaction remote for Ian Cheng&apos;s Life After B.O.B.
            </p>
            </div>
          </div>

        <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/clients/unitednude.jpg")` }}>
          <div className={styles.overlay}>
          <h2>
            United Nude
          </h2>
          <p>
          {/* <img src="/assets/clients/unitednude.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
          AR installation at  <a href="https://unitednude.com/"> United Nudes </a> pop-up in Westfield CC. Product videos, zero-G plant-life, and reactive simulations.
          </p>
          </div>
        </div>

        <div className={ `${styles.paralax} ${styles.project}` } 
        style={{ backgroundImage: `url("/assets/clients/glitchmob.png")` }}>
            <div className={styles.overlay}>
            <h2>
              Glitchmob x Strangeloop
            </h2>
            <p>
                Details ...
            </p>
            </div>
          </div>
          </FadeIn>
      </div>

      <h1 className={styles.workSectionTitle}>
          <a id="collabsection">
              Collabs
          </a>
      </h1>
      <div className={styles.main}>
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
        </div>        

        <footer className={styles.footer}>
            Footer text here{' '}
            <span className={styles.logo}>
              {/* <Image src="/logo.png" alt="FLOAT Logo" width={72} height={16} /> */}
            </span>
        </footer>
      </div>
    </div>
  )
}