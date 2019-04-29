import React, { Component } from "react";
import { addFilm } from '../store/actions'
import { connect } from "react-redux";

import './css/FilmCard.css'

function mapDispatchToProps(dispatch) {
    return {
        addFilm: id => dispatch(addFilm(id))
    };
}

class FilmCard_ extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            return true;
        }
        return this.state !== nextState;
    }

    render() {

        return (
        <div className="column film-card" style={{backgroundImage: "url(" + this.props.poster_url + ")"}}>
            <div className="info">
                <div className="info-wrapper">
                    <p className="title">
                        {this.props.title}
                    </p>
                    <div className="hidden">
                        <p className="description">
                            {this.props.description}
                        </p>
                        <a className="button learn is-small is-warning is-rounded is-outlined">Learn more...</a>

                        <br/>

                    </div>

                    <a className="button seen is-success is-rounded" onClick={()=>this.props.addFilm(this.props.id)}>I've seen it!</a>
                </div>
            </div>
        </div>
        )
    }
}

const FilmCard = connect(null, mapDispatchToProps)(FilmCard_);
export default FilmCard;