import React from 'react';

import { Grid } from '@mui/material';

import ArticleCard from '../ArticleCard';

const ArticlesList = () => {
	return (
		<Grid
			container
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			<Grid item xs={2} sm={4} md={4}>
				<ArticleCard />
			</Grid>
			<Grid item xs={2} sm={4} md={4}>
				<ArticleCard />
			</Grid>
			<Grid item xs={2} sm={4} md={4}>
				<ArticleCard />
			</Grid>
			<Grid item xs={2} sm={4} md={4}>
				<ArticleCard />
			</Grid>
			<Grid item xs={2} sm={4} md={4}>
				<ArticleCard />
			</Grid>
			<Grid item xs={2} sm={4} md={4}>
				<ArticleCard />
			</Grid>
		</Grid>
	);
};

export default ArticlesList;
