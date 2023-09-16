import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/libs/three.module.js';
// Ver @types/threea
export const Escena: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (!canvasRef.current) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/2 / window.innerHeight/2, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current});
        renderer.setSize(window.innerWidth/2, window.innerHeight/2)

        scene.background = new THREE.Color(0x0000ff)

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5
        const animate = () => {
            requestAnimationFrame(animate);
      
            // Rotación del cubo
            if (cube) {
                console.log("cube true")
              cube.rotation.x += 0.01;
              cube.rotation.y += 0.01;
            }
      
            renderer.render(scene, camera);
          };
    }, [])
    return (
        <>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
        </>
    )
}