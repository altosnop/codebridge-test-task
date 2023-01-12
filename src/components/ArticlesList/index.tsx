import React, { useEffect } from 'react';
import ArticleCard from '../ArticleCard';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getArticles } from '../../store/articles/articlesSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	articlesSelector,
	filterSelector,
	loadingSelector,
	filteredArticlesSelector,
} from '../../store/articles/articlesSelectors';
import { Grid } from '@mui/material';

const ArticlesList = () => {
	const dispatch = useAppDispatch();

	const loading = useAppSelector(loadingSelector);
	const filter = useAppSelector(filterSelector);
	const articles = useAppSelector(articlesSelector);
	const filteredArticles = useAppSelector(filteredArticlesSelector);

	useEffect(() => {
		dispatch(getArticles());
	}, [dispatch]);

	return (
		<Grid
			container
			spacing={4}
			sx={{ marginBottom: '60px' }}
			justifyContent='center'
			alignItems='stretch'
		>
			{loading ? (
				<p>Loading...</p>
			) : filter.length > 0 ? (
				filteredArticles.map(article => {
					return (
						<Grid key={article.id} item xs={12} sm={6} md={4} pr={1}>
							<ArticleCard
								id={article.id}
								imgUrl={article.imageUrl}
								date={article.updatedAt}
								title={article.title}
								description={article.summary}
							/>
						</Grid>
					);
				})
			) : (
				articles.map(article => {
					return (
						<Grid key={article.id} item xs={12} sm={6} md={4} pr={1}>
							<ArticleCard
								id={article.id}
								imgUrl={article.imageUrl}
								date={article.updatedAt}
								title={article.title}
								description={article.summary}
							/>
						</Grid>
					);
				})
			)}
		</Grid>
	);
};

export default ArticlesList;
