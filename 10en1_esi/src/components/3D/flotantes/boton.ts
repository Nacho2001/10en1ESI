import { panel } from '../objetosBase/panelBase';
import {createText} from 'three/examples/jsm/webxr/Text2D';
export const boton = (rotacion:number,ancho:number,largo:number,texto:string,color:string) => {
    const botonSimple = panel(ancho,largo,0.1,color);
    const textoBoton = createText(texto, 0.6);
    botonSimple.add(textoBoton)
    textoBoton.position.set(0,0,0.06)
    botonSimple.position.set(-1.5,0,0);
    botonSimple.rotation.set(0,rotacion,0)
    return botonSimple
}