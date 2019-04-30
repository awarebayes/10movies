export function typeSearchBar(payload) {
    return { type: "TYPE_SEARCHBAR", payload }
}

export function setFilmsShown(payload) {
    return { type: "SET_FILMS_SHOWN", payload }
}

export function addFilm(payload) {
    return { type: "ADD_FILM", payload }
}

export function deleteFilm(payload) {
    return { type: "DELETE_FILM", payload }
}

export function rateFilm(payload) {
    return { type: "RATE_FILM", payload }
}

export function selectPage(payload) {
    return { type: "SELECT_PAGE", payload}
}

export function sortBy(payload) {
    return { type: "SORT_BY", payload}
}


export function fetchedPredictions(payload) {
    return {type: "FETCHED_PREDICTIONS", payload}
}

export function togglePredicting(payload) {
    return {type: "TOGGLE_PREDICTING", payload}
}