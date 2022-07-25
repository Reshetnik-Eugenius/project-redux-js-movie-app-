import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncSeries} from '../../features/movies/movieSlice'

const Home = () => {
	const dispatch = useDispatch();
	const movieTitle = "Lion";
	const seriesTitle = "King";

    useEffect(() => {
		dispatch(fetchAsyncMovies(movieTitle));
		dispatch(fetchAsyncSeries(seriesTitle));
	}, [dispatch]);

    return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
}

export default Home;