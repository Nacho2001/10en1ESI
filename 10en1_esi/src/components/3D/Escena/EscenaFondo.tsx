// Importa React y los hooks necesarios
import React, {useEffect, useRef} from "react";
// Importa la libreria three.js
import * as THREE from 'three';
// Obtiene la imagen que se utilizará como fondo de escena
import aulaFondo from '../texturas/aula2.jpg';
// Utiliza la hoja de estilo escenas.css
import "./escenas.css";

// Funcion que retorna el componente
export const EscenaFondo: React.FC = () => {
    // Referencia al elemento canvas que alojará la escena
    const refCanvas = useRef<HTMLCanvasElement | null>(null)
    // Declaración de latitud y logitud inicial de la camara giratoria
    let longitud:number = 0;
    let latitud:number = 0;
    useEffect(() => {
        // Si el elemento canvas no esta activo, no continua con el resto de la función y no retorna nada
        if(!refCanvas.current){return;}
        // Crea instancia de escena de three
        const escena = new THREE.Scene()
        // Crea instancia de una camara de perspectiva (campo de vision 50°, resolucion de la camara 800x600, distancia con el punto mas cercano [near] y distancia con el punto más lejano [far])
        const camara = new THREE.PerspectiveCamera(50, 800 / 600, 1,1100);
        // Renderizador escena fondo
        const renderizador = new THREE.WebGLRenderer({canvas: refCanvas.current});
        renderizador.setPixelRatio(window.devicePixelRatio);
        // Define resolución del elemento canvas (800x600)
        renderizador.setSize(800, 600);
        // Crea la esfera que será el fondo de la escena
        const campoVision = new THREE.SphereGeometry(500,60,40);
        // Define dimensión de la esfera
        campoVision.scale(-1,1,1);
        // define la imagen como textura
        const textura = new THREE.TextureLoader().load(aulaFondo);
        // Ajuste de colores SRGB
        textura.colorSpace = THREE.SRGBColorSpace;
        // Crea el material con mapeo de la textura nueva
        const material = new THREE.MeshBasicMaterial({map: textura});
        // Aplica el material a la esfera
        const meshCampoVision = new THREE.Mesh(campoVision,material);
        // Añade la esfera campoVision a la escena
        escena.add(meshCampoVision);
        // Aplica la animación al la escena
        const animacion = () => {
            // Genera el bucle de la animación
            requestAnimationFrame(animacion);
            // Invoca funcón de enfoque de la camara
            enfoque();
            // Al final, aplica la camara a la escena
            renderizador.render(escena,camara);
        }

        const enfoque = () => {
            // Modifica el valor de longitud para hacer "girar" la camara, es decir la hace cambiar el enfoque
            longitud += 0.02;
            // Convierte el angulo de enfoque de grados a radianes (angulo de camara 90°)
            let phi:number = THREE.MathUtils.degToRad(90 - latitud);
            // Canvierte a radianes el valor de longitud
            let theta:number = THREE.MathUtils.degToRad(longitud);

            // Calcula el valor de los ejes utilizando el seno y coseno de phi (latitud en radianes) y theta (longitud en radiantes)
            const x:number = 500 * Math.sin(phi) * Math.cos(theta);
            const y:number = 500 * Math.cos(phi);
            const z:number = 500 * Math.sin(phi) * Math.sin(theta);
            // Luego, camibia el punto de vista de la camara en base a los calculos de los ejes
            camara.lookAt(x,y,z);
        }
        // Invoca la función de animación
        animacion();
    }, [])
    return (
        <canvas ref={refCanvas} className="canvasFondo"></canvas>
    )
}