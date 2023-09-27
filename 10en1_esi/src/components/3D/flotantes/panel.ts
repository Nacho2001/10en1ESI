import * as THREE from 'three';
import { Objeto3d } from '../objetosBase/panelBase2';

export class Panel extends Objeto3d{
    constructor(color:string){
        super(8,5,0.1,color)
    }
    panel(x:number, y:number){
        // Primero, crea el objeto tipo cubo con crearTabla
        const panelCentral = this.crearTabla();
        panelCentral.position.set(x,y,-0.5);
        // Retorna el boton con texto incluido
        return panelCentral;
    }
}