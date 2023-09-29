// Importa el componente con el fondo de la escena
import { EscenaFondo } from "./EscenaFondo";
// Trae el componente con los objetos 3d
import { EscenaFrente } from "./EscenaFrente";

// Devuleve un único componente con ambas escenas
export const EscenaCompleta = () => {
    return (
        <>
            <EscenaFondo/>
            <EscenaFrente/>
        </>
    )
}