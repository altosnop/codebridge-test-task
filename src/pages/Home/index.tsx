import React from 'react';

import { Box, Container, Typography, Divider } from '@mui/material';

import ArticlesList from '../../components/ArticlesList';
import FilterBar from '../../components/FilterBar';
import { useAppSelector } from '../../hooks/useAppSelector';
import { totalItemsSelector } from '../../store/articles/articlesSelectors';

const Home = () => {
	const totalItems = useAppSelector(totalItemsSelector);
	return (
		<Container maxWidth='lg'>
			<FilterBar />

			<Typography sx={{ margin: '0 0 5px', fontWeight: '600' }}>
				Results: {totalItems}
			</Typography>
			<Divider sx={{ margin: '0 0 45px' }} />

			<Box sx={{ flexGrow: 1 }}>
				<ArticlesList />
			</Box>
		</Container>
	);
};

export default Home;
