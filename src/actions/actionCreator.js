export function listMovies(movies){
    return {type:'LIST', movies};
}

export function detailMovie(movie){
    return {type: 'DETAIL', movie};
}

export function error(msg){
    return {type: 'ERROR', msg};
}

export function favorite(movie){
    return {type: 'FAVORITE', movie};
}

export function showFavorites(favoriteMovies){
    return {type: 'LIST_FAVORITES', favoriteMovies};
}