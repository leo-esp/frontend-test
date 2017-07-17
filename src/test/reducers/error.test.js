import {error} from '../../reducers/error'

describe('Test error reducer', () => {
    it('should return the initial state', () => {
        expect(error(undefined, '')).toEqual('');
    })

    it('should handle ERROR', () => {
        expect(
            error({}, {
                type: 'ERROR',
                msg: "Sorry! We couldn't find a movie with that title!"
            })
        ).toEqual("Sorry! We couldn't find a movie with that title!")
    })
})