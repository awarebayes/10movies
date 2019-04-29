import React, { Component } from 'react';
import FilmCardBeta from './FilmCardBeta'
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { films_shown: state.films_shown };
};

function chunk(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
        const last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
        } else {
            last.push(array[i]);
        }
    }
    return chunked_arr;
}

function prepare_films(film_ids) {
    let films = window.movies.filter(x => film_ids.includes(x.id));
    return chunk(films, 3);
}

class FilmShowcase_ extends Component{

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
                prepare_films(this.props.films_shown).map((row)=>
                    <div className="columns nopad">
                        {
                            row.map((film)=>
                                <FilmCardBeta poster_url={film.poster}
                                          description={film.overview}
                                          title={film.title}
                                          id={film.id}
                                />
                            )
                        }
                    </div>
                )
            }
            </div>

        )
    }
}

const FilmShowcase = connect(mapStateToProps)(FilmShowcase_);

export default FilmShowcase;