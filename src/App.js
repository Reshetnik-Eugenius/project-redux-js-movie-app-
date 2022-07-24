import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
import MovieDetail from './components/MovieDetail/MovieDetail'

function App() {
	return (
		<BrowserRouter>
			<Header></Header>
			<div className='container'></div>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='*' element={<PageNotFound/>} />
				<Route path='/movie/:imdbID' element={<MovieDetail/>} />
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
