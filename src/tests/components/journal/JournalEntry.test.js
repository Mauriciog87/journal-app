import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
    id: 10,
    date: 0,
    title: 'Hello',
    body: 'World',
    url: 'https://someurl/picture.jpg'
};

const wrapper = mount(
    <Provider store={store}>
        <JournalEntry {...note} />
    </Provider>
);

describe('test on <JournalEntry />', () => {
    test('should render ok', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should active the note', () => {
        wrapper.find('.journal__entry').prop('onClick')();

        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(nota.id, { ...nota })
        );
    });
});
