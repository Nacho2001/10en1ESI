import React, {useEffect, useRef} from "react"
import * as THREE from 'three';
import { Boton } from "../flotantes/boton";
import { panelCentral2 }from "../flotantes/panel";
import "./escenas.css";
import "../flotantes/reloj"
import temporizador from "../flotantes/reloj";
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
        const panelCentral = panelCentral2("#f26969","#0000ff");
        const cirtulo = temporizador("#00ff00","#ffffff")
        escenaFr.add(miBoton,miBoton2,panelCentral, cirtulo);
        renderizadorFr.render(escenaFr,camaraFr)
    }, [])
    return (
        <>
            <canvas ref={refCanvas} className="canvasFrente"></canvas>
        </>
    )
}