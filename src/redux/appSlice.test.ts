import { appReducer, handleCardsPerPage } from './appSlice';
import { initialState } from './appState';

describe('appSlice', () => {
  it('should work setData action ', () => {
    const pageSize = 20;

    const state = appReducer(initialState, handleCardsPerPage(pageSize));

    expect(state.pageSize).toEqual(pageSize);
  });
});
