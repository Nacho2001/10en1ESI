import React, {useEffect, useRef} from "react"
// Importacion de libreria
import * as THREE from 'three';
// Importa la clase para crear un boton
import { Boton } from "../flotantes/boton";
// Trae la funcion para crear el panel central
import { panelCentral2 }from "../flotantes/panel";
// La hoja de estilo de la escenas, importante para superponer las escenas
import "./escenas.css";
// Funcion para crear un elemento circular que será el temporizador
import {temporizador} from "../flotantes/reloj";
// inicia la funcion que retorna el componente que tendra los objetos flotantes
export const EscenaFrente: React.FC = () => {
    // realiza la referencia al canvas donde se creará la escena
    const refCanvas = useRef<HTMLCanvasElement | null>(null);
    // Utiliza useEffect para crear la escena al renderizar el componente
    useEffect(() => {
        // Si el canvas no se encuentra, la escena no es creada y no se retorna nada
        if (!refCanvas.current) return;
        //Crea una escena nueva
        const escenaFr = new THREE.Scene();
        // Crea una camara de perspectiva a 75°, resolucion de 800x600, acercamiento 0.1 (near) y 1000 de distancia con el punto más lejano de la escena (far)
        const camaraFr = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000)
        // Instancia el renderizador
        const renderizadorFr = new THREE.WebGLRenderer({ canvas: refCanvas.current, alpha: true });
        // Declara el fondo null para que sea transparente
        escenaFr.background = null;
        // Ajusta el tamaño del renderizador
        renderizadorFr.setSize(800, 600)
        // posicion de camara en eje z
        camaraFr.position.z = 5
        // Botones de prueba
        const miBoton = new Boton("#f26969","quiero sal!").boton(-1.9,-2.7);
        const miBoton2 = new Boton("#f26969","hola").boton(1.9,-2.7);
        // Panel de prueba
        const panelCentral = panelCentral2("#026969","#0000ff");
        // reloj de prueba
        const cirtulo = temporizador("#00ff00")
        // Añade los elementos creados a la escena
        escenaFr.add(miBoton,miBoton2,panelCentral, cirtulo);
        // Por ultimo, se envia la escena y la camara al renderizador
        renderizadorFr.render(escenaFr,camaraFr)
    }, [])
    // Se entrega en canvas con la escena de frente
    return (
        <>
            <canvas ref={refCanvas} className="canvasFrente"></canvas>
        </>
    )
}