// Obtiene la funcion para crear el texto 2d (tambien es un objeto 3d)
import { createText } from "three/examples/jsm/webxr/Text2D";
// Trae la clase Objeto3d para generar el boton
import { Objeto3d } from "../objetosBase/panelBase";

// Extiende la clase objeto3d para crearlos objetos 3d
export class Boton extends Objeto3d{
    // Obtiene el texto que se quiere ingresar en el boton
    texto:string;
    // Esta clase requiere el largo, ancho, texo y color del boton
    constructor(color:string, texto:string){
        // Envia el color del objeto a la clase padre
        super(color);
        // el texto solamente lo utiliza esta clase, por eso no se coloca en super
        this.texto = texto;
    };

    // método para crear el boton, requiere la posicion en la que se fijar el mismo: eje x y eje y
    boton(x:number, y:number){
        // Primero, crea el objeto tipo cubo con el metodo tabla de la clase padre
        const miBoton = this.tabla(2.5,0.7,0.1);
        // Crea el objeto con el texto en 2d, require el texto a ingresar y el tamaño de la fuente
        const textoBoton = createText(this.texto, 0.3);
        // Añade el texto al boton
        miBoton.add(textoBoton);
        // Fija la posicion del objeto
        miBoton.position.set(x,y,-0.5);
        // Establece la posición del texto (casi en el centro) [x,y,z]
        textoBoton.position.set(-0.1,0.1,0.3);
        // Retorna el boton con texto incluido
        return miBoton;
    };
}