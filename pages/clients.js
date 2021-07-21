import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function FirstPost() {
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
            FLOAT.LAND 
            <i>
              .Clients
            </i>
        </h1>
        <main className={styles.main} id="content">
        
        <div className={styles.parallaxcontainer} >
          <div className={styles.background} >
            <img src="/assets/clients/iancheng.jpg" alt="Logo" class="fullSizeImage"/>
          </div>
          <div className={styles.foreground} >
            hey
          </div>
        </div>
          <div className={styles.card}  >
            <h2>
              Ian Cheng
            </h2>
            <p>
            <img src="/assets/clients/iancheng.jpg" alt="Logo" class="fullSizeImage"/>
                Details ...
            </p>
          </div>

          <div className={styles.card}>
            <h2>
              Tony Hawk
            </h2>
            <p>
            A VR time capsule with photogrammetry, holographic video, spatial audio and easter eggs.
            </p>
          </div>

          <div className={styles.card}>
            <h2>
              GitHub
            </h2>
            <p>
                Details ...
            </p>
          </div>

          <div className={styles.card} style={{ backgroundImage: `url("/assets/clients/unitednude.jpg")` }}>
            <h2>
              United Nude
            </h2>
            <p>
            {/* <img src="/assets/clients/unitednude.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
            AR installation at  <a href="https://unitednude.com/"> United Nude's </a> pop-up in Westfield CC. Product videos, zero-G plant-life, and reactive simulations.
            </p>
          </div>

          <div className={styles.card}>
            <h2>
              Glitchmob x Strangeloop
            </h2>
            <p>
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