import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/Contacto';



const ComponentB = ({ Contacto }) => {
    return (
        <div>
            <h2>{ Contacto.Nombre }</h2>
            <h2>{ Contacto.Apellido }</h2>
            <h2>{ Contacto.Email }</h2>
            <h2>{ Contacto.Conectado }</h2>
            <h2>{ Contacto.Conectado?"Contacto en Linea":"Contacto No Disponible"}</h2>
        </div>
    );
};


ComponentB.propTypes = {
    Contacto: PropTypes.instanceOf(contacto)
};


export default ComponentB;
