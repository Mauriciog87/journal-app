import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Mauricio'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 1234,
            title: 'Hello',
            body: 'World',
            date: 0
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('tests on<NoteScreen />', () => {
    test('should render ok', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should trigger active note', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hi again'
            }
        });

        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'Hello world',
                title: 'Hi again twice',
                id: 1234,
                date: 0
            }
        );
    });
});
