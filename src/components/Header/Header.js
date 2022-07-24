import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'
import { useDispatch } from 'react-redux'
import {
	fetchAsyncMovies,
	fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Header = () => {
	const [searchStr, setSearch] = useState('');
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(fetchAsyncMovies(searchStr));
		dispatch(fetchAsyncSeries(searchStr));
		setSearch('');
		// console.log(searchStr);
	}

	return (
		<div className='header'>
			<div className='logo'>
				<Link to='/'>Movie React App</Link>
			</div>
			
			<div className='search-bar'>
				<form onSubmit={submitHandler}>
					<input
						type='text'
						value={searchStr}
						placeholder='Search ...'
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button type='submit'><i className='fa fa-search'></i></button>
				</form>
			</div>

			<div className='user-image'>
				<img src={user} alt='user'/>
			</div>
		</div>
  	)
}

export default Header