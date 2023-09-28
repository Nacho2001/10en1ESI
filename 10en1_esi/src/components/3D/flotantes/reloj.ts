import { Objeto3d } from "../objetosBase/panelBase";

function temporizador(color:string,color2:string){
    const temporizador = new Objeto3d(color).circulo(0.4,60,2.5,1.6,2);
    return temporizador
}

export default temporizador;