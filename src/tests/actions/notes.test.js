/**
 * @jest-environment node
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'Testing'
    },
    notes: {
        active: {
            id: 'E9GPsT3ejL8e7Izoy9H6',
            title: 'Hello',
            body: 'World'
        }
    }
}

let store = mockStore(initState);

global.scrollTo = jest.fn();  

describe('tests on notes', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

    test('should create a newNote', async() => {
      await store.dispatch(startNewNote());

      const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;
        await db.doc(`Testing/journal/notes/${docId}`).delete();
    });

    test('startLoadingNote should load notes', async() => {
        jest.setTimeout(20000);
        await store.dispatch(startLoadingNotes('Testing'));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        }

        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('startSaveNote should update the note', async() => {
        const note = {
            id: 'E9GPsT3ejL8e7Izoy9H6',
            title: 'title',
            body: 'body'
        };

        await store.dispatch(startSaveNote(note));

        const actions = store.getActions();

        expect(actions[0].type).toBe(types.notesUpdated);

        const doc = await db.doc(`/Testing/journal/notes/${note.id}`).get();

        expect(doc.data().title).toBe(note.title);
    });

    test('startUploading should update the entry`s url', async() => {
        const file = new File([], 'image.jpg');
        await store.dispatch(startUploading(file));
    })
    
});
