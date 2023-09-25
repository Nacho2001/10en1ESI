import { createText } from "three/examples/jsm/webxr/Text2D";
import { Objeto3d } from "../objetosBase/panelBase2";

// Extiende la clase objeto3d para crearlos objetos 3d
export class Boton extends Objeto3d{
    // Obtiene el texto que se quiere ingresar en el boton
    texto:string;
    // Esta clase requiere el largo, ancho, texo y color del boton
    constructor(x:number, y:number, color:string, texto:string){
        // Envia las dimensiones y color del objeto a la clase padre
        super(x,y,0.1,color);
        // el texto solamente lo utiliza esta clase, por eso no se coloca en super
        this.texto = texto;
    };

    // método para crear el boton
    boton(){
        // Primero, crea el objeto tipo cubo con crearTabla
        const miBoton = this.crearTabla();
        // Crea el objeto con el texto en 2d, require el texto a ingresar y el tamaño de la fuente
        const textoBoton = createText(this.texto, 0.6);
        // Añade el texto al boton
        miBoton.add(textoBoton);
        // Establece la posición del texto (casi en el centro)
        textoBoton.position.set(0,0,0.06);
        // Retorna el boton con texto incluido
        return miBoton;
    };

    // Este metodo crea el boton y cambia la rotacion depende del lado que se especifique 
    botonVolteado(lado:string){
        // Crea el boton utilizando el método anterior
        const boton = this.boton();
        // Aplica el giro al boton de acuerdo a la posicion indicada
        switch (lado) {
            // Si se indico "derecha" en el parámetro, aplicará el giro hacia la derecha
            case "derecha":
                boton.position.set(-1.5,0,0); // los numeros corresponden a los ejes: (x,y,z)
                break;
            // En cambio si se indicó izquierda, el boton va a girar hacia la izquierda
            case "izquierda":
                boton.position.set(1.5,0,0);
                break;
            default: // Si parámetro enviado no coincide con las opciones anteriores, el boton quedará en posición central
                boton.position.set(0,0,0);
                break;
        }
        return boton;
    }
}