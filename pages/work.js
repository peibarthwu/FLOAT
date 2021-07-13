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
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"/>
      </Head>
      <h1 className={styles.title}>
          FLOAT.LAND
      </h1>
    </div>
  )
}