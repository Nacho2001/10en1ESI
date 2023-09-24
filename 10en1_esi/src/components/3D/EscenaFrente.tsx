import React, {useEffect, useRef} from "react"
import * as THREE from 'three';
import {panel} from './objetosBase/panelBase';
import "./escenas.css";
export const EscenaFrente: React.FC = () => {
    const refCanvas = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (!refCanvas.current) return;
        //Crea una escena nueva
        const escenaFr = new THREE.Scene();
        // Crea una camara de perspectiva
        const camaraFr = new THREE.PerspectiveCamera(75, window.innerWidth/2 / window.innerHeight/2, 0.1, 1000)
        // Instancia el renderizador
        const renderizadorFr = new THREE.WebGLRenderer({ canvas: refCanvas.current, alpha: true });
        escenaFr.background = null;
        renderizadorFr.setSize(window.innerWidth/2, window.innerHeight/2)
        camaraFr.position.z = 5
        // Crea un objeto tipo "box", con las dimensiones de un rectangulo
        const box = panel(1,2,1,"#00ff00");
        escenaFr.add(box)
        const animar = () => {
            requestAnimationFrame(animar);
            // Rotación del cubo
            if (box) {
                box.rotation.x += 0.01;
                box.rotation.y += 0.01;
            }
            renderizadorFr.render(escenaFr,camaraFr)
        }
        //animar();
        renderizadorFr.render(escenaFr,camaraFr)
    })
    return (
        <>
            <canvas ref={refCanvas} className="canvasFrente"></canvas>
        </>
    )
}