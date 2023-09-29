import * as THREE from 'three';
export class Objeto3d{ //Declara los parametros para definir las dimensiones y color del objeto
    color:string; // color del objeto

    constructor(color:string){
        // Al crear una instancia de esta clase, se deben enviar los siguientes valores para definir el tamaño y el color
        this.color = color;
    }

    tabla(x:number,y:number,z:number){ // crear tabla se refiere a crear un objeto tipo cubo o box
        // Crea una instancia de la clase BoxGeometry para crear el cubo
        const figura = new THREE.BoxGeometry(x,y,z);
        // Invoca la clase MeshBasicMaterial para darle color al objeto con textura simple
        const material = new THREE.MeshBasicMaterial({color: this.color})
        // Asigna el color y textura a la figura
        const panel = new THREE.Mesh(figura,material);
        // Retorna el cubo con el color ingresado
        return panel;
    }
    circulo(tamanio:number,frag:number,x:number,y:number,z:number){
        const figura = new THREE.CircleGeometry(tamanio,frag);
        const material = new THREE.MeshBasicMaterial({color: this.color})
        const circulo = new THREE.Mesh(figura,material);
        circulo.position.set(x,y,z)
        return circulo
    }
}