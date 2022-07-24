import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import MovieAPI from '../../common/API/movieAPI';
import { API_KEY } from "../../common/API/movieAPIKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const movieTitle = "Harry";
    const dispatch = useDispatch();

		const fetchMovies = async () => {
			const response = await MovieAPI.get(
				`?apiKey=${API_KEY}&s=${movieTitle}&type=movie`
			).catch((err) => {
				console.log("Err: ", err);
			});
			dispatch(addMovies(response.data));
			// console.log("Response from API: ", response);
		};

    useEffect(() => {
		fetchMovies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


    
    return (
		<div>
			<div className="banner-img"></div>
			<MovieList />
		</div>
	);
}

export default Home;