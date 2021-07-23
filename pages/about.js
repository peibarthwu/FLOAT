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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <h1 className={styles.title}>
        <Link href="/">
            FLOAT.LAND 
        </Link>
            <i>
              .About
            </i>
        </h1>
        <main className={styles.main} id="content">
        <div className={styles.info}>
        <p>
        <span>
        FLOAT IS A COLLABORATIVE ENTITY FOCUSING ON THE INTERSECTION OF ART AND INTERACTIVITY. 
        FOUNDERS BEN VANCE AND KATE PARSONS WORK TOGETHER TO CREATE EVOCATIVE, NUANCED ART EXPERIENCES.
        <br></br><br></br>


          </span>
          <span>
          Ben Vance is a VR veteran and director who explores art and design through emerging technology. 
          He has worked with Electronic Arts, independent game studios, VR startups, museums, galleries, and with hummingbirds on back patios surrounded by succulents. 
          He is a founding member of Glitch City, a pioneering art and game collective based in LA, and Buffalo Vision, his studio dedicated to games and interactive VR.
          <br></br>
          <br></br>

          His work has been shown worldwide at Sundance, IndieCade, NAB Shanghai, and TIFF. His thoughtful and surprising interaction design stem from a lifelong pursuit of fine art and button pushing.
          </span>     
          <span>
            <br></br><br></br>
          Kate Parsons is a video artist and educator living in Los Angeles. She obtained her M.F.A. in Media Arts from UCLA, and completed her M.A. in Digital Art and Video from CSUN. 
          She is the Director of Femmebit, a video art festival celebrating LA-based female artists working in video and new media. 
          She is currently Visiting Assistant Professor at Pepperdine University and adjunct Instructor at Art Center College of Design.
          <br></br>
          <br></br>

          She has had the pleasure of working with director Mark Pellington and musicians such as Silversun Pickups, Toro Y Moi, Kid606, and Daedelus, as well as brands such as Aston Martin and T-Mobile.
          </span>
          </p>
        </div>
       
        </main>

        <footer className={styles.footer}>
          
            {/* <img src="/assets/icons/logofooter.png" alt="FLOAT Logo"/> */}
        </footer>
      </div>
  )
}