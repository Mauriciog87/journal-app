import { finishLoading, removeError, setError, startLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('tests on ui-actions', () => {
   test('all actions should works', () => {
       const action = setError('Need help');

       expect(action).toEqual({
           type: types.uiSetError,
           payload: 'Need help'
       });

        const uiRemoveError = removeError();
        const uiStartLoading = startLoading();
        const uiFinishLoading = finishLoading();

        expect(uiRemoveError).toEqual({
            type: types.uiRemoveError
        });

        expect(uiStartLoading).toEqual({
            type: types.uiStartLoading
        });

        expect(uiFinishLoading).toEqual({
            type: types.uiFinishLoading
        });
   });
});
