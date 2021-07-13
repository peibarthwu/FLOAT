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
          <div className={styles.card}>
            <h2>
              Ian Cheng
            </h2>
            <p>
                Details ...
            </p>
          </div>

          <div className={styles.card}>
            <h2>
              Tony Hawk
            </h2>
            <p>
                Details ...
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

          <div className={styles.card}>
            <h2>
              United Nude
            </h2>
            <p>
                Details ...
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