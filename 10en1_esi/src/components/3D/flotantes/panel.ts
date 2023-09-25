import { panel } from '../objetosBase/panelBase';
import {createText} from 'three/examples/jsm/webxr/Text2D';
export const paneljuego = (ancho:number,largo:number,texto:string,color:string) => {
    const panelJuego = panel(ancho,largo,0.1,color);
    const textoPanel = createText(texto, 0.6);
    panelJuego.add(textoPanel)
    textoPanel.position.set(0,0,0.06)
    panelJuego.position.set(0,0,0);
    return panelJuego
}