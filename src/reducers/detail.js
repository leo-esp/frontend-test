export function detail (state = {}, action) {

    if (action.type === 'DETAIL') {
        return action.movie;
    }

    if(action.type === 'ERROR') {
        return action.errorMovie;
    }

    return state;
}