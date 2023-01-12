import React from 'react';
import ArticlesList from '../../components/ArticlesList';
import FilterBar from '../../components/FilterBar';
import { useAppSelector } from '../../hooks/useAppSelector';
import { filteredArticlesSelector } from '../../store/articles/articlesSelectors';
import { Box, Container, Typography, Divider } from '@mui/material';

const Home = () => {
	const filteredItems = useAppSelector(filteredArticlesSelector);
	return (
		<Container maxWidth='lg'>
			<FilterBar />

			<Typography sx={{ margin: '0 0 5px', fontWeight: '600' }}>
				Results: {filteredItems.length}
			</Typography>
			<Divider sx={{ margin: '0 0 45px' }} />

			<Box sx={{ flexGrow: 1 }}>
				<ArticlesList />
			</Box>
		</Container>
	);
};

export default Home;
