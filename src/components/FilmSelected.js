import React, { Component } from 'react';
import { Textfit } from 'react-textfit'

import './css/SelectedFilm.css'
import {rateFilm, deleteFilm} from "../store/actions";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        rateFilm: action => dispatch(rateFilm(action)),
        deleteFilm: id => dispatch(deleteFilm(id))
    };
}

class FilmSelected_ extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            return true;
        }
        return this.state !== nextState;
    }

    render(){
        return (
            <div className="selected-film" style={{backgroundImage: "url(" + this.props.poster + ")"}}>
                <div className="fade-wrapper">
                    <div className="title">
                        <Textfit mode="single" max={24}>
                            {this.props.title}
                        </Textfit>
                    </div>
                    <div>
                        <div className="field has-addons">
                            <div className="control">
                                <a className="button" onClick={()=>this.props.rateFilm({id: this.props.id, rating: this.props.rating-1})}>
                                    -
                                </a>
                            </div>
                            <div className="control">
                                <input className="input" type="text" value={this.props.rating}/>
                            </div>
                            <div className="control">
                                <a className="button " onClick={()=>this.props.rateFilm({id: this.props.id, rating: this.props.rating+1})}>
                                    +
                                </a>
                            </div>
                        </div>
                    </div>
                    <a className="cancel" onClick={()=>this.props.deleteFilm(this.props.id)}>
                        <span className="icon">
                            <i className="material-icons">clear</i>
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}


const FilmSelected = connect(null, mapDispatchToProps)(FilmSelected_);
export default FilmSelected;