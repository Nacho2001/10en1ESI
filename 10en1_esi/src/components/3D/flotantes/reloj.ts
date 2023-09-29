// Importa la clase para crear el objeto 3d
import { Objeto3d } from "../objetosBase/panelBase";

// funcion para crear un temporizador
export function temporizador(color:string){
    // Crea el objeto a partir de la clase con el metodo circulo
    const temporizador = new Objeto3d(color).circulo(0.4,60,2.5,1.6,2);
    // retorna el objeto creado
    return temporizador
}