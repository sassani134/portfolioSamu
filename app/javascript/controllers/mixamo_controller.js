import { Controller } from "@hotwired/stimulus"
import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// Connects to data-controller="mixamo"
export default class extends Controller {
  connect() {
    console.log("Hello !", this.element);

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    let renderer = new THREE.WebGL3DRenderer();
    renderer.setSize(window.innerWidth , window.innerHeight);

    document.body.appendChild ( renderer.domElement );



  }
}
