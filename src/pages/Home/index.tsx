import React from 'react';

import {
	Box,
	Container,
	FormControl,
	OutlinedInput,
	InputAdornment,
	Typography,
	Divider,
} from '@mui/material';

import ArticlesList from '../../components/ArticlesList';

const Home = () => {
	return (
		<Container maxWidth='xl'>
			<FormControl sx={{ width: '600px' }} variant='outlined'>
				<Typography component='h2'>Filter by keywords</Typography>
				<OutlinedInput
					id='outlined-adornment-weight'
					startAdornment={<InputAdornment position='start'>$</InputAdornment>}
					aria-describedby='outlined-weight-helper-text'
					inputProps={{
						'aria-label': 'weight',
					}}
				/>
			</FormControl>

			<Typography component='h2'>Results: 6</Typography>
			<Divider />

			<Box sx={{ flexGrow: 1 }}>
				<ArticlesList />
			</Box>
		</Container>
	);
};

export default Home;
