import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import fondo from './texturas/red-brick-wall-background-vintage-brickwork-texture-photo.jpg';

// Funcion con la escena vacia
export const Escena: React.FC = () => {
    // 
    const refCanvas = useRef<HTMLCanvasElement | null>(null);
    // useEffect para declarar las constantes cuando se renderice el componente
    useEffect(() => {
        // Si el elemento canva no esta activo, el componente no retorna nada
        if (!refCanvas.current) return;
        // Crea un instancia de la clase Scene de THREE 
        const escena = new THREE.Scene();
        // Crea una camara de perspectiva apuntando
        const camara = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Define el renderizador y muestra la escena en el canvas
        const renderizador = new THREE.WebGLRenderer({canvas: refCanvas.current});
        // Establece resolucion de la escena
        renderizador.setSize(window.innerWidth, window.innerHeight/2)
        // importa los objetos creados en otros archivos


        // Crea una instancia del cargador de textura para importar la imagen de fondo
        const cargadorTextura = new THREE.TextureLoader()
        // importa la imagen con el cargador de textura
        const imagenFondo = cargadorTextura.load(fondo)
        // Define la imagen como fondo de la escena
        escena.background = imagenFondo;
        // Establece posición de la camara
        camara.position.z = 5
        // El renderizador genera la escena con la camara creada
        renderizador.render(escena, camara);
    }, [])
    // El componente retorna un elemento canvas, que contiene la escena completa
    return (
        <>
        <canvas ref={refCanvas} style={{ width: '100%', height: '100%' }}></canvas>
        </>
    )
}