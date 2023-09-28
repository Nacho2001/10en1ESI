import { Objeto3d } from '../objetosBase/panelBase';

function subPanel(color2:string){
    const subPanel = new Objeto3d(color2).tabla(7.3,2.8,0.1);
    subPanel.position.set(0,-0.2,0.1);
    return subPanel;
}

export function panelCentral2(color1:string,color2:string){
    const panelRelleno = subPanel(color2)
    const panelCentral = new Objeto3d(color1).tabla(8,4,0.1);
    panelCentral.position.set(0.1,0,-0.5);
    panelCentral.add(panelRelleno);
    return panelCentral
}