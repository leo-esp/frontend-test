export function error (state = '', action) {

    if (action.type === 'ERROR') {
        return action.msg;
    }

    return state;
}