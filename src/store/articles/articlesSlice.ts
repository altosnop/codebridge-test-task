import { createSlice } from '@reduxjs/toolkit';
import { ArticlesState } from '../../types/types';

const initialState: ArticlesState = {
	items: [],
	filter: '',
	loading: false,
};

const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {},
});

export default articlesSlice.reducer;
