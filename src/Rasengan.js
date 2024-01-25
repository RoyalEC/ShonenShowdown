import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

function Rasengan() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 25);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Mounting the renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // Model Loader
    const loader = new GLTFLoader();
    let rasenganModel;

    loader.load(
      "/Rasengan-Naruto.glb", // Make sure this path is correct
      (gltf) => {
        rasenganModel = gltf.scene;
        rasenganModel.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed
        scene.add(rasenganModel);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model if it's loaded
      if (rasenganModel) {
        // rasenganModel.rotation.x += 0.01;
        rasenganModel.rotation.y += 0.1;
      }

      renderer.render(scene, camera);
    };

    // Start the animation
    animate();

    // Cleanup function
    return () => {
      // Remove the canvas from the DOM
      mountRef.current.removeChild(renderer.domElement);

      // Go through all children of the scene
      for (let i = scene.children.length - 1; i >= 0; i--) {
        const object = scene.children[i];

        // If it's a mesh with geometry and material, dispose of them
        if (object.isMesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }

          if (object.material) {
            // If the material has a map, dispose of the map
            if (object.material.map) {
              object.material.map.dispose();
            }

            // If the material is an array of materials, dispose each one
            if (Array.isArray(object.material)) {
              for (const material of object.material) {
                material.dispose();
              }
            } else {
              // If the material is not an array, just dispose it
              object.material.dispose();
            }
          }
        }
      }

      // Dispose of the renderer and any other resources
      renderer.dispose();
    };
  }, []); // Empty dependency array means this effect will only run once

  return <div ref={mountRef} />;
}

export default Rasengan;
