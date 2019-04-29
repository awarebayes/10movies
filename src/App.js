// Libraries
import React, { Component } from 'react';

// Components
import FilmShowcase from  './components/FilmShowcase'
import SelectedShowcase from  './components/SelectedShowcase'
import SearchForm from './components/SearchForm'
import Pagination from './components/Pagination'
import Recommendations from './components/Recommendations'

// Sources
import './App.css';
import movies from './data/web.json';


window.movies = movies;
for (let i of window.movies) {
  if (i.tmdb){ i.poster = "http://image.tmdb.org/t/p/w400/" + i.poster }
}

// main

class App extends Component {

  render() {

    let body = (
        <div>
          <div className="header">
            <p className="title">
              10Films.io
            </p>
            <SearchForm />
          </div>

          <FilmShowcase/>
          <Pagination />
        </div>
    );

    if(true){
      body = <Recommendations/>
    }

    return (
      <div className="App">
        <div id="root" className="h100 has-navbar-fixed-top">
          <div className="columns h100">
            <div className="column nopad h100 films-navbar navbar is-3 is-fixed-top">
              <p className="title">Films selected:</p>
              <SelectedShowcase />
            </div>

            <div className="column nopad is-3 ">
            </div>

            <div className="column nopad">
              {body}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
