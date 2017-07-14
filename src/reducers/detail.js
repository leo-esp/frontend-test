export function detail (state = {}, action) {

    if (action.type === 'DETAIL') {
        return action.movie;
    }

    return state;
}