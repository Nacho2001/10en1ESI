import * as THREE from 'three';
export function escena(){
    // Define la escena
    const escena = new THREE.Scene()
    // Enfoque del objeto
    const camara = new THREE.PerspectiveCamera(zoom, anchoCamara / largoCamara, 0.1, 1000 );
    // Renderizador del objeto
    const renderizador = new THREE.WebGLRenderer();
    // renderiza la escena con el tamaño indicado: 500x500
    renderizador.setSize(500,500);
    camara.position.z = 5;
}

export function objeto(){
    // Define geometria del objeto, en este caso un cubo
    const geometria = new THREE.BoxGeometry();
    // Define el material del bjeto
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
    // Une el objeto con material y el color
    const objecto = new THREE.Mesh(geometria, material);
}

export function animacion(){
    // Define la animación del objeto
    requestAnimationFrame(animacion);
    object.rotation.x += 0.01; // Rotacion de cada eje
    object.rotation.y += 0.01;
    renderer.render(scene,camera);
}