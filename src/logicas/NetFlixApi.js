import {listMovies, detailMovie, error} from '../actions/actionCreator';
import { browserHistory } from 'react-router';

export default class NetFlixApi {
    static listMovies(url) {
        return dispatch => {
            fetch(url).then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
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
                    response.json().then(result => {
                        if(type === 'title'){
                            dispatch(detailMovie(result));
                            return result;
                        }else{
                            dispatch(listMovies(result));
                            return result;
                        }
                    });
                } else {
                    response.json().then(result => {
                        dispatch(error(result.message));
                        browserHistory.push('/erros');
                    });
                }
            });
        }
    }

}