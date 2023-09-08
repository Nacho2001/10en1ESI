import React, {useEffect, useRef} from "react";
import * as THREE from 'three';
import { ObjectLoader } from "three";
import './creadorObjetos';

const PanelSimple = () => {
    const canvasRef = useRef();
    useEffect(() => {
        const anchoCamera=window.innerWidth;
        const largoCamera=window.innerHeight; 
        let escenaArray = [];
        escenaArray = escena(75,anchoCamera,largoCamera, 0.1, 1000);
        let objetoArray = [];
        objetoArray = objeto();
        animacion();
    }, [])
    return ( 
        <> 
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default PanelSimple;