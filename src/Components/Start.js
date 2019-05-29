import React, { Component } from 'react';
import Test from './Qr';

export default class Start extends Component {
    render() {
        return (
            <div className='start'>
                <h2>¡ Hola Laboratorian!</h2>
                <h4>Coloca tu codigo QR frente<br></br> a la camara y registra tu<br></br> asistencia</h4>
                <Test/>
            
            </div>
        )
    }
}
