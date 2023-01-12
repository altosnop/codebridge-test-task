import React, { useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { TArticle } from './../../types/types';
import { Container, Paper, Typography, Box } from '@mui/material';
import WestIcon from '@mui/icons-material/West';

const Article = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [articleData, setArticleData] = useState<TArticle | undefined>(
		undefined
	);

	useEffect(() => {
		const getArticle = async () => {
			const response = await axios.get<TArticle>(
				`https://api.spaceflightnewsapi.net/v3/articles/${id}`
			);

			setArticleData(response.data);
		};

		getArticle();
	}, [id]);
	return (
		<>
			{articleData && (
				<>
					<Box className='background'>
						<img className='img' src={articleData.imageUrl} alt='' />
					</Box>
					<Container maxWidth='xl' className='container'>
						<Paper
							className='paper'
							sx={{
								padding: '0 75px 50px',
								boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
							}}
						>
							<Typography
								variant='h5'
								sx={{ padding: '35px 0 50px', textAlign: 'center' }}
							>
								{articleData.title}
							</Typography>
							<Typography className='description'>
								{articleData.summary}
							</Typography>
						</Paper>
						<Typography
							sx={{
								display: 'flex',
								alignItems: 'center',
								margin: '35px 0 45px 75px',
								fontWeight: '700',
								cursor: 'pointer',
							}}
							onClick={() => {
								navigate(-1);
							}}
						>
							<WestIcon sx={{ margin: '0 5px 0 0', width: '15px' }} /> Back to
							homepage
						</Typography>
					</Container>
				</>
			)}
		</>
	);
};

export default Article;
