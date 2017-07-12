import {List} from 'immutable';

export function collection(state = new List(), action) {
    if (action.type === 'LIST') {
        return new List(action.movies);
    }
    return state;
}