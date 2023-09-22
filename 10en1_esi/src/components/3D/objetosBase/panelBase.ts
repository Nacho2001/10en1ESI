import * as THREE from 'three';

export function panel(x:number,y:number,z:number,color:string){
    const figura = new THREE.BoxGeometry(x,y,z);
    const material = new THREE.MeshBasicMaterial({color: `#ff0000`})
    const panel = new THREE.Mesh(figura,material);
    return panel;
}