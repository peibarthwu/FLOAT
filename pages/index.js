
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Portfolio from './/portfolio'
import Image from 'next/image'
import floaticon from "../public/assets/icons/logofooter.png"


export default function Home() {

  function showImage(image) {
    var elem = document.getElementById("targetimg");
    if (elem.getAttribute("src") != image) {
      elem.setAttribute("src", image);
      elem.setAttribute("width", "100%");
      elem.setAttribute("alt", "Image not available");
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Float.Land</title>
        <meta name="description" content="FLOAT.LAND Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <video autoPlay muted loop className={styles.fullscreen} id="targetimg">
          <source src="/assets/home/glitchmob.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.above}>
        <h1 className={styles.title}>
        {/* <img src="/assets/icons/logofooter.png" alt="Girl in a jacket" width='20%'/> */}
        {/* FLOAT.LAND */}
        <Image src={floaticon} alt="FLOAT.LAND" />
        </h1>
      </div>

      <main className={styles.above} id="content">
        <Portfolio />
        {/* <Link href="/research">
          <div className={styles.section}>
            <p>
              RESEARCH
              </p>
          </div>
        </Link>
        <Expand>
        </Expand> */}
        <Link href="/about">
          <div className={styles.section}>
            <p>
              ABOUT
              </p>
          </div>
        </Link>
      </main>

      <footer className={styles.footer}>
        Footer text here{' '}
      </footer>
    </div>
  )
}
