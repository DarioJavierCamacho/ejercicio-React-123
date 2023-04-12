import React from 'react';
import ComponentB from '../pure/componentB';
import { contacto } from '../../models/Contacto';



const ComponentA = () => {
    const defaultContacto = new contacto("Nombre","Apellido","email",false);
    return (
        <div>
            <ComponentB Contacto={defaultContacto}></ComponentB>
        </div>
    );
};



export default ComponentA;
