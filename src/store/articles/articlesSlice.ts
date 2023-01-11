import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ArticlesState, Article } from '../../types/types';

const initialState: ArticlesState = {
	items: [],
	filter: '',
	totalItems: 0,
	loading: false,
};

export const getArticles = createAsyncThunk(
	'articles/getArticles',
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const response = await axios.get<Article[]>(
				'https://api.spaceflightnewsapi.net/v3/blogs'
			);

			dispatch(setArticles(response.data));
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		setArticles: (state, action: PayloadAction<Article[]>) => {
			state.items = [...action.payload];
			state.totalItems = state.items.length;
		},
	},
	extraReducers: builder => {
		builder.addCase(getArticles.pending, (state, _) => {
			state.loading = true;
		});
		builder.addCase(getArticles.fulfilled, (state, _) => {
			state.loading = false;
		});
	},
});

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
