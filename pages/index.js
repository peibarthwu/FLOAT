import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  function showImage(image){
    console.log(Image);
    var elem = document.getElementById("targetimg");
    if(elem.getAttribute("src") != image){
      elem.classList.toggle('fade');
      elem.setAttribute("src", image);
      elem.setAttribute("width","100%");
      elem.setAttribute("alt", "Image not available");
      
    }
    // document.getElementById("image").appendChild(elem);
  }

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
      <div>
          {/* <img src="/assets/home/eclipsecore.jpeg" alt="Logo" id="targetimg" width="100%"/> */}
          <video autoPlay muted loop className={styles.video} id="targetimg">         
                <source src="/assets/home/glitchmob.mp4" type="video/mp4"/>       
          </video>
      </div>
      <div className={styles.above}>
        <h1 className={styles.title}>
            FLOAT.LAND
        </h1>
      </div>
     
      <main className={styles.main + " " + styles.above} id="content">

        <Link href="/work">
            <p className={styles.section} 
            onMouseOver={() => showImage("/assets/home/prismaticparadise.mp4")}>
            Portfolio
            </p>
        </Link>
        <Link href="/collabs">
            <p className={styles.section}>
            Collaborations
            </p>
        </Link>
        <Link href="/clients">
            <p className={styles.section}
            onMouseOver={() => showImage("/assets/home/glitchmob.mp4")}>
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
