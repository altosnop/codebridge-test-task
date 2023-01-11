import { RootState } from '../configureStore';

export const articlesSelector = (state: RootState) => state.articles.items;
export const totalItemsSelector = (state: RootState) =>
	state.articles.totalItems;
export const loadingSelector = (state: RootState) => state.articles.loading;
