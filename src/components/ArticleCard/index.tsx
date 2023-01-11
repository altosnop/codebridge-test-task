import React from 'react';
import { CardProps } from '../../types/types';

import {
	Card,
	CardActions,
	CardContent,
	Typography,
	CardMedia,
} from '@mui/material';

import { East, CalendarToday } from '@mui/icons-material';

const ArticleCard = ({ imgUrl, date, title, description }: CardProps) => {
	return (
		<Card
			sx={{
				maxWidth: 400,
				minHeight: '500px',
				boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
			}}
		>
			<CardMedia sx={{ height: 217 }} image={imgUrl} title='green iguana' />
			<CardContent>
				<Typography
					gutterBottom
					variant='body2'
					color='text.secondary'
					sx={{ display: 'flex', alignItems: 'center' }}
				>
					<CalendarToday sx={{ margin: '0 7px 0 0', width: '18px' }} />
					{date}
				</Typography>
				<Typography gutterBottom variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{description}
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: '16px' }}>
				<Typography
					sx={{ display: 'flex', alignItems: 'center', fontWeight: '700' }}
				>
					Read more <East sx={{ margin: '0 0 0 5px', width: '15px' }} />
				</Typography>
			</CardActions>
		</Card>
	);
};

export default ArticleCard;
