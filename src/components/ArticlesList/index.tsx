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
		<Grid container spacing={4} justifyContent='center' alignItems='stretch'>
			{articles &&
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
				})}
		</Grid>
	);
};

export default ArticlesList;
