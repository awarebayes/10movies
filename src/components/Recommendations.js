import React, { Component } from 'react';
import { connect } from "react-redux";

import './css/Recommendations.css'
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css'
import {togglePredicting, fetchedPredictions} from "../store/actions";
import VisProvider from './../visualizations/VisProvider'


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
        //window.server.emit("predict", this.props.films_selected);
        setTimeout(() => {
            window.store.dispatch(fetchedPredictions([{
                'kind': 'SimpleTable',
                'name': 'Score',
                'index': ['id', 'score'],
                'data':[[111931, 3.22],
                [6212,4.65],
                [47148, 2.31],
                [4339, 4.96],
                [26887, 3.42],
                [33683, 2.33],
                [5951, 3.2],
                [115678, 1.2],
                [94126, 3.4],
                [129030, 4.9,]],},

            ]));
            window.store.dispatch(togglePredicting(false));
        }, 1000);
    }


    render(){
        let pageLoader = (<span/>);
        let predict_btn = (<span/>);
        let visualizer = (<span/>);

        if(this.props.predicting){
            pageLoader = (
                <div className="pageloader is-active"><span className="title">Pageloader</span></div>
            );
        }

        if(this.props.predicting === false && this.props.predicted === null){
            predict_btn = (
                <div>
                    <h1> All movies are selected. Rate them wisely. Then hit predict on the button below. </h1>
                    <a className="button is-large is-rounded is-success" onClick={()=>this.predict()}>predict</a>
                </div>
            );
        }

        if(this.props.predicting === false && this.props.predicted !== null){
            visualizer = (
                <div>
                    <VisProvider predicted={this.props.predicted} /> 
                </div>
            );
        }

        return (
            <div className="table_div">
                {pageLoader}
                {predict_btn}
                {visualizer}
            </div>

        )
    }
}

const Recommendations = connect(mapStateToProps, mapDispatchToProps)(Recommendations_);
export default Recommendations;