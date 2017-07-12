import {listMovies, detailMovie, errorMovie} from '../actions/actionCreator';
import axios from 'axios';

export default class NetFlixApi {
    static listMovies(url) {
        return dispatch => {
            axios.get(url).then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .catch(err => console.error(err))
                .then(movies => {
                    // dispatch(listMovies(movies));
                    return movies;
                });
        }
    }

    static search(text, type) {
        return dispatch => {

            fetch(`http://netflixroulette.net/api/api.php?${type}=${text}`).then(response => {
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