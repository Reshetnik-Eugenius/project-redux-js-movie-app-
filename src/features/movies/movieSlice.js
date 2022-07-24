import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from "../../common/API/movieAPI";
import { API_KEY } from "../../common/API/movieAPIKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieTitle = "Harry";
    const response = await MovieAPI.get(
        `?apiKey=${API_KEY}&s=${movieTitle}&type=movie`)
    
    return response.data;
})

export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncSeries", async () => {
	const seriesTitle = "Matrix";
	const response = await MovieAPI.get(
		`?apiKey=${API_KEY}&s=${seriesTitle}&type=series`
	);

	return response.data;
});

export const fetchAsyncMovieDetail = createAsyncThunk(
	"movies/fetchAsyncMovieDetail",
	async (id) => {
		const response = await MovieAPI.get(
			`?apiKey=${API_KEY}&i=${id}&Plot=full`
		);

		return response.data;
	}
);

const initialState = {
    movies: {},
	series: {},
	selectMovie : {}
}

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		// addMovies: (state, { payload }) => {
		// 	state.movies = payload;
		// },
		removeSelectMovie: (state) => {
			state.selectMovie = {};
		} 
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log("Pending");
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("Fetched Successfully!");
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log("Rejected!");
		},
		[fetchAsyncSeries.fulfilled]: (state, { payload }) => {
			console.log("Fetched Successfully!");
			return { ...state, series: payload };
		},
		[fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
			console.log("Fetched Successfully!");
			return { ...state, selectMovie: payload };
		},
	},
});

export const { removeSelectMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectMovie = (state) => state.movies.selectMovie;
export default movieSlice.reducer;