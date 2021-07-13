import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  function showImage(image){
    console.log(Image);
    var elem = document.getElementById("targetimg");
    elem.setAttribute("src", image);
    elem.setAttribute("width","100%");
    elem.setAttribute("alt", "Image not available");
    document.getElementById("image").appendChild(elem);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Float.Land</title>
        <meta name="description" content="FLOAT.LAND Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"/>
      </Head>
      <h1 className={styles.title}>
          FLOAT.LAND
      </h1>
      <main className={styles.main} id="content">
        <div className={styles.image} id="image">
          <img src="/assets/eclipsecore.jpeg" alt="Logo" id="targetimg" width="100%"/>
        </div>
        <Link href="/work">
            <p className={styles.section} 
            onMouseOver={() => showImage("/assets/eclipsecore.jpeg")}>
            Portfolio
            </p>
        </Link>
        <Link href="/collabs">
            <p className={styles.section}
            onMouseOver={() => showImage("/assets/bloom.jpeg")}>
            Collaborations
            </p>
        </Link>
        <Link href="/clients">
            <p className={styles.section}
            onMouseOver={() => showImage("/assets/glitchmob.png")}>
            Client Work
            </p>
        </Link>
        <Link href="/research">
            <p className={styles.section}>
            Research
            </p>
        </Link>
        <Link href="/about">
            <p className={styles.section}>
            About
            </p>
        </Link>
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
