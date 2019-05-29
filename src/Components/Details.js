import React, { Component } from 'react'
import {ConsumerData} from '../context'

import ListDetails from './ListDetails'

export default class Details extends Component {
    render() {
        return (
           <section>
               <ListDetails/>
           </section>
        )
    }
}
