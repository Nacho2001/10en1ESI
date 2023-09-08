import { render } from '@testing-library/react';
import * as THREE from 'three';
function escena(zoom: number, anchoCamara: number,largoCamara: number,cerca: number, lejos: number, anchoEscena: number,largoEscena: number, posicionCamara: number){
    // Define la escena
    const escena = new THREE.Scene()
    // Enfoque del objeto
    const camara = new THREE.PerspectiveCamera(zoom, anchoCamara / largoCamara, cerca, lejos );
    // Renderizador del objeto
    const renderizador = new THREE.WebGLRenderer();
    // renderiza la escena con el tamaño indicado: 500x500
    renderizador.setSize(anchoEscena,largoEscena);
    // Posición de la camara
    camara.position.z = posicionCamara;
    // Prerara el array que contiene las constantes creadas
    const escenaArray = [escena, camara, renderizador];
    // Se retorna el array
    return (escenaArray)
}

function objeto(){
    // Define geometria del objeto, en este caso un cubo
    const geometria = new THREE.BoxGeometry();
    // Define el material del bjeto
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
    // Une el objeto con material y el color
    const objeto3d = new THREE.Mesh(geometria, material);
}

function animacion(){
    // Define la animación del objeto
    requestAnimationFrame(animacion);
    objeto3d.rotation.x += 0.01; // Rotacion de cada eje
    objeto3d.rotation.y += 0.01;
    renderizador.render(escena,camara);
}