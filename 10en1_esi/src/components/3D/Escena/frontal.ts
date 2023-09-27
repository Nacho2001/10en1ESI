import * as THREE from 'three';
import {panel} from '../objetosBase/panelBase';

export function escena_frontal(renderizador:THREE.WebGLRenderer){
    //Crea una escena nueva
    const escenaFr = new THREE.Scene();
    // Crea una camara de perspectiva
    const camaraFr = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    escenaFr.background = null;
    renderizador.setSize(window.innerWidth, window.innerHeight)
    camaraFr.position.z = 5
    // Crea un objeto tipo "box", con las dimensiones de un rectangulo
    const box = panel(1,2,1,"0x00ff00");
    escenaFr.add(box)
    const animar = () => {
        requestAnimationFrame(animar);
        // Rotación del cubo
        if (box) {
            box.rotation.x += 0.01;
            box.rotation.y += 0.01;
        }
        renderizador.render(escenaFr,camaraFr)
    }
    animar();
}