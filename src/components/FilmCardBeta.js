import React, { Component } from "react";
import { addFilm } from '../store/actions'
import { connect } from "react-redux";
import { Textfit } from 'react-textfit'

import './css/FilmCardBeta.css'

function mapDispatchToProps(dispatch) {
    return {
        addFilm: article => dispatch(addFilm(article))
    };
}

class FilmCardBeta_ extends Component {

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
            <div className="cellphone-container">
                <div className="movie">
                    <div className="menu"><i className="material-icons"></i></div>
                    <img className="movie-img" src={this.props.poster_url} />
                    <div className="text-movie-cont">
                        <div className="mr-grid title-row">
                            <div className="col1">
                                <h1>
                                    <Textfit mode="single" max={36}>
                                        {this.props.title}
                                    </Textfit>
                                </h1>
                                <ul className="movie-gen">
                                    <li>PG-13 /</li>
                                    <li>2h 49min /</li>
                                    <li>Adventure, Drama, Sci-Fi,</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mr-grid summary-row">
                            <div className="col2">
                                <h5>SUMMARY</h5>
                            </div>
                            <div className="col2">
                                <ul className="movie-likes">
                                    <li><i className="material-icons">&#xE813;</i>124</li>
                                    <li><i className="material-icons">&#xE813;</i>3</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mr-grid">
                            <div className="col1">
                                <p className="movie-description"> {this.props.description} </p>
                            </div>
                        </div>
                        <div className="mr-grid action-row">
                            <div className="col2">
                                <div className="watch-btn" onClick={()=>this.props.addFilm(this.props.id)}><h3>
                                    <i className="material-icons">&#xE037;</i>ADD TO SEEN
                                </h3></div>
                            </div>
                            <div className="col6 action-btn"><i className="material-icons">&#xE161;</i>
                            </div>
                            <div className="col6 action-btn"><i className="material-icons">&#xE866;</i>
                            </div>
                            <div className="col6 action-btn"><i className="material-icons">&#xE80D;</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const FilmCardBeta = connect(null, mapDispatchToProps)(FilmCardBeta_);
export default FilmCardBeta;