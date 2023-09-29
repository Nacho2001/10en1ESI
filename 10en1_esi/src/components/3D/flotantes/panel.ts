// Trae la clase Objeto3d para crear el panel
import { Objeto3d } from '../objetosBase/panelBase';

// Este "subpanel" es complemento del panel Central que tendrá un color diferente, el cual se obtiene como parámetro
function subPanel(color2:string){
    // Crea el panel llamando la clase Objeto3d, envia el color y las dimensiones que se espera que tenga
    const subPanel = new Objeto3d(color2).tabla(7.3,2.8,0.1);
    // Posicion del subpanel [x,y,z]
    subPanel.position.set(0,-0.2,0.1);
    return subPanel;
}

// Funcion para crear el panel Central, requiere que se envien los colores para el panel y otro para el subpanel
export function panelCentral2(color1:string,color2:string){
    // Crea el segundo panel con la funcion anterior y enviandole el segundo color
    const panelRelleno = subPanel(color2)
    // Crea el panel primario enviandole el color a la clase Objeto 3d y las dimensiones que debe tener
    const panelCentral = new Objeto3d(color1).tabla(8,4,0.1);
    // Establece la posicion del panel
    panelCentral.position.set(0.1,0,-0.5);
    // Añade el panel secundario al elemento
    panelCentral.add(panelRelleno);
    // Retorna el elemento panelCentral con el segundo ya integrado
    return panelCentral
}