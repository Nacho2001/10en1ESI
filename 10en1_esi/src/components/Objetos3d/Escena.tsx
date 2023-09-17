import React, {useEffect, useRef} from "react";
import * as THREE from 'three';
import aulaFondo from './texturas/aula2.jpg';

export const Escena: React.FC = () => {
    const refCanvas = useRef<HTMLCanvasElement | null>(null)
    let longitud:number = 0;
    let latitud:number = 0;

    useEffect(() => {
        if(!refCanvas.current){return;}
        const escena = new THREE.Scene()
        const camara = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1,1100);
        const campoVision = new THREE.SphereGeometry(500,60,40);
        campoVision.scale(-1,1,1);
        const textura = new THREE.TextureLoader().load(aulaFondo);
        textura.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({map: textura});
        const meshCampoVision = new THREE.Mesh(campoVision,material);
        escena.add(meshCampoVision);

        const renderizador = new THREE.WebGLRenderer({canvas: refCanvas.current});
        renderizador.setPixelRatio(window.devicePixelRatio);
        renderizador.setSize(window.innerWidth/2, window.innerHeight/2);

        const animacion = () => {
            requestAnimationFrame(animacion);
            enfoque();
        }

        const enfoque = () => {
            longitud += 0.02;
            latitud = Math.max(-85, Math.min(85, latitud));
            let phi:number = THREE.MathUtils.degToRad(90 - latitud);
            let theta:number = THREE.MathUtils.degToRad(longitud);

            const x:number = 500 * Math.sin(phi) * Math.cos(theta);
            const y:number = 500 * Math.cos(phi);
            const z:number = 500 * Math.sin(phi) * Math.sin(theta);
            camara.lookAt(x,y,z);
            renderizador.render(escena,camara);
        }

        animacion();
    }, [])
    return (
        <canvas ref={refCanvas} style={{"height":"100%", "width":"100%"}}></canvas>
    )
}