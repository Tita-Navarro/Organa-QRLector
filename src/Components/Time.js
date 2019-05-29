import React, { Component } from 'react'

export default class Time extends Component {
    render() {
        let fecha = new Date();
         let Dia = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear(); 
         let Hora = "Hora: "+fecha.getHours()+":"+fecha.getMinutes();
        return (
            <div className="time">
                {Dia +" "+ Hora}
            </div>
        )
    }
}
