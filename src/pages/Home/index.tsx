import React from 'react';

import { Box, Container, Typography, Divider } from '@mui/material';

import ArticlesList from '../../components/ArticlesList';
import FilterBar from '../../components/FilterBar';

const Home = () => {
	return (
		<Container maxWidth='xl'>
			<FilterBar />

			<Typography sx={{ margin: '0 0 5px', fontWeight: '600' }}>
				Results: 6
			</Typography>
			<Divider sx={{ margin: '0 0 45px' }} />

			<Box sx={{ flexGrow: 1 }}>
				<ArticlesList />
			</Box>
		</Container>
	);
};

export default Home;
