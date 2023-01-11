import React from 'react';
import './styles.scss';

import { TCardProps } from '../../types/types';

import {
	Card,
	CardActions,
	CardContent,
	Typography,
	CardMedia,
} from '@mui/material';

import { East, CalendarToday } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, imgUrl, date, title, description }: TCardProps) => {
	return (
		<Card
			sx={{
				height: '100%',
				boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia sx={{ height: 217 }} image={imgUrl} title={title} />
			<CardContent sx={{ marginBottom: 'auto' }}>
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
					{description.substring(0, 100)}...
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: '16px' }}>
				<Link to={`/article/${id}`} className='read-more'>
					<Typography
						sx={{
							display: 'flex',
							alignItems: 'center',
							fontWeight: '700',
						}}
					>
						Read more <East sx={{ margin: '0 0 0 5px', width: '15px' }} />
					</Typography>
				</Link>
			</CardActions>
		</Card>
	);
};

export default ArticleCard;
