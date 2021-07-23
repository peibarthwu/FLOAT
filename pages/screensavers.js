import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';


export default function Screensavers() {
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
          .ScreensaversVR
            </i>
      </h1>
      <main className={styles.main}>

      <div className={styles.image  }>
      {/* <img src="/assets/screensavers/ScreensaversVR_6.jpg" alt="FLOAT Logo"/> */}

        {/* <Image src={'/assets/screensavers/ScreensaversVR_2.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} /> */}
        </div>
        <div className={`${styles.info} ${styles.center}`}>
          <h1>It&apos;s time to save your screens. Get v2.0 now!</h1>
        
          <p>
            <a href="https://store.steampowered.com/app/881670/Screensavers_VR/">
              STEAM            </a>

            <a href="https://www.oculus.com/experiences/rift/1310377192398042">
              OCULUS            </a>
            <a href="https://floatland.itch.io/screensavers-vr">
              ITCH            </a>

            <a href="https://www.viveport.com/apps/4462a517-59cc-49d2-9878-173f1523ae3f/Screensavers_VR/">
              VIVEPORT            </a>
          </p>

          <p>Before the internet took over, before memes multiplied, windows of computer fantasy spread over the world… this was THE SCREENSAVER. What began as a tool to prevent CRT monitor burn-in became a dynamic canvas for whimsy and experimentation. </p>
          <p>A digital escape from your worries, Screensavers VR is respite and recovery from the demands of modern living. Explore the visual language of the past in a whole new way and surround yourself in Tangible Graphics Technology. </p>
          <p>Stop staring at your screen-- dive in and save virtual reality!</p>
          <p>Featuring over a dozen screensavers, easter eggs, nostalgic UI, customization, and essays from artists &amp; theorists (including Bill Stewart, co-creator of worldwide phenomenon <em>After Dark</em>). Includes the Official Software Manual written by Dave Kornfeld (previously, <em>The Onion</em>). </p>
          <p>
            <a href="http://presskit.float.land/sheet.php?p=screensavers_vr">Press Kit</a>
            <a href="https://discord.gg/FrXUF7D">Discord</a>
            <a href="https://www.keymailer.co/g/games/87085">Keymailer</a>
            Press inquiries: pr@float.land </p>
        </div>
{/* 
        <div className={styles.image  }>
        <img src="/assets/screensavers/ScreensaversVR_6.jpg" alt="FLOAT Logo"/>

        <Image src={'/assets/screensavers/Evening Dreams - Sub-Optic01.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} />
        </div>
        <div className={styles.image  }>
        <Image src={'/assets/screensavers/ScreensaversVR_6.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} />
        </div>
        <div className={styles.image  }>
        <Image src={'/assets/screensavers/Evening Dreams - Zap02.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} />
        </div>
        <div className={styles.image  }>
        <Image src={'/assets/screensavers/ScreensaversVR_1.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} />
        </div>
        <div className={styles.image  }>
        <Image src={'/assets/screensavers/ScreensaversVR_3.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} />
        </div>
        <div className={styles.image  }>
        <Image src={'/assets/screensavers/ScreensaversVR_4.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} />
        </div>
        <div className={styles.image  }>
        <Image src={'/assets/screensavers/ScreensaversVR_5.jpg'} alt="Current Image" layout={'fill'} objectFit={'contain'} />
        </div> */}
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