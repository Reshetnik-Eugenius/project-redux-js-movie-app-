import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route path='/' element={'Home'} />
				<Route path='*' element={'PageNotFound'} />
				<Route path='/movie/:imdbID' element={'MovieDetail'} />
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
