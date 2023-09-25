import * as THREE from 'three';
import { Objeto3d } from '../objetosBase/panelBase2';

export class Panel extends Objeto3d{
    constructor(x:number,y:number,color:string){
        super(x,y,0.1,color)
    }
}