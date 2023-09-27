import * as THREE from 'three';
export class Objeto3d{ //Declara los parametros para definir las dimensiones y color del objeto
    x:number; // ancho
    y:number; // largo
    z:number; // grosor
    color:string; // color del objeto

    constructor(x:number, y:number, z:number, color:string){
        // Al crear una instancia de esta clase, se deben enviar los siguientes valores para definir el tamaño y el color
        // Carga los parámetros enviados
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
    }

    crearTabla(){ // crear tabla se refiere a crear un objeto tipo cubo o box
        // Crea una instancia de la clase BoxGeometry para crear el cubo
        const figura = new THREE.BoxGeometry(this.x,this.y,this.z);

        // Invoca la clase MeshBasicMaterial para darle color al objeto con textura simple
        const material = new THREE.MeshBasicMaterial({color: this.color})
        // Asigna el color y textura a la figura
        const panel = new THREE.Mesh(figura,material);
        // Retorna el cubo con el color ingresado
        return panel;
    }
}