import React, { Component } from 'react';



// Main class for handling predicted data.
// Server response is passed here for you to handle

class SimpleTable extends Component{
    render(){
        
        let rows = [];
        for(let row of this.props.data){
            let row_ch = []
            row_ch.push(<th>{row[0]}</th>)
            for(let col of row.slice(1,)){
                row_ch.push(<td>{col}</td>)
            }
            rows.push(<tr>{row_ch}</tr>)

        }
        

        let index = []
        for(let row of this.props.index){
            index.push(<th>{row}</th>)
        }

        return (
            <p className="visElem">
                <h1> {this.props.name} </h1>    
                <table className="table">
                    <thead>
                        <tr>
                        {index}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </p>    
        );
    }
}

export default SimpleTable;