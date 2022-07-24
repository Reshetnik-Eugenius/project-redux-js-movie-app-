import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncSeries} from '../../features/movies/movieSlice'

const Home = () => {
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(fetchAsyncMovies());
		dispatch(fetchAsyncSeries());
	}, [dispatch]);


    
    return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
}

export default Home;