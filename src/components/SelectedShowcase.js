import React, { Component } from 'react';
import FilmSelected from './FilmSelected'
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { films_selected: state.films_selected };
};

function prepare_films(film_ids) {
    film_ids = film_ids.map((x) => parseInt(x));
    let films = window.movies.filter(x => film_ids.includes(x.id));
    let films_ = [];
    for(let i of film_ids) films_.push(films.find(x=>x.id === i));
    return films_
}

class SelectedShowcase_ extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            return true;
        }
        return this.state !== nextState;
    }


    render(){
        return (
            <div>
                {
                    prepare_films(Object.keys(this.props.films_selected)).map((film, idx)=>
                        <FilmSelected poster={film.poster}

                                      rating={this.props.films_selected[Object.keys(this.props.films_selected)[idx]]}
                                      title={film.title}
                                      id={film.id}
                                      key={film.id}
                        />
                    )
                }
            </div>

        )
    }
}

const SelectedShowcase = connect(mapStateToProps)(SelectedShowcase_);
export default SelectedShowcase;