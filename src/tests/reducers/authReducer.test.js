import { authReducer } from '../../reducers/authReducer'
import { types } from '../../types/types';

describe('Tests on AuthReducer', () => {
    test('should login', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Jhon Foo'
            }
        }

        const state = authReducer(initState, action);
        expect(state).toEqual({
            uid: 'abc',
            name: 'Jhon Foo'
        });
    });

    test('should logout', () => {
        const initState = {};
        const action = {
            type: types.logout,
        }

        const state = authReducer(initState, action);
        expect(state).toEqual({});
    });

    test('should not change the state', () => {
        const initState = {};
        const action = {
            type: 'unknownType',
            payload: {
                uid: 'idDoesNotExist',
                displayName: 'Jhon Foo'
            }
        }

        const state = authReducer(initState, action);
        expect(state).toEqual(initState);
    })
});