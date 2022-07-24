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

const initialState = {
    movies: {},
    series: {}
}

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
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
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;