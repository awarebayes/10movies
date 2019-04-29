import React, { Component } from 'react';
import './css/Recommendations.css'


class Recommendations extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            return true;
        }
        return this.state !== nextState;
    }


    render(){

        let films = [];
        for(let i=0; i<10; i++){
            films.push(window.movies[Math.floor(Math.random() *  window.movies.length)]);
        }

        console.log(films);


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

        return (
            <div className="table_div">

                <h1 className="title">Euclidean Ranking</h1>

                <table className="table">
                    <thead>
                    <tr>
                        <th><abbr>#</abbr></th>
                        <th>Title</th>
                        <th>Id</th>
                        <th><abbr>Genres</abbr></th>
                        <th><abbr>TMDB</abbr></th>
                        <th><abbr>Score</abbr></th>
                    </tr>
                    </thead>

                    {tbody}

                </table>
            </div>

        )
    }
}

export default  Recommendations;