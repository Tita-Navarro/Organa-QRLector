import React, { Component } from 'react';
import {data} from './data';

const provideData = React.createContext();

class DataProvider extends Component {
    state={
        dataComplit:data
    }
    render() {
        return (
            <provideData.Provider value ={{
                ...this.state
            }}>
                {this.props.children}
            </provideData.Provider>
            
        )
    }
}
const ConsumerData = provideData.Consumer;

export {DataProvider, ConsumerData}