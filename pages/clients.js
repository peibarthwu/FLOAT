import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';


export default function Clients() {
  return (
      <div className={styles.container}>
        <main className={styles.main} id="content">
        <FadeIn delay={200} transitionDuration={600}>

          <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/clients/iancheng.jpg")` }}>
            <div className={styles.overlay}>
            <h2>
              Ian Cheng
            </h2>
            <p>
                Interaction remote for Ian Cheng&apos;s Life After B.O.B.
            </p>
            </div>
          </div>
         

        <div className={ `${styles.paralax} ${styles.project}` } 
          style={{ backgroundImage: `url("/assets/clients/unitednude.jpg")` }}>
          <div className={styles.overlay}>
          <h2>
            United Nude
          </h2>
          <p>
          AR installation at  <a href="https://unitednude.com/"> United Nudes </a> pop-up in Westfield CC. Product videos, zero-G plant-life, and reactive simulations.
          </p>
          </div>
        </div>

        <div className={ `${styles.paralax} ${styles.project}` } 
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
        </FadeIn>
        </main>
      </div>
  )
}