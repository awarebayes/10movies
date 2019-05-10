import React, { Component } from 'react';

import SimpleTable from './SimpleTable'

import './css/main.css'

// Main class for handling predicted data.
// Server response is passed here for you to handle

class VisProvider extends Component{
    render(){
        let visualizations = [];
        for(let i of this.props.predicted){
            if(i.kind === 'SimpleTable'){
                visualizations.push(<SimpleTable kind={i.kind}
                     data={i.data} index={i.index} name={i.name}/>);
            }
        }
        return (
            <p>
                {visualizations}
            </p>    
        );
    }
}

export default VisProvider;