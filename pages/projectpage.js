import Head from 'next/head'
import styles from '../styles/Project.module.css'
import Link from 'next/link'
import Image from 'next/image'
import FadeIn from 'react-fade-in';
import floaticon from "../public/assets/icons/logofooter.png"


export default function ProjectPage() {
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
                    Title
                </h1>

                <h2>
                    Tagline description
                </h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <a href="http://presskit.float.land/sheet.php?p=screensavers_vr">Link</a>
                </p>

                <button>
                    BUTTON
                </button>


                <div className={styles.grid}>
                    <img src="/assets/work/eclipsestill.png" alt="FLOAT Logo" width="30%" />
                    <img src="/assets/work/eclipsestill.png" alt="FLOAT Logo" width="30%" />
                    <img src="/assets/work/eclipsestill.png" alt="FLOAT Logo" width="30%" />
                </div>

            </main>
            </FadeIn>
           

            <footer className={styles.footer}>
                Footer text here{' '}
                <span className={styles.logo}>
                    {/* <Image src="/logo.png" alt="FLOAT Logo" width={72} height={16} /> */}
                </span>
            </footer>
        </div>
    )
}