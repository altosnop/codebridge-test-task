import React, { useEffect } from 'react';

import { Grid } from '@mui/material';

import ArticleCard from '../ArticleCard';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getArticles } from '../../store/articles/articlesSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { articlesSelector } from '../../store/articles/articlesSelectors';

const ArticlesList = () => {
	const dispatch = useAppDispatch();
	const articles = useAppSelector(articlesSelector);

	useEffect(() => {
		dispatch(getArticles());
	}, [dispatch]);

	return (
		<Grid
			container
			spacing={{ xs: 1, md: 4 }}
			columns={{ xs: 1, sm: 8, md: 16 }}
			sx={{ margin: '0 0 60px' }}
		>
			{articles &&
				articles.map(article => {
					return (
						<Grid key={article.id} item xs={2} sm={4} md={4}>
							<ArticleCard
								imgUrl={article.imageUrl}
								date={article.updatedAt}
								title={article.title}
								description={article.summary}
							/>
						</Grid>
					);
				})}
		</Grid>
	);
};

export default ArticlesList;
