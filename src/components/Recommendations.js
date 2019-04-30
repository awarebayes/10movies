import React, { Component } from 'react';
import { connect } from "react-redux";

import './css/Recommendations.css'
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css'
import {togglePredicting, fetchedPredictions} from "../store/actions";


const mapStateToProps = state => {
    return { predicting: state.predicting,
             predicted: state.predicted,
            films_selected: state.films_selected,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        togglePredicting: bool => dispatch(togglePredicting(bool))
    };
}


class Recommendations_ extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            return true;
        }
        return this.state !== nextState;
    }

    predict(){
        this.props.togglePredicting(true);
        window.server.emit("predict", this.props.films_selected);
    }


    render(){


        let films = [];
        for(let i=0; i<10; i++){
            films.push(window.movies[Math.floor(Math.random() *  window.movies.length)]);
        }

        console.log(films.map(x=>x.id));


        let tbody = (
        <tbody>
        {films.map((f, idx)=>
            <tr>
            <th>{idx}</th>
            <td>{f.title.slice(0, 40)}</td>
            <td>{f.id}</td>
            <td>{f.genres}</td>
            <td>{f.rating}</td>
                <td>{Math.floor(Math.random() *  10)}</td>
            </tr>

        )}
        </tbody>
        );

        let pageLoader = (<span/>);

        if(this.props.predicting){
            pageLoader = (
                <div className="pageloader is-active"><span className="title">Pageloader</span></div>
            );
        }

        let predict_btn = (<span/>);

        if(!this.props.predicting && this.props.predictions === null){
            predict_btn = (
                <div>
                    <h1> All movies are selected. Rate them wisely. Then hit predict on the button below. </h1>
                    <a className="button is-large is-rounded is-success" onClick={()=>this.predict()}>predict</a>
                </div>
            )
        }

        return (
            <div className="table_div">
                {pageLoader}
                {predict_btn}
                

            </div>

        )
    }
}

const Recommendations = connect(mapStateToProps, mapDispatchToProps)(Recommendations_);
export default Recommendations;