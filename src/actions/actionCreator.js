export function listMovies(movies){
    return {type:'LIST', movies};
}

export function detailMovie(movie){
    return {type: 'DETAIL', movie};
}

export function error(msg){
    return {type: 'ERROR', msg};
}