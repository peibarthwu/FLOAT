import Head from 'next/head'
import styles from '../styles/Project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import FadeIn from 'react-fade-in';
import floaticon from "../public/assets/icons/logofooter.png"


export default function Screensavers() {
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
      <div className={styles.title}>
        <Link href="/">
          <Image src={floaticon} alt="FLOAT.LAND" />
        </Link>
      </div>
      <FadeIn>
        <main className={styles.main}>
          <h1>
          <img alt="SCREENSAVERS VR" src="/assets/screensavers/screensaversVR_big.png" width="100%"/>
          </h1>

          {/* <div className={styles.grid}>
          <img alt="" src="/assets/screensavers/2018_selection_seal_orange_300.png"/>
          <img alt="" src="/assets/screensavers/fivars_2019_laurels_-_Black_w_Alpha_300.png"/>
          </div> */}

          <h2>
            It&apos;s time to save your screens. Get v2.0 now!
          </h2>

          <div className={styles.grid}>
            <a href="https://store.steampowered.com/app/881670/Screensavers_VR/">
              <img alt="" src="/assets/screensavers/steamvr.png" />
            </a>
            <a href="https://www.oculus.com/experiences/rift/1310377192398042">
              <img alt="" src="/assets/screensavers/oculus.png" />
            </a>
            <a href="https://floatland.itch.io/screensavers-vr">
              <img alt="" src="/assets/screensavers/itch.png" />
            </a>
            <a href="https://www.viveport.com/apps/4462a517-59cc-49d2-9878-173f1523ae3f/Screensavers_VR/">
              <img alt="" src="/assets/screensavers/viveport.png" />
            </a>
          </div>
          <p>Before the internet took over, before memes multiplied, windows of computer fantasy spread over the world… this was THE SCREENSAVER. What began as a tool to prevent CRT monitor burn-in became a dynamic canvas for whimsy and experimentation. </p>
          <p>A digital escape from your worries, Screensavers VR is respite and recovery from the demands of modern living. Explore the visual language of the past in a whole new way and surround yourself in Tangible Graphics Technology. </p>
          <h2>Stop staring at your screen–– dive in and save virtual reality!</h2>
          <p>Featuring over a dozen screensavers, easter eggs, nostalgic UI, customization, and essays from artists &amp; theorists (including Bill Stewart, co-creator of worldwide phenomenon <em>After Dark</em>). Includes the Official Software Manual written by Dave Kornfeld (previously, <em>The Onion</em>). </p>
          <div className={styles.grid}>
            <p>
              <a href="http://presskit.float.land/sheet.php?p=screensavers_vr">
                <button>
                  PressKit
              </button>
              </a>
            </p>

            <a href="https://discord.gg/FrXUF7D">
              <button>
                Discord
              </button>
            </a>
            <a href="https://www.keymailer.co/g/games/87085">
              <button>
                Keymailer
            </button>
            </a>
          </div>

          <p>&quot;That leap to immersion is more than just a simple play at nostalgia.&quot;
-Jesse Damiani, <a href="https://www.forbes.com/sites/jessedamiani/2019/10/22/the-dream-of-the-90s-is-alive-in-screensavers-vr/#1a1c01546187">Forbes</a>
          </p>
          <p>
          &quot;Super fun. What a strangely unobvious but totally killer idea.&quot;
- ArchKali on <a href="https://steamcommunity.com/id/archkali/recommended/881670/">Steam</a></p>




          <div className={styles.grid}>
            <img src="/assets/screensavers/Zap02.jpg" alt="" />
            <img src="/assets/screensavers/Evening Dreams - Tunn02.jpg" alt="" />
            <img src="/assets/screensavers/Evening Dreams - Gluten Gliders01.jpg" alt="" />
            <img src="/assets/screensavers/Evening Dreams - Forms01.jpg" alt="" />
            <img src="/assets/screensavers/Evening Dreams - Sub-Optic01.jpg" alt="" />
            <img src="/assets/screensavers/Evening Dreams - Orbz01.jpg" alt="" />


          </div>

        </main>
      </FadeIn>


  
    </div>
  )
}


