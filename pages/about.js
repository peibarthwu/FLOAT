import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';
import Image from 'next/image'
import floaticon from "../public/assets/icons/logofooter.png"
import ThreeScene from './/threescene';

export default function Work() {
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
      <ThreeScene/>

      <h1 className={styles.title}>
        <Link href="/">
        {/* FLOAT.LAND */}
        {/* <img src="/assets/icons/logofooter.png" alt="Girl in a jacket" width='20%'/> */}
        <Image src={floaticon} alt="FLOAT.LAND" />
        </Link>
      </h1>
      <main className={styles.main} id="content">
        <FadeIn>

        <div className={styles.info}>
          <div className={styles.aboutSection}>
            <p>
              FLOAT IS A COLLABORATIVE ENTITY FOCUSING ON THE INTERSECTION OF ART AND INTERACTIVITY.
              FOUNDERS BEN VANCE AND KATE PARSONS WORK TOGETHER TO CREATE EVOCATIVE, NUANCED ART EXPERIENCES.

          </p>

            <p>
              Ben Vance is a VR veteran and director who explores art and design through emerging technology.
              He has worked with Electronic Arts, independent game studios, VR startups, museums, galleries, and with hummingbirds on back patios surrounded by succulents.
              He is a founding member of Glitch City, a pioneering art and game collective based in LA, and Buffalo Vision, his studio dedicated to games and interactive VR.
          </p>
            <p>
              His work has been shown worldwide at Sundance, IndieCade, NAB Shanghai, and TIFF. His thoughtful and surprising interaction design stem from a lifelong pursuit of fine art and button pushing.
          </p>
            <p>
              Kate Parsons is a video artist and educator living in Los Angeles. She obtained her M.F.A. in Media Arts from UCLA, and completed her M.A. in Digital Art and Video from CSUN.
              She is the Director of Femmebit, a video art festival celebrating LA-based female artists working in video and new media.
              She is currently Visiting Assistant Professor at Pepperdine University and adjunct Instructor at Art Center College of Design.

        </p>
            <p>
              She has had the pleasure of working with director Mark Pellington and musicians such as Silversun Pickups, Toro Y Moi, Kid606, and Daedelus, as well as brands such as Aston Martin and T-Mobile.

         </p>
          </div>

          <div className={styles.aboutSection}>
            <h2 >
              Residencies
        </h2>
            <p>
              Artist in Residence, Media Archaeology Lab, University of Colorado, Boulder, CO (Upcoming)
        </p>
            <p>
              Artists in Residence, Stanford Arts, Palo Alto, CA (Oct. 2018)
        </p>
            <p>
              Artist in Residence, Coaxial Arts Foundation and Pasadena Arts Alliance, Los Angeles, CA (April 2018)
        </p>
          </div>
          <div className={styles.aboutSection}>
            <h2 >
              Exhibitions
        </h2>
            <h1>
              2018
        </h1>
            <p>
              SHe, Curated by Elizabeth Tinglof, Launch LA, Los Angeles, CA (Sept. 2018)
        </p>
            <p>
              The Dark Spring, with Coaxial Arts Foundation and Pasadena Arts Alliance, Los Angeles, CA (April 2018)
        </p>
            <p>
              Happy 3rd Birthday, Coaxial Arts! Screening, Coaxial Arts Foundation, Los Angeles, CA (Mar.2018)
        </p>
            <p>
              Guirado Rebirth VR in &quot;Parallel Visionaries&quot; w/ Picasso and Miro, at University of Jaen, Spain (Mar.2018)
        </p>
            <p>
              A Piece of Something Bigger: Faculty Work in Progress Show, Art Center College of Design, Pasadena (Mar.2018)
        </p>
            <p>
              Interiors, Basic Premise, Curated by Alex Brown, Ojai, CA (Feb 2018)
          </p>


            <h1>
              2017
        </h1>
            <p>
              Coral Gables Presents: Guirado, Art Week Miami Basel with Guirado Estate, Miami, FL (Dec. 2017)
        </p>
            <p>
              Acute Art VR Platform Premiere, ft. Marina Abramovic, Jeff Koons, Olafur Eliasson. NY, NY (Dec. 2017)
        </p>
            <p>
              Space Vs. Time: A Night of Expanded Cinema, Coaxial Arts, Los Angeles, CA (Dec. 2017)
        </p>
            <p>
              Virtual Reality Workshop, Pasadena City College, Pasadena, CA (Dec. 2017)
        </p>
            <p>
              The Wrong Digital Art Biennale Premiere, Istanbul, Turkey (Nov. 2017)
        </p>
            <p>
              The Wrong Digital Art Biennale, GFX Free Error, Curated by Haydi Rocket (Nov. 2017)
        </p>
            <p>
              Kaleidoscope&apos;s First Look Virtual Reality Conference, Curated by Rene Pinnell, (Oct. 2017)
        </p>
            <p>
              LA Weekly&apos;s ArtTopia, Union Station, Curated by Ale Cohen, Los Angeles, CA (Aug. 2017)
        </p>
            <p>
              FUTRA&apos;s Superfuture, Curated by Tara LaPlante, Werkartz, Los Angeles, CA (Aug. 2017)
        </p>
            <p>
              La Jolla International Fashion Film Festival, San Diego, CA (July 2017)
        </p>
            <p>
              Bluebird Art + Sound, Curated by Jesse Fleming, Snowmass, CO (June 2017)
        </p>
            <p>
              UCLA Mattel Children&apos;s Hospital Benefit and Art Show, Culver City, CA (May 2017)
        </p>
            <p>
              Rhythm and Visions, Curated by Patterson + Reckinger, USC, Los Angeles, CA (April 2017)
        </p>
            <p>
              Sleepless: The Music Center at Night, Curated by Ale Cohen, Dorothy Chandler Pavilion (Mar. 2017)
        </p>
            <p>
              Guest Speaker, Pepperdine University, Malibu, CA (Mar. 2017)
        </p>
            <p>
              Wake, Ship In The Woods. With Kid606 and Xiu Xiu. Escondido, CA (Mar. 2017)
        </p>
            <p>
              VR Cinema, Curated by Blake Kammerdiener, SXSW, Austin, TX (Mar. 2017)
        </p>
            <p>
              FLOAT Museum VR SFMOMA Pilot, with Morphosis Architects and Kaleidoscope VR, San Francisco Museum of Modern Art. San Francisco, CA, (Mar. 2017)
        </p>
            <p>
              Next Art Night, KRON VR, Culver City, CA, (Mar. 2017)
        </p>
            <p>
              Guest Speaker, USC, Los Angeles, CA, (Mar. 2017)
        </p>
            <p>
              Heavy Motion w/ Lee Tusman, Matt Doyle, Sara Rosalena Brady, Eric Drasin, Coaxial Arts, Los Angeles, (Feb. 2017)
        </p>
            <p>
              3VR: Liminal Realities at Coaxial Fundraiser, Coaxial Arts, Los Angeles, CA (Feb. 2017)
        </p>
            <p>
              3VR: Liminal Realities at Slamdance Film Festival, Park City, UT. (Jan. 2017)
        </p>

            <h1>
              2016
        </h1>
            <p>
              Concept Art Fair, After Dark, Art Basel Miami, Curated by Sharsten Plenge, Janna Avner, Miami, FL (Dec. 2016)
        </p>
            <p>
              LIVING BREATHING Curated by Gavin Gamboa. Monkspace, Los Angeles, CA (Dec. 2016)
        </p>
            <p>
              Here Comes Everyone Showcase, Curated by Bill Turk (2016-17)
        </p>
            <p>
              Oculus DevLab @ Facebook Headquarters, Menlo Park, CA (Oct. 2016)
        </p>
            <p>
              3VR: Liminal Realities at Slamdance DIG, Big Picture Gallery, Los Angeles, CA (Dec. 2016)
        </p>
            <p>
              Oculus DevLab Featured Artist, Curated by Kaleidoscope VR, Los Angeles, CA (Oct. 2016)
        </p>
            <p>
              Femmebit, co-director and co-creator. Human Resources, Los Angeles, CA (Nov. 2016)
        </p>
            <p>
              ArtTopia w/Dublab. Oue Skyspace, Los Angeles, CA (Nov. 2016)
        </p>
            <p>
              OpenIDEO Presents: Art of Dying, Curated by DreamLogic, San Francisco, CA (Oct. 2016)
        </p>
            <p>
              Featured VJ at The Black Lodge, Hyperion Tavern, Los Angeles, CA (Sept. 2016)
        </p>
            <p>
              Next Art Night, featured speaker, Culver City, CA (Sept. 2016)
        </p>
            <p>
              Op Art by Futra, video and VR, Los Angeles, CA (Sept. 2016)
        </p>
            <p>
              TIFFxPOP02, Curated by Henry Faber, Toronto Film Festival, Toronto, Canada (July 2016)
        </p>
            <p>
              MakingOut.LA, Curated by Camella Kim and Tyler Stephanich, Maiden LA, Los Angeles, CA (July 2016)
        </p>
            <p>
              VRScout Art Show hosted at Vice, Venice, CA (April 2016) UFO Gallery Inaugural Pop-Up show (former Perry Rubenstein gallery), LA (Dec 2015)
</p>
          </div>

          <div className={styles.aboutSection}>
            <h2 >
              Press
        </h2>
            <p>
              Canadian Broadcasting Company interview, CBC Here and Now, Art Toronto, Toronto Canada (Nov. 2017)
        </p>
            <p>
              HBO Latin America, SXSW (Mar. 2017)
        </p>
            <p>
              Dazed Digital, Marina Abramovic & Jeff Koons Front New Online VR Gallery (Jun. 2017)
        </p>
            <p>
              CNET, At SXSW, VR Hits a New Rhythm, SXSW 2017 (Mar. 2017)
        </p>
            <p>
              SVLA Standard Vision Showcase: FLOAT (Jul. 2017)
        </p>
            <p>
              LA Times, Slamdance DIG Festival (Dec. 2016)
        </p>
            <p>
              KCRW, Kaleidoscope and Oculus Dev Lab (Dec. 2016)
        </p>
            <p>
              The Creator&apos;s Project, LA Highlights Women&apos;s Innovations in Digital Media Arts (Dec. 2016)
        </p>
            <p>
              Tiny Mix Tapes, KRON VR (Nov. 2016)
        </p>
            <p>
              Animation Magazine, Kaleidoscope and Oculus Dev Lab (Oct. 2016)
        </p>
            <p>
              VR Focus, Kaleidoscope and Oculus Dev Lab (Oct. 2016)
        </p>
            <p>
              UploadVR, Kaleidoscope and Oculus Dev Lab (Oct. 2016)
        </p>
            <p>
              Venture Beat, Kaleidoscope and Oculus Dev Lab (Oct. 2016)
        </p>
            <p>
              The Creator&apos;s Project, Can Virtual Reality Help Us Better Understand Dying? (Nov. 2016)
        </p>
            <p>
              Creative Applications Network, Femmebit - Celebrating LA Women Working in Video & New Media (Nov. 2016)
        </p>
            <p>
              Fast Company, Oculus wants to help teach you how to win at making VR content (Nov. 2016)
        </p>
            <p>
              LAist, Weekend Planner, (Nov. 2016)
        </p>
            <p>
              No Film School, Midnighters, VR and Shorts at SXSW 2017 (Mar. 2017)
        </p>
            <p>
              LA Weekly, Witness Artopia Multisensory Invasion of Union Station (Sept. 2017)
        </p>
            <p>
              Times Advocate, Ship In the Woods Presents (Feb. 2017)
</p>
          </div>
        </div>


        </FadeIn>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}