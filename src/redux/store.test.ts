import { handleSearch } from './appSlice';
import { store } from './store';

describe('store', () => {
  test('changes search state when is dispatched', () => {
    expect(store.getState().app.searchValue).toEqual('news');

    store.dispatch(handleSearch('abc'));
    expect(store.getState().app.searchValue).toEqual('abc');
  });
});
