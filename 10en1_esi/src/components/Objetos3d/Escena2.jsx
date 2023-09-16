import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [react()]
})
export const ThreeScene = () => {
  const canvasRef = useRef();
  console.log(canvasRef)
  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/4 / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);

    // Fondo azul
    scene.background = new THREE.Color(0x0000ff);

    // Cubo en la escena
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Posición de la cámara
    camera.position.z = 5;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación del cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '50%', height: '50%' }}></canvas>
  );
};

