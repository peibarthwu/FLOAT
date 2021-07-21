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
        
          <div className={styles.paralax + ' ' + styles.project} 
          style={{ backgroundImage: `url("/assets/clients/iancheng.jpg")` }}>
            <div className={styles.overlay}>
            <h2>
              Ian Cheng
            </h2>
            <p>
            {/* <img src="/assets/clients/iancheng.jpg" alt="Logo" class="fullSizeImage"/> */}
                Details ...
            </p>
            </div>
          </div>
          {/* <div className={styles.info}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit quam non orci aliquam imperdiet. Sed vel ipsum ac massa hendrerit bibendum. In commodo sit amet mi a dapibus. Nullam vestibulum congue eros, posuere fringilla felis condimentum semper. Maecenas porttitor dignissim scelerisque. Curabitur ac viverra quam, ut auctor metus. Suspendisse varius, sapien eu cursus vulputate, ante lacus lacinia arcu, ut convallis est erat ut nulla. Cras tempus vel dolor a auctor. Vestibulum aliquet purus felis, et ullamcorper risus placerat et.</p>
        <p>Donec non pharetra leo. Integer nec tortor nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae massa iaculis, cursus lorem accumsan, iaculis libero. Phasellus consequat id lectus sit amet auctor. Maecenas tristique arcu sem, sed pretium nulla gravida ut. Nulla a dictum libero. Integer sodales fermentum enim, eu aliquet risus mollis imperdiet. Donec sit amet augue eu erat placerat auctor eget vitae purus.</p>
        </div> */}

        <div className={styles.paralax + ' ' + styles.project} 
          style={{ backgroundImage: `url("/assets/clients/unitednude.jpg")` }}>
          <div className={styles.overlay}>
          <h2>
            United Nude
          </h2>
          <p>
          {/* <img src="/assets/clients/unitednude.jpg" alt="Logo" id="targetimg" width="100%" border-radius="10px"/> */}
          AR installation at  <a href="https://unitednude.com/"> United Nude's </a> pop-up in Westfield CC. Product videos, zero-G plant-life, and reactive simulations.
          </p>
          </div>
        </div>

        <div className={styles.paralax + ' ' + styles.project} 
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