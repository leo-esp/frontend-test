import {List} from 'immutable';

export function favorite(state = new List(), action) {
    if (action.type === 'FAVORITE') {
        if(state.filter(movie => movie.unit === action.movie.unit).length > 0){
            return new List(state.filter(movie => movie.unit !== action.movie.unit))
        }else{
            return new List(state.concat(action.movie));
        }
    }
    return state;
}
