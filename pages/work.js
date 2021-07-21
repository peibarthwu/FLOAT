import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Work() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Float.Land</title>
          <meta name="description" content="FLOAT.LAND Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet"/>
        </Head>
        <h1 className={styles.title}>
            <Link href="/">
            FLOAT.LAND 
            </Link>
            <i>
              .Work
            </i>
        </h1>
        <main className={styles.main} id="content">
        <div className={styles.card} style={{ backgroundImage: `url("/assets/work/vibrant_matter.jpg")` }}>
            <h2>
              Vibrant Matter
            </h2>
            <p>
            {/* <img src="/assets/work/vibrant_matter.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            Interactive music VR experience, music by Toro y Moi. Originally partnering with Within, we are bringing this to 6dof devices.
            </p>
          </div>

          <div className={styles.card} style={{ backgroundImage: `url("/assets/work/prismatic_paradise.jpg")` }}>
            <h2>
              Prismatic Paradise
            </h2>
            <p>
            {/* <img src="/assets/work/prismatic_paradise.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            Part of "Summer Sweet Wave" exhibition on the massive SVLA1 screen, downtown Los Angeles.
            </p>
          </div>

          <div className={styles.card} style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}>
            <h2>
              VR Screensavers
            </h2>
            <p>
            {/* <img src="/assets/work/vr_screensavers.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            A nostalgic playground in AR & VR - infinite realms of the classic screen saver. 
            </p>
          </div>

          <div className={styles.card}>
            <h2>
              FLOAT Museum @ SFMOMA
            </h2>
            <p>
            First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.
            </p>
          </div>

          <div className={styles.card} style={{ backgroundImage: `url("/assets/work/eclipse_core.jpg")` }}>
            <h2>
              Eclipse Core
            </h2>
            <p>
            {/* <img src="/assets/work/eclipse_core.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
                Details ...
            </p>
          </div>
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