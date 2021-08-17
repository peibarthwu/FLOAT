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
            <h2>
            FLOAT IS A COLLABORATIVE ENTITY FOCUSING ON THE INTERSECTION OF ART AND INTERACTIVITY. 
          </h2>
          <p>
          Founders Ben Vance and Kate Parsons work together to create evocative, nuanced art experiences that push the boundaries of process and technique. Their work has shown with Vulcan Inc., Marina Abramovic’s Acute Art VR Platform, and at prestigious locations such as SFMOMA, Art Toronto, Sundance Film Festival, SXSW, and TIFF. Their work has been featured in Art News, Filmmaker Magazine, the LA Times, CBC, BBC News, Flaunt, Hyperallergic, and more. Collaborators and clients include Petra Cortright, United Nude, GitHub, and Tony Hawk. Their latest work, Screensavers, can be found on internet gaming platforms Steam, Oculus, Itch.io, and Viveport.
          </p>

            <p>
            <b> KATE</b> is a video artist and educator living in Los Angeles. She obtained her M.F.A. in Media Arts from UCLA and an M.A. in Digital Art and Video from CSU-N. She is the co-founder of FLOAT, founder of Stickney Creek, a rural art residency, and founder of FEMMEBIT, a video art festival celebrating Los Angeles female-identifying artists working in video and new media. Much of Kate's practice surrounds human connection, meaning-making, and our relationships to the biological and environmental systems we inhabit. Her graduate studies involved research into the myriad ways humans mourn and express grief. She has participated in solo and group residencies at Stanford University, Signal Culture, The Media Archaeology Lab at the University of Colorado, Dublab, and Coaxial Arts Foundation (courtesy of the Pasadena Arts Council). She is an Assistant Professor in Digital Arts at Pepperdine University in Malibu, CA, and Instructor in Media Design Practices at Art Center College of Design in Pasadena, CA. She has had the pleasure of working with director Mark Pellington, Toro Y Moi, Kid606, and Daedelus, as well as brands such as Aston Martin and T-Mobile.
          </p>
            <p>
            <b> BEN</b> is a VR veteran who explores art and design through emerging technology. He has worked with Electronic Arts, independent game studios, XR startups, museums, galleries, and with hummingbirds on back patios surrounded by succulents. His first foray into VR was in early C.A.V.E. systems at Iowa State University, and he is best known for his space exploration experience Irrational Exuberance: Prologue, and his work on WeVR’s The Blu.           </p>
            <p>
            He is a founding member of Glitch City, a pioneering independent game collective based in LA and Buffalo Vision, his studio dedicated to games and interactive VR. As co-founder of FLOAT, a VR/AR art studio, he has been a guest instructor at Scripps College and CalArts, and held a VR art residency at Stanford University.
        </p>
            <p>
            His work has shown with Vulcan Inc., Acute Art’s VR Platform, and at prestigious locations such as SFMOMA, Art Toronto, Sundance Film Festival, SXSW, and TIFF. His work has been featured in The Verge, The LA Times, BBC News, Flaunt, PC Gamer, Forbes, Paste, and more. Ben has worked on projects with Steven Spielberg, Kaleidoscope, Within, Messhof, and with clients such as GitHub and Tony Hawk. His latest collaboration, Screensavers VR, can be found on internet gaming platforms Steam, Oculus, Itch.io, and Viveport. His work can also be seen in the new immersive releases Harry Potter: Chaos at Hogwarts and Wizards Take Flight. 

         </p>
         <h2>
         ESTABLISHED IN 2015.
         </h2>
          </div>

          <div className={styles.aboutSection}>
            <h1 >
            Upcoming
        </h1>
            <p>
            Publication, <i>Screensavers VR</i>, Bossfight Books (Spring 2022)
        </p>
        <h1>
          2021
        </h1>
        <p>

        2021 Publication, <i> The Art of The Screensaver</i>, ed. Mary Meixner, Czech Republic (Winter 2021)
        </p>
        <p>
        Ongoing: NFT sales Live on Foundation.app
        </p>
        <p>
        Guest Artist, Computational Media, Scripps College, Claremont (Mar.-May 2021)
        </p>
        <p>
        Publication, <a href="https://coaxialarts.square.site/product/coaxialbook2021/34?cs=true&cst=custom"> Coaxial Art Book</a>, Coaxial Arts Foundation, Los Angeles (May 2021)
        </p>
        <h1>
          2020
        </h1>
        <p>
        Catalogue, To Bough and To Bend, Bridge Projects, Los Angeles (Aug. 2020)
        </p>
        <p>
        Phenomenology of Hope, Virtual Gallery and Exhibit (Jul. 2020)
        </p>
        <p>
        Guest Speaker, VRTO, Toronto, Canada (Jun. 2020)
        </p>
        <p>
        To Bough and To Bend, Bridge Projects, Los Angeles, CA (Mar. 2020)
        </p>
        <p>
        AR Art Show: Beyond Baroque, Mike Kelly Gallery, Santa Monica, CA (Feb. 2020)
        </p>
        <p>
        Retrograde, Carnegie Art Museum, Oxnard, CA (Jan. 2020)
        </p>
        <h1>2019</h1>
        <p>
        B-Reel After Hours, Santa Monica, CA (Dec. 2019)
        </p>
        <p>
        Guest Speaker, w/Ali Momeni, Brown University, Providence, RI (Nov. 2019)
        </p>
        <p>
        Guest Speaker and Demo Night, Payson Library, Pepperdine University, Malibu, CA (Nov. 2019)
        </p>
        <p>
        Scoutfest, VR Scout. CTRL+ Collective, Playa Vista, CA (Nov. 2019)
        </p>
        <p>
        IndieCade 2019 Night Games, Center for Media and Design, Santa Monica College (Oct. 2019)
        </p>
        <p>
        FIVARS Festival,Toronto Media Arts Centre, Toronto Canada (Sept. 2019)
        </p>
        <p>
        Floating Signifiers, STACKED Art Show, Museum of Neon Art, Glendale CA (Sept. 2019)
        </p>
        <p>
        Sim Cinema, ft. Jennifer Steinkamp, Casey Reas, DiMoDa, Paolo Pedercini, Michael John Kelley. Wevr, Venice CA (Apr. 2019)
        </p>
        <p>
        Satellite Art Fair: FLOAT x Petra Cortright, Austin, TX (Apr. 2019)
        </p>
        <p>
        United Nude x FLOAT Augmented Reality Pop-Up, Westfield Century City, Century City, CA (Mar. 2019)
        </p>
        <p>
        A Piece of Something Bigger: Faculty Work in Progress Show + Q&A, Art Center College of Design,Pasadena, CA (Mar. 2019)
        </p>



          </div>
          <div className={styles.aboutSection}>


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