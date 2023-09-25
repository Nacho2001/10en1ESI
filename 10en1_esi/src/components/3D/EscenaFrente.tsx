import React, {useEffect, useRef} from "react"
import * as THREE from 'three';
import { boton } from "./flotantes/boton";
import { Boton } from "./flotantes/boton2";
import "./escenas.css";
export const EscenaFrente: React.FC = () => {
    const refCanvas = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (!refCanvas.current) return;
        //Crea una escena nueva
        const escenaFr = new THREE.Scene();
        // Crea una camara de perspectiva
        const camaraFr = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000)
        // Instancia el renderizador
        const renderizadorFr = new THREE.WebGLRenderer({ canvas: refCanvas.current, alpha: true });
        escenaFr.background = null;
        renderizadorFr.setSize(300, 300)
        camaraFr.position.z = 5
        //const botonPush = boton(-0.4,2,1.0,"hola","#ff0000")
        //const botonPush2 = boton(0.4,2,1.0,"hola","#ff0000")
        const miBoton = new Boton(2,1,"#00ff00","hola").crearTabla();
        escenaFr.add(miBoton)
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