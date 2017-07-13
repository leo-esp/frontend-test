import {listMovies, detailMovie, errorMovie} from '../actions/actionCreator';

export default class NetFlixApi {
    static listMovies(url) {
        return dispatch => {
            fetch(url).then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .catch(err => console.error(err))
                .then(movies => {
                    dispatch(listMovies(movies));
                    return movies;
                });
        }
    }

    static search(text, type) {
        return dispatch => {

            fetch(`https://netflixroulette.net/api/api.php?${type}=${text}`).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    dispatch(errorMovie(response.message));
                    return response.message;
                }
            }).then(result => {
                if(type === 'author' || type === 'director'){
                    dispatch(listMovies(result));
                    return result;
                }else{
                    dispatch(detailMovie(result));
                    return result;
                }
            });
        }
    }

}