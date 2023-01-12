import React from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { filterSelector } from '../../store/articles/articlesSelectors';
import { setFilter } from '../../store/articles/articlesSlice';
import SearchIcon from '@mui/icons-material/Search';
import {
	FormControl,
	OutlinedInput,
	InputAdornment,
	Typography,
} from '@mui/material';

const FilterBar = () => {
	const dispatch = useAppDispatch();
	const filterValue = useAppSelector(filterSelector);

	const onFilterChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		dispatch(setFilter(e.currentTarget.value));
	};

	return (
		<FormControl
			sx={{ width: '600px', margin: '50px 0 40px' }}
			variant='outlined'
		>
			<Typography sx={{ margin: '0 0 10px', fontWeight: '600' }}>
				Filter by keywords
			</Typography>
			<OutlinedInput
				value={filterValue}
				onChange={onFilterChange}
				startAdornment={
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				}
				aria-describedby='outlined-weight-helper-text'
				inputProps={{
					'aria-label': 'weight',
				}}
				sx={{ boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}
			/>
		</FormControl>
	);
};

export default FilterBar;
