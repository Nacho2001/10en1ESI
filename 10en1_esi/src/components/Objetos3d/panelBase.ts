import * as THREE from 'three';
import {createText} from 'three/examples/jsm/webxr/Text2D';
export function panel(x:number,y:number,z:number,color:string,texto:string){
    const figura = new THREE.BoxGeometry(x,y,z);
    const material = new THREE.MeshBasicMaterial({color: color})
    const panel = new THREE.Mesh(figura,material);
    //const textoPanel = createText(texto,40)
    //panel.add(textoPanel)
    //textoPanel.position.set(0,0.06,0)
    return panel;
}