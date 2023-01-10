import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from './articles/articlesSlice';

const store = configureStore({
	reducer: {
		articles: articlesSlice,
	},
	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
