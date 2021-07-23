import React, { Component } from "react";
import * as THREE from "three";

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
    scene.background = new THREE.Color(0x0c405c);

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

    const geometry = new THREE.PlaneGeometry(2, 5, 30, 30);
    const material = new THREE.ShaderMaterial({
    uniforms: {
    utime: { value: 0.0 },
    width: { value: 5.0 },
    height: { value: 1.5 },
    uTexture: { value: new THREE.TextureLoader().load("/assets/icons/logofooter.png") },
    wTexture: { value: new THREE.TextureLoader().load("/assets/icons/logofooter.png") },
    },
    vertexShader: vertexShader(),
    fragmentShader: fragmentShader(),
    });
    material.transparent = true;

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.x = -1;

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;

    
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
    this.renderer.render(this.scene, this.camera);
    this.material.uniforms.utime.value +=0.007;

  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100vh' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}


export default ThreeScene;