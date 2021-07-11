import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  function showImage(image){
    var e = document.getElementById("content");
    e.style.backgroundImage = image;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Float.Land</title>
        <meta name="description" content="FLOAT.LAND Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
      </Head>
      <h1 className={styles.title}>
          FLOAT.LAND
      </h1>
      <main className={styles.main} id="content">
        <p className={styles.section} onMouseOver={() => showImage("assets/picture2.jpg")}>
         Portfolio
        </p>
        <p className={styles.section}>
         Collaborations
        </p>
        <Link href="/clients">
          <p className={styles.section}>
          Client Work
          </p>
        </Link>
        <p className={styles.section}>
         Research
        </p>
        <p className={styles.section}>
         About
        </p>
      </main>

      <footer className={styles.footer}>
          Footer text here{' '}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="FLOAT Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}
