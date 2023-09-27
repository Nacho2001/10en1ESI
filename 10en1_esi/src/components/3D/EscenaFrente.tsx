import React, {useEffect, useRef} from "react"
import * as THREE from 'three';
import { Boton } from "./flotantes/boton";
import { Panel } from "./flotantes/panel";
import "./escenas.css";
export const EscenaFrente: React.FC = () => {
    const refCanvas = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (!refCanvas.current) return;
        //Crea una escena nueva
        const escenaFr = new THREE.Scene();
        // Crea una camara de perspectiva
        const camaraFr = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000)
        // Instancia el renderizador
        const renderizadorFr = new THREE.WebGLRenderer({ canvas: refCanvas.current, alpha: true });
        escenaFr.background = null;
        renderizadorFr.setSize(1000, 600)
        camaraFr.position.z = 5
        const miBoton = new Boton("#f26969","que hago?").boton(-1.9,-2.7);
        const miBoton2 = new Boton("#f26969","hola").boton(1.9,-2.7);
        const panelCentral = new Panel("#f26969").panel(0.1,1);
        escenaFr.add(miBoton,miBoton2,panelCentral);
        //animar()
        function animar(){
            requestAnimationFrame(animar);
            miBoton.rotation.y += 0.009
            renderizadorFr.render(escenaFr,camaraFr)
        }
        renderizadorFr.render(escenaFr,camaraFr)
    }, [])
    return (
        <>
            <canvas ref={refCanvas} className="canvasFrente"></canvas>
        </>
    )
}