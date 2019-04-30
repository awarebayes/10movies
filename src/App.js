// Libraries
import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bulma/css/bulma.css'

// Components
import FilmShowcase from  './components/FilmShowcase'
import SelectedShowcase from  './components/SelectedShowcase'
import SearchForm from './components/SearchForm'
import Pagination from './components/Pagination'
import Recommendations from './components/Recommendations'
import {togglePredicting, fetchedPredictions} from "./store/actions";


// Sources
import './App.css';
import movies from './data/web.json';


// socket
import io from 'socket.io-client';
const socket = io('http://localhost:3001');
window.server = socket;

socket.on('done_predicting', function(data){
    window.store.dispatch(fetchedPredictions(data));
    window.store.dispatch(togglePredicting(false));
});

// movies
window.movies = movies;
for (let i of window.movies) {
  if (i.tmdb){ i.poster = "http://image.tmdb.org/t/p/w400/" + i.poster }
}




const mapStateToProps = state => {
    return { films_selected: state.films_selected};
};

// main

class App_ extends Component {

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

    if(Object.keys(this.props.films_selected).length === 10){
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

const App = connect(mapStateToProps)(App_);
export default App;
