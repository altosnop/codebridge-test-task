import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Article from '../pages/Article';
import Home from '../pages/Home';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/article/:id' element={<Article />} />
		</Routes>
	);
};

export default MainRoutes;
