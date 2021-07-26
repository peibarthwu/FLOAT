import styles from '../styles/Home.module.css';
import Head from 'next/head'
import Link from 'next/link';
import React, { Component } from "react";
import * as THREE from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';

class ThreeScene extends Component {

  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    let geo, mesh; 
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const light = new THREE.HemisphereLight( 0x5c5c94, 0x8d729e, 3 );
 		scene.add( light );
    
    camera.position.z = 4;
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

    const composer = new EffectComposer( renderer );
    const renderPass = new RenderPass( scene, camera );
    composer.addPass( renderPass );

    const filmpass = new FilmPass(0.7,3,3,0);
    composer.addPass( filmpass );


    const geometry = new THREE.PlaneGeometry(3, 10, 30, 30);
    const material = new THREE.ShaderMaterial({
    uniforms: {
    utime: { value: 0.0 },
    width: { value: 10.0 },
    height: { value: 3.0 },
    uTexture: { value: new THREE.TextureLoader().load("/assets/icons/logofooter.png") },
    wTexture: { value: new THREE.TextureLoader().load("/assets/icons/logofooter.png") },
    },
    vertexShader: vertexShader(),
    fragmentShader: fragmentShader(),
    });
    material.transparent = true;

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.x = -5;
    mesh.position.z = -1;
    mesh.position.y = -1;



    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.composer = composer;

    
    this.mount.appendChild(this.renderer.domElement);
    this.start();
    
    function vertexShader() {
      return `
      uniform float utime;
      uniform float width;
      uniform float height;

      // varying vec3 Normal;
      varying vec2 vUv; //x and y unit vector
      varying float zpos; //this will be z position after transformation
      // varying vec3 orignalPos;

      
      void main(){
      vUv = uv;   //for use in frag

      float dx = 2. - uv.x * width;   
      float dy = 8. -uv.y + height;
      float freq = sqrt(dx*dx + dy*dy);
      float amp = 0.2;
      float angle = -utime*10.0+freq*8.0;
          
      zpos = sin(angle)*amp;

      vec3 local3 = vec3(uv.x*width, uv.y*height, zpos);
      vec4 localSpace = vec4(uv.x*width, uv.y*height, sin(angle)*amp, 1.);
      
      // vec3 objectNormal = vec3(-amp * freq * cos(angle),0.0,1.0);
      // Normal = normalMatrix * normalize(objectNormal) * local3;
      gl_Position = projectionMatrix * modelViewMatrix * localSpace;
      }
      `
      }

      function fragmentShader() {
      return `
      uniform float utime;
      uniform sampler2D uTexture;
      uniform sampler2D wTexture;

      varying vec2 vUv;
      varying float zpos;
      varying vec3 Normal;



          //mult vUv *1.01 for color offset
         
          void main() {
              float shift = zpos * 0.03 +1.;
              float r = texture2D(uTexture, vUv * shift).r;
              float g = texture2D(uTexture, vUv).g;
              float b = texture2D(uTexture, vUv).b;
              vec3 texture = vec3(r, g, b);
              
              float shadow = clamp(zpos / 10., 0., 1.);
              gl_FragColor = vec4(texture + shadow, 1.);
              gl_FragColor.a = 0.7;

          }
      `
      }

    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight);
    }

    window.addEventListener( 'mousemove', onMouseMove, false );
    function onMouseMove(){
      material.uniforms.utime.value +=0.009;
    }
  }


  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    // this.renderer.render(this.scene, this.camera);
    this.composer.render();
    this.material.uniforms.utime.value += 0.003;

  }

  render() {
    return (
      <div className={styles.container}>
      <div
        className={styles.fullscreen}
        ref={(mount) => { this.mount = mount }}
      />
      <Head>
        <title>Float.Land</title>
        <meta name="description" content="FLOAT.LAND Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />      
      </Head>
      <div className={styles.above}>
        <h1 className={styles.title}>
            FLOAT.LAND
        </h1>
      </div>
      <main className={styles.above}>
        <Link href="/work">
            <p className={styles.section} 
            >
            Portfolio
            </p>
        </Link>
        <Link href="/research">
            <p className={styles.section}>
            Research
            </p>
        </Link>
        <Link href="/about">
            <p className={styles.section}>
            About
            </p>
        </Link>
      </main>
      </div>
    )
  }
}


export default ThreeScene;

//OLD STUFF 
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'



// export default function Home() {

//   // init();
//   // animate();

//   // let scene, camera, renderer;

//   // function init() {
//   //   const scene = new THREE.Scene();
//   //   camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 200);
//   //   camera.position.set(0,0,0);

//   //   scene.background = new THREE.Color(0x0c405c);
//   //   renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById("three")});
//   //   renderer.setPixelRatio(window.devicePixelRatio/2);
//   //   renderer.setSize(window.innerWidth *0.8, window.innerHeight*0.8);

//   // }

//   // function animate(){
//   //   requestAnimationFrame(animate);
// 	// 	renderer.render(scene, camera);
    
//   // }


//   function showImage(image){
//     var elem = document.getElementById("targetimg");
//     if(elem.getAttribute("src") != image){
//       elem.setAttribute("src", image);
//       elem.setAttribute("width","100%");
//       elem.setAttribute("alt", "Image not available");
//     }
//   }


//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Float.Land</title>
//         <meta name="description" content="FLOAT.LAND Portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="preconnect" href="https://fonts.googleapis.com"/>
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
//         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet" />      
//       </Head>
//       <div>
//           <video autoPlay muted loop className={styles.fullscreen} id="targetimg">         
//                 <source src="/assets/home/glitchmob.mp4" type="video/mp4"/>       
//           </video>
//       </div>
//       <div className={styles.above}>
//         <h1 className={styles.title}>
//             FLOAT.LAND
//         </h1>
//       </div>
//       <div id="three" className={styles.main}>
//       </div>
//       <main className={styles.main + " " + styles.above} id="content">

//         <Link href="/work">
//             <p className={styles.section} 
//             onMouseOver={() => showImage("/assets/home/prismaticparadise.mp4")}>
//             Portfolio
//             </p>
//         </Link>
//         <Link href="/collabs">
//             <p className={styles.section}>
//             Collaborations
//             </p>
//         </Link>
//         <Link href="/clients">
//             <p className={styles.section}
//             onMouseOver={() => showImage("/assets/home/glitchmob.mp4")}>
//             Client Work
//             </p>
//         </Link>
//         <Link href="/research">
//             <p className={styles.section}>
//             Research
//             </p>
//         </Link>
//         <Link href="/about">
//             <p className={styles.section}>
//             About
//             </p>
//         </Link>
//       </main>

//       <footer className={styles.footer}>
//           Footer text here{' '}
//           <span className={styles.logo}>
//             {/* <Image src="/logo.png" alt="FLOAT Logo" width={72} height={16} /> */}
//           </span>
//       </footer>
//     </div>
//   )
// }
