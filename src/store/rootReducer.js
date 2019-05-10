import Fuse from 'fuse.js'


let searchOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "title",
    ]
};

let initialState = {
    searchBar: "",
    films_selected: {},
    page: 1,
    search_result: window.movies.map(x=>x.id),
    sortBy: 'id',
    predicting: false,
    predicted: null,
};
initialState.films_shown = initialState.search_result.slice(0,15);


let fuse = new Fuse(window.movies, searchOptions);


function rootReducer(state = initialState, action) {
    if (action.type === "TYPE_SEARCHBAR") {

        // SearchBar is clear
        if (action.payload === ""){
            let temp = Object.assign({}, state, {
                searchBar: "",
                sortBy: 'id',
                search_result: window.movies.map(x=>x.id),
                page: 1,
            });

            temp.films_shown = temp.search_result.slice(0,15);
            return temp;
        }

        // SearchBar is clear
        let temp =  Object.assign({}, state, {
            searchBar: action.payload,
            page: 1,
            search_result: fuse.search(action.payload).map(x=> x.id),

        });

        return Object.assign({}, temp, {
            films_shown: temp.search_result.slice(15*(state.page-1), 15*state.page)
        })
    }

    if (action.type === "SELECT_PAGE") {
        console.log(action.payload);
        return Object.assign({}, state, {
            page: action.payload,
            films_shown: state.search_result.slice(15*(action.payload-1), 15*action.payload)
        });
    }

    if (action.type === "ADD_FILM") {

        if (action.payload in state.films_selected || Object.keys(state.films_selected).length === 10)
            return state;

        let stateCopy = JSON.parse(JSON.stringify(state));
        stateCopy.films_selected[action.payload] = 5;
        return stateCopy;
    }

    if (action.type === "SORT_BY") {
        let search_result = [].concat(window.movies);
        if(action.payload === 'id'){

            console.log("sorting by id");
            search_result.sort((a, b) =>  Math.sign(a.id  - b.id))
        }
        if(action.payload === 'votes'){
            search_result.sort((a, b) => Math.sign(b.votes  - a.votes))
        }

        let temp = Object.assign({}, state, {
            sortBy: action.payload,
            page: 1,
            search_result: search_result.map(x => x.id)
        });

        return Object.assign({}, temp, {
            films_shown: temp.search_result.slice(15*(temp.page-1), 15*temp.page)
        })
    }

    if (action.type === "SET_FILMS_SHOWN") {
        return Object.assign({}, state, {
            films_shown: action.payload,
        });
    }

    if (action.type === "DELETE_FILM") {
        let stateCopy = JSON.parse(JSON.stringify(state));
        delete stateCopy.films_selected[action.payload];
        return stateCopy;
    }

    if (action.type === "RATE_FILM") {
        let stateCopy = JSON.parse(JSON.stringify(state));
        if(0 <= action.payload.rating && action.payload.rating <= 10) stateCopy.films_selected[action.payload.id] = action.payload.rating;
        return stateCopy;
    }

    if (action.type === "TOGGLE_PREDICTING"){
        return Object.assign({}, state, {
            predicting: action.payload,
        });
    }

    if (action.type === "FETCHED_PREDICTIONS"){
        return Object.assign({}, state, {
            predicted: action.payload,
        });
    }


    return state;
}

export default rootReducer;