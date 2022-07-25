import React from 'react'
import Slider from 'react-slick'
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.scss'
import { Setting } from '../../common/setting';
import Paginate from 'react-paginate';

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
		<div className='movie-wrapper'>
			<div className='movie-list'>
				<h3>Movies</h3>
				<div className='movie-container'>
					<Slider {...Setting}>{renderMovies}</Slider>
				</div>
				{/* <div> */}
				<Paginate
					pageCount={20}
					// pageCount={allPages}
					initialPage={0}
					marginPagesDisplayed={1}
					pageRangeDisplayed={5}
					marginPagesDisplayed={3}
					previousLabel={<i className='fa fa-chevron-left'></i>}
					nextLabel={<i className='fa fa-chevron-right'></i>}
					containerClassName={'paginate-container'}
					pageClassName={'paginate-item'}
					activeClassName={'paginate-active-item'}
					previousClassName={'paginate-previous'}
					nextClassName={'paginate-next'}
					disabledClassName={'paginate-disabled'}
					breakClassName={'paginate-break'}
					// onPageChange={handlePageChange}
				/>
				{/* </div> */}
			</div>
			<div className='series-list'>
				<h3>Series</h3>
				<div className='series-container'>
					<Slider {...Setting}>{renderSeries}</Slider>
				</div>
			</div>
		</div>
	);
}

export default MovieList;