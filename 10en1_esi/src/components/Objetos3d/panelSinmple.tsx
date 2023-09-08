import React, {useEffect, useRef} from "react";
import * as THREE from 'three';

const PanelSimple = () => {
    const canvasRef = useRef();
    useEffect(() => {

        animacion();
    }, [])
    return ( 
        <> 
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default PanelSimple;