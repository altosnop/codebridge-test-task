import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const ArticleCard = () => {
	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardMedia
				sx={{ height: 217 }}
				image='https://images.unsplash.com/photo-1546557036-57b741df8f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl6emFyZHxlbnwwfHwwfHw%3D&w=1000&q=80'
				title='green iguana'
			/>
			<CardContent>
				<Typography gutterBottom variant='body2' color='text.secondary'>
					June 29th, 2021
				</Typography>
				<Typography gutterBottom variant='h5' component='div'>
					The 2020 World's Most Valuable Brands
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Non sed molestie tortor massa vitae in mattis. Eget vel consequat
					hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
					pharetra...
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Read more {'->'}</Button>
			</CardActions>
		</Card>
	);
};

export default ArticleCard;
