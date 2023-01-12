import { RootState } from '../configureStore';

export const articlesSelector = (state: RootState) => state.articles.items;
export const loadingSelector = (state: RootState) => state.articles.loading;
export const filterSelector = (state: RootState) => state.articles.filter;

export const filteredArticlesSelector = (state: RootState) => {
	const articles = articlesSelector(state);
	const filter = filterSelector(state);

	return articles.filter(
		article =>
			article.title.toLowerCase().includes(filter.toLowerCase()) ||
			article.summary.toLowerCase().includes(filter.toLowerCase())
	);
};
