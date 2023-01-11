import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TArticlesState, TArticle } from '../../types/types';

const initialState: TArticlesState = {
	items: [],
	filter: '',
	totalItems: 0,
	loading: false,
};

export const getArticles = createAsyncThunk(
	'articles/getArticles',
	async (_, { rejectWithValue, dispatch }) => {
		try {
			const response = await axios.get<TArticle[]>(
				'https://api.spaceflightnewsapi.net/v3/articles'
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
		setArticles: (state, action: PayloadAction<TArticle[]>) => {
			state.items = [...action.payload];
			state.totalItems = state.items.length;
		},
		setFilter: (state, action: PayloadAction<string>) => {
			state.filter = action.payload;
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

export const { setArticles, setFilter } = articlesSlice.actions;

export default articlesSlice.reducer;
