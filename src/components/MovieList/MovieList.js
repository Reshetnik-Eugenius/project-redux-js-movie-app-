import React from 'react'
import Slider from 'react-slick'
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.scss'
import { Setting } from '../../common/setting';

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllSeries);

    let renderMovies, renderSeries = '';

    renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, index) => (
				<MovieCard key={index} data={movie} />
			))
		) : (
			<div className="movies-error">
				<h3>{movies.Error}</h3>
			</div>
        );
    
    renderSeries =
		series.Response === "True" ? (
			series.Search.map((serial, index) => (
				<MovieCard key={index} data={serial} />
			))
		) : (
			<div className="series-error">
				<h3>{series.Error}</h3>
			</div>
		);
    
    return (
		<div className="movie-wrapper">
			<div className="movie-list">
				<h3>Movies</h3>
				<div className="movie-container">
					<Slider {...Setting}>{renderMovies}</Slider>
				</div>
			</div>
			<div className="series-list">
				<h3>Series</h3>
				<div className="series-container">
					<Slider {...Setting}>{renderSeries}</Slider>
				</div>
			</div>
		</div>
	);
}

export default MovieList;